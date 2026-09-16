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
    },

    {
        title: "Siomai House",
        type: "Business Management Systems",
        description:
            "A collection of business management systems supporting inventory, cash management, POS, HR, franchise, logistics, reporting, and corporate operations.",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
        role: "Full-Stack Development",
        status: "Previous",
        url: "https://siomai.house/",
        clientType: "local",
    },

    {
        title: "Remate",
        type: "Local News Media Outlet",
        description:
            "Maintained and updated production news websites, including WordPress- and Laravel-based platforms.",
        technologies: ["WordPress", "Laravel", "PHP", "MySQL"],
        role: "Web Development & Maintenance",
        status: "Previous",
        clientType: "local",
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
