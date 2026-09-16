export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    title: string;
    description: string;
    icon: string;
    skills: Skill[];
}

export const skills: SkillCategory[] = [
    {
        title: "Backend",
        description: "Server-side development and business logic.",
        icon: "lucide:server",
        skills: [
            {
                name: "PHP",
                icon: "logos:php",
            },
            {
                name: "Laravel",
                icon: "logos:laravel",
            },
            {
                name: "CodeIgniter",
                icon: "logos:codeigniter",
            },
        ],
    },

    {
        title: "Frontend",
        description: "Responsive and interactive user interfaces.",
        icon: "lucide:monitor",
        skills: [
            {
                name: "JavaScript",
                icon: "logos:javascript",
            },
            {
                name: "HTML",
                icon: "logos:html-5",
            },
            {
                name: "CSS",
                icon: "logos:css-3",
            },
            {
                name: "Tailwind CSS",
                icon: "logos:tailwindcss-icon",
            },
            {
                name: "Blade",
                icon: "logos:laravel",
            },
        ],
    },

    {
        title: "Database",
        description: "Data storage, management and optimization.",
        icon: "lucide:database",
        skills: [
            {
                name: "MySQL",
                icon: "logos:mysql",
            },
            {
                name: "SQL",
                icon: "lucide:database",
            },
        ],
    },

    {
        title: "APIs & Integration",
        description: "Connecting systems and third-party services.",
        icon: "lucide:plug",
        skills: [
            {
                name: "REST APIs",
                icon: "lucide:cloud",
            },
            {
                name: "API Integration",
                icon: "lucide:workflow",
            },
            {
                name: "RBAC",
                icon: "lucide:shield-check",
            },
        ],
    },

    {
        title: "CMS",
        description: "Content management and customization.",
        icon: "lucide:layout-template",
        skills: [
            {
                name: "WordPress",
                icon: "logos:wordpress-icon",
            },
            {
                name: "Custom CMS",
                icon: "lucide:layout-dashboard",
            },
        ],
    },

    {
        title: "Tools & Infrastructure",
        description: "Development tools, deployment and infrastructure.",
        icon: "lucide:settings",
        skills: [
            {
                name: "Git",
                icon: "logos:git-icon",
            },
            {
                name: "Linux",
                icon: "logos:linux-tux",
            },
            {
                name: "Apache",
                icon: "logos:apache",
            },
        ],
    },
];
