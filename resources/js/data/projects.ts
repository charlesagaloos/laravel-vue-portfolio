export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    title: string;
    type: string;
    description: string;
    technologies: string[];
    role: string;
    status?: string;
    badge?: string;
    preview?: string;
    url?: string;
    clientType: "international" | "local";
    problem?: string;
    solution?: string;
    impact?: string;
    links?: ProjectLink[];
}

export const projects: Project[] = [
    {
        title: "Key Point Learning App Platform",
        type: "Online Education Platform",
        description:
            "A production Laravel-based learning platform supporting education workflows, dashboards, curriculum, programs, sessions, and platform integrations.",
        technologies: ["Laravel", "PHP", "MySQL", "Mailcoach", "Stripe", "JavaScript"],
        role: "Independent Full-Stack Laravel Engineer",
        status: "In progress",
        badge: "Most recent",
        clientType: "international",
        problem:
            "The client needed a dependable platform to manage learning operations, programs, sessions, curriculum, communication, and supporting business workflows in one place.",
        solution:
            "Developing Laravel and PHP features across the application, including backend logic, dashboards, affiliate tools, curriculum management, program/session workflows, Mailcoach integration, and Stripe-related functionality.",
        impact:
            "Helping the client continue improving a central learning platform with clearer workflows, maintainable features, and a stronger foundation for future education operations.",
    },

    {
        title: "Steven P. Official Website",
        type: "E-commerce & Artist Portfolio",
        description:
            "A WordPress e-commerce and artist portfolio website currently under development for an independent R&B artist.",
        technologies: ["WordPress", "PHP", "JavaScript", "CMS"],
        role: "WordPress Development",
        status: "In progress",
        url: "https://stevenpofficial.com/",
        clientType: "local",
        problem:
            "The artist needed a dedicated online platform to showcase their music, personal brand, and products while providing an integrated e-commerce experience.",
        solution:
            "Developing and customizing a WordPress website that combines the artist’s portfolio with an e-commerce experience for digital vocal mixing templates and vocal chains.",
        impact:
            "Creating a centralized digital platform for the artist's brand, music, and products while providing a foundation for future online sales and content.",
    },

    {
        title: "LIRA",
        type: "Open-source Artist Portfolio Platform",
        description:
            "An open-source platform in active development that helps independent artists build, customize, and share a dedicated creative presence on the web.",
        technologies: ["Laravel", "PHP", "MySQL", "Vite", "React", "TypeScript", "Inertia.js", "Tailwind CSS"],
        role: "Founder & Full-Stack Developer",
        status: "In development",
        clientType: "local",
        problem:
            "Independent artists often rely on scattered social media profiles, making it difficult to bring their work, identity, links, and contact information together in one place.",
        solution:
            "Building a customizable portfolio platform where artists can create profiles, organize creative projects, add images, videos, music, and external links, preview changes, and publish a shareable public portfolio.",
        impact:
            "LIRA is creating a simpler path for artists to own their online presence, present their work professionally, and build a foundation for future features such as analytics, custom domains, booking inquiries, and digital products.",
    },

    {
        title: "Bernabest Foodhouse Corporation",
        type: "Business Management Systems",
        description:
            "A collection of business management systems supporting inventory, cash management, POS, HR, franchise, employee management, petty cash, ordering, logistics, and reporting operations.",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
        role: "Full-Stack Development & Maintenance",
        status: "Previous",
        url: "https://siomai.house/",
        clientType: "local",
        problem:
            "The company relied on multiple interconnected systems to support day-to-day business operations, requiring both new system development and ongoing maintenance of existing modules.",
        solution:
            "Personally developed the Inventory Management, HR, and Employee Management systems, and built a new version of the Petty Cash system. Also maintained and improved existing POS, Franchise, Ordering, Transport & Logistics, Reports, and Cash Management systems.",
        impact:
            "Expanded and maintained the company's internal systems across inventory, HR, employee management, finance, sales, franchise operations, logistics, and reporting workflows.",
    },

    {
        title: "Remate",
        type: "News Media Platforms",
        description:
            "Maintained the production Remate.ph website and developed Remate Express from the ground up as a Laravel-based news platform.",
        technologies: ["WordPress", "Laravel", "PHP", "MySQL"],
        role: "Full-Stack Development & Maintenance",
        status: "Previous",
        clientType: "local",
        problem:
            "The client needed ongoing maintenance for its existing news website while also developing a separate platform for Remate Express.",
        solution:
            "Maintained and updated Remate.ph while developing Remate Express from scratch using Laravel, PHP, and MySQL.",
        impact:
            "Supported the existing production website while delivering a new Laravel-based platform for Remate Express.",
        links: [
            {
                label: "Remate.ph",
                url: "https://remate.ph/",
            },
        ],
    },
];
