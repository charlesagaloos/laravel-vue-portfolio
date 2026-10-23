export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    title: string;
    slug: string;
    type: string;
    year: string;
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
    approach?: string;
    before?: string;
    after?: string;
    links?: ProjectLink[];
    showOnProjectsPage?: boolean;
    showOnHome?: boolean;
}

export const projects: Project[] = [
    {
        slug: "key-point-learning",
        title: "Key Point Learning App Platform",
        type: "Online Education Platform",
        year: "2026",
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
        approach:
            "I work from the client’s operational requirements, break them into maintainable Laravel features, and improve the platform through direct collaboration, testing, and incremental delivery.",
        before: "Education workflows and supporting business operations needed to be managed across a growing platform.",
        after: "A clearer foundation for managing learning operations, curriculum, programs, sessions, communication, and related workflows.",
        impact:
            "Helping the client continue improving a central learning platform with clearer workflows, maintainable features, and a stronger foundation for future education operations.",
        showOnProjectsPage: false,
    },

    {
        slug: "steven-p-official-website",
        title: "Steven P. Official Website",
        type: "E-commerce & Artist Portfolio",
        year: "2026",
        description:
            "A WordPress e-commerce and artist portfolio website currently under development for an independent R&B artist.",
        technologies: [
            "WordPress",
            "WooCommerce",
            "Elementor",
            "CartFlows",
            "PayMongo",
            "ShopEngine",
            "PHP",
            "JavaScript",
        ],
        role: "WordPress Development",
        status: "In progress",
        preview: "/images/projects/StevenP.png",
        url: "https://stevenpofficial.com/",
        clientType: "local",
        problem:
            "The artist needed a dedicated online platform to showcase their music, personal brand, and products while providing an integrated e-commerce experience.",
        solution:
            "Developing and customizing a WordPress website that combines the artist’s portfolio with an e-commerce experience for digital vocal mixing templates and vocal chains.",
        approach:
            "I am shaping the website around the artist’s identity, then connecting the portfolio experience with a simple path for visitors to understand and purchase digital products.",
        before: "The artist needed one dedicated place for their creative work, brand, and digital products.",
        after: "An evolving WordPress platform that brings the artist portfolio and digital product business together.",
        impact:
            "Creating a centralized digital platform for the artist's brand, music, and products while providing a foundation for future online sales and content.",
        showOnProjectsPage: true,
    },

    {
        slug: "lira",
        title: "LIRA",
        type: "Artist Portfolio Platform",
        year: "2026",
        description:
            "An platform in active development that helps independent artists build, customize, and share a dedicated creative presence on the web.",
        technologies: ["Laravel", "PHP", "MySQL", "Vite", "React", "TypeScript", "Inertia.js", "Tailwind CSS"],
        role: "Founder & Full-Stack Developer",
        status: "In development",
        preview: "/images/projects/LIRA.png",
        clientType: "local",
        problem:
            "Independent artists often rely on scattered social media profiles, making it difficult to bring their work, identity, links, and contact information together in one place.",
        solution:
            "Building a customizable portfolio platform where artists can create profiles, organize creative projects, add images, videos, music, and external links, preview changes, and publish a shareable public portfolio.",
        approach:
            "I am building the platform in stages, starting with the core portfolio creation, customization, preview, and publishing experience before expanding into deeper artist-focused capabilities.",
        before: "Independent artists often need to piece together their online presence across social platforms and disconnected tools.",
        after: "A focused platform where an artist can own a dedicated creative space and bring their work, identity, links, and contact information together.",
        impact:
            "LIRA is creating a simpler path for artists to own their online presence, present their work professionally, and build a foundation for future features such as analytics, custom domains, booking inquiries, and digital products.",
        showOnProjectsPage: true,
    },

    {
        slug: "bernabest-foodhouse",
        title: "Bernabest Foodhouse Corporation",
        type: "Business Management Systems",
        year: "2021",
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
        approach:
            "I worked across the backend, frontend, database, and operational workflows, improving existing modules while delivering new systems around the company’s day-to-day needs.",
        before: "The business depended on multiple systems covering operations, finance, people, sales, logistics, and reporting.",
        after: "Expanded and maintained business systems that gave teams more structured support across critical operational workflows.",
        impact:
            "Expanded and maintained the company's internal systems across inventory, HR, employee management, finance, sales, franchise operations, logistics, and reporting workflows.",
        showOnProjectsPage: false,
    },

    {
        slug: "remate",
        title: "Remate",
        type: "News Media Platforms",
        year: "2021",
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
        approach:
            "I balanced production maintenance with new platform development, keeping the existing website supported while building a Laravel-based publishing experience from the ground up.",
        before: "The client needed continued support for its existing news website and a separate platform for Remate Express.",
        after: "The production site remained supported while a new Laravel-based news platform was delivered for Remate Express.",
        impact:
            "Supported the existing production website while delivering a new Laravel-based platform for Remate Express.",
        links: [
            {
                label: "Remate.ph",
                url: "https://remate.ph/",
            },
        ],
        showOnProjectsPage: false,
    },

    {
        slug: "imos",
        title: "IMOS",
        type: "Inventory Management System",
        year: "2021",
        description:
            "An internal inventory management system developed to give the business a clearer view of stock, movement, and day-to-day inventory operations.",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
        role: "Full-Stack Developer",
        status: "Previous",
        preview: "/images/projects/iMOS_Inventory_Dashboard.png",
        clientType: "local",
        problem:
            "Inventory operations needed a more structured system for managing stock information and supporting day-to-day business decisions.",
        solution:
            "Built an internal Laravel-based inventory management system with structured workflows and database-backed tools for managing inventory operations.",
        approach:
            "I translated the operational workflow into maintainable backend, frontend, and database features designed around how the team manages inventory in practice.",
        before: "Inventory information and operational tasks needed a more dependable system for daily use.",
        after: "A dedicated internal system that gave the team a clearer foundation for managing inventory workflows.",
        impact:
            "Helped establish a more organized and dependable workflow for inventory operations within the business.",
        showOnProjectsPage: true,
        showOnHome: false,
    },

    {
        slug: "cash-management",
        title: "Cash Management System",
        type: "Business Finance Operations",
        year: "2021",
        description:
            "A business cash management system supporting financial tracking and operational workflows across a growing food-service organization.",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
        role: "Full-Stack Developer & Maintenance",
        status: "Previous",
        preview: "/images/projects/Cash_Management.png",
        clientType: "local",
        problem:
            "The business needed dependable tools to support cash-related operations across its day-to-day business processes.",
        solution:
            "Maintained and improved the cash management workflows as part of the companyâ€™s wider suite of business management systems.",
        approach:
            "I worked across existing application logic, database structures, and user workflows to keep the system reliable while improving its ability to support operations.",
        before: "Cash-related workflows were part of a wider set of operational systems that required ongoing support and improvement.",
        after: "A more dependable cash management workflow integrated into the companyâ€™s broader business systems.",
        impact:
            "Supported clearer and more reliable financial operations within the companyâ€™s internal systems.",
        showOnProjectsPage: true,
        showOnHome: false,
    },
];
