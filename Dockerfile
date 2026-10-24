FROM php:8.5-cli-alpine AS vendor

WORKDIR /var/www/html
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN apk add --no-cache git unzip libzip-dev icu-dev oniguruma-dev \
    && docker-php-ext-install intl mbstring zip
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader --no-scripts

FROM node:22-alpine AS node

FROM vendor AS frontend

WORKDIR /var/www/html

# Wayfinder invokes Artisan during the Vite build, so this stage needs PHP as
# well as Node. Reuse the PHP 8.5 vendor stage and add the Node 22 toolchain.
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN apk add --no-cache libstdc++
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

# Provide build-only Laravel defaults for Wayfinder. Runtime values come from
# docker-compose and are not copied into the image.
ENV APP_ENV=production \
    APP_DEBUG=false \
    APP_KEY=base64:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA= \
    APP_URL=http://localhost:8080 \
    DB_CONNECTION=mysql \
    DB_HOST=127.0.0.1 \
    DB_PORT=3306 \
    DB_DATABASE=portfolio \
    DB_USERNAME=portfolio \
    DB_PASSWORD=build-only \
    CACHE_STORE=array \
    SESSION_DRIVER=array \
    QUEUE_CONNECTION=sync

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views bootstrap/cache \
    && rm -f bootstrap/cache/packages.php bootstrap/cache/services.php \
    && php artisan package:discover --ansi
RUN npm run build

FROM php:8.5-fpm-alpine AS app

WORKDIR /var/www/html

# Keep extension compilation sequential; parallel builds can race in PHP 8.5 Alpine.
RUN apk add --no-cache freetype libjpeg-turbo libpng libzip icu-libs \
    && apk add --no-cache --virtual .build-deps freetype-dev libjpeg-turbo-dev libpng-dev libzip-dev icu-dev oniguruma-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg

RUN docker-php-ext-install bcmath
RUN docker-php-ext-install gd
RUN docker-php-ext-install intl
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install pcntl
RUN docker-php-ext-install zip

RUN apk del .build-deps

COPY --from=vendor /var/www/html/vendor ./vendor
COPY --from=frontend /var/www/html/public/build ./public/build
COPY . .
COPY --from=frontend /var/www/html/bootstrap/cache ./bootstrap/cache

RUN mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache

COPY docker/entrypoint.sh /usr/local/bin/portfolio-entrypoint
RUN chmod +x /usr/local/bin/portfolio-entrypoint

EXPOSE 9000
ENTRYPOINT ["portfolio-entrypoint"]

FROM nginx:1.27-alpine AS web

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=app /var/www/html/public /var/www/html/public
