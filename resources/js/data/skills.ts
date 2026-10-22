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
        title: "Core Web",
        description: "Application development and secure business logic.",
        icon: "lucide:server",
        skills: [
            { name: "PHP", icon: "logos:php" },
            { name: "Laravel", icon: "logos:laravel" },
            { name: "CodeIgniter", icon: "logos:codeigniter" },
            { name: "REST API Development", icon: "lucide:cloud" },
            { name: "RBAC", icon: "lucide:shield-check" },
        ],
    },
    {
        title: "Frontend",
        description: "Responsive interfaces and maintainable UI systems.",
        icon: "lucide:monitor",
        skills: [
            { name: "HTML", icon: "logos:html-5" },
            { name: "CSS", icon: "logos:css-3" },
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "React", icon: "logos:react" },
            { name: "Inertia.js", icon: "lucide:layers-3" },
            { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
            { name: "Vite", icon: "logos:vitejs" },
            { name: "Responsive UI Design", icon: "lucide:scan" },
        ],
    },
    {
        title: "Databases",
        description: "Data structures, queries, and performance tuning.",
        icon: "lucide:database",
        skills: [
            { name: "MySQL", icon: "logos:mysql" },
            { name: "Database Design", icon: "lucide:table-2" },
            { name: "MySQL Optimization", icon: "lucide:gauge" },
            { name: "SQL", icon: "lucide:database" },
        ],
    },
    {
        title: "Integrations",
        description: "Payments, email, and third-party services.",
        icon: "lucide:plug",
        skills: [
            { name: "Stripe", icon: "lucide:credit-card" },
            { name: "Mailcoach", icon: "lucide:mail" },
            { name: "Third-Party API Integrations", icon: "lucide:workflow" },
        ],
    },
    {
        title: "Tools & Infrastructure",
        description: "Source control, servers, deployment, and hosting.",
        icon: "lucide:settings",
        skills: [
            { name: "Git", icon: "logos:git-icon" },
            { name: "GitHub", icon: "logos:github-icon" },
            { name: "Linux Server Management", icon: "logos:linux-tux" },
            { name: "Apache Configuration", icon: "logos:apache" },
            { name: "AWS", icon: "logos:aws" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "Deployment & Hosting", icon: "lucide:cloud-upload" },
        ],
    },
    {
        title: "CMS & AI",
        description: "Content platforms and modern assisted development.",
        icon: "lucide:layout-template",
        skills: [
            { name: "WordPress Maintenance", icon: "logos:wordpress-icon" },
            { name: "Custom CMS Development", icon: "lucide:layout-dashboard" },
            { name: "AI-Assisted Development", icon: "lucide:sparkles" },
        ],
    },
];
