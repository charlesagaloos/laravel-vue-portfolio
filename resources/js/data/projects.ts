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
        title: "Steven P. Official Website",
        type: "E-commerce & Artist Portfolio",
        description:
            "An e-commerce and artist portfolio website currently under development for an independent music artist.",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
        role: "Full-Stack Development",
        status: "Current",
        url: "https://stevenpofficial.com/",
        clientType: "local",
        problem:
            "The artist needed a dedicated online platform to showcase their music, personal brand, and products while providing an integrated e-commerce experience.",
        solution:
            "Developing a custom Laravel-based website combining an artist portfolio with e-commerce functionality, including product management and a tailored user experience.",
        impact:
            "Creating a centralized digital platform for the artist's brand, music, and products while providing a foundation for future online sales and content.",
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
            {
                label: "Remate Express",
                url: "https://remateexpress.ph/",
            },
        ],
    },
];
