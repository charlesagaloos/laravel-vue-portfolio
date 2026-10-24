#!/bin/sh
set -e

cd /var/www/html

# Wait for Laravel's database connection and apply migrations.
php artisan migrate --force

# Prepare Laravel's public storage link.
php artisan storage:link --force || true

# Cache production configuration.
php artisan optimize

# Start PHP-FPM in the background.
php-fpm -D

# Keep Nginx in the foreground for Render.
exec nginx -g "daemon off;"
