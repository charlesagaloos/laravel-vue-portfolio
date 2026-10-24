#!/bin/sh
set -e

php artisan migrate --force
php artisan storage:link --force || true
php artisan optimize

exec php-fpm
