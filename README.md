# Laravel Vue Portfolio

A modern personal portfolio website built with Laravel, Vue, Inertia.js, TypeScript, and Tailwind CSS.

The portfolio showcases my experience as a Full-Stack Engineer, selected projects, technical skills, and experience working with local and international clients.

## Tech Stack

- **Laravel 13**
- **Vue 3**
- **Inertia.js**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **PHP 8.5**
- **MySQL 8.4**
- **Docker Compose**

## Features

- Responsive portfolio design
- Animated hero section
- Scroll-based reveal animations
- Interactive navigation
- Project showcase
- Technical skills section
- Client experience section
- About section
- Contact section
- Responsive mobile layout
- Dark technical/premium visual design

## Docker

Copy the Docker environment template and set secure passwords before starting:

```bash
cp .env.docker.example .env.docker
# Generate a key and place it in APP_KEY inside .env.docker
php artisan key:generate --show
docker compose --env-file .env.docker up -d --build
```

The application will be available at `http://localhost:8080`. The Laravel app,
Nginx web server, and MySQL database run as separate services. Migrations run
automatically when the app container starts, and MySQL data is persisted in the
`portfolio_mysql_data` volume.

To stop the services without removing database data:

```bash
docker compose --env-file .env.docker down
```

## Project Structure

```text
resources/
├── js/
│   ├── Components/
│   │   └── Portfolio/
│   ├── Composables/
│   ├── data/
│   ├── pages/
│   └── app.ts
└── css/
    └── app.css
