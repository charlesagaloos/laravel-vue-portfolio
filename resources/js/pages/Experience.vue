<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { Icon } from "@iconify/vue";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
import { skills } from "@/data/skills";
import { useReveal } from "@/Composables/useReveal";

useReveal();

const experience = [
    {
        title: "Independent Full-Stack Laravel Engineer",
        sortOrder: 1,
        companyLabel: "Key Point Learning - International Client",
        engagement: "Remote - Canada",
        company: "Key Point Learning · International Client",
        dates: "June 2026 - Present",
        workMode: "Remote · Canada",
        period: "Key Point Learning · International Client · June 2026 - Present",
        description: "Turned client requirements into dependable features for an online education platform, helping teams manage learning operations with less friction.",
        technologies: ["Laravel", "PHP", "Mailcoach", "Stripe", "MySQL"],
        details: [
            "Built the backend foundation in Laravel and PHP, from data models and migrations to application logic that supports day-to-day operations.",
            "Delivered practical UI improvements and integrations across Mailcoach, Stripe-related workflows, dashboards, affiliate tools, curriculum, and program/session management.",
            "Worked directly with the client to clarify requirements, troubleshoot issues, and ship improvements that keep the platform reliable as it evolves.",
        ],
    },
    {
        title: "WordPress Developer",
        sortOrder: 2,
        companyLabel: "Steven P. Official Website",
        engagement: "Independent - Client project - In progress",
        company: "Steven P. Official Website · Independent Client Project",
        dates: "April 2026 — Present",
        workMode: "Independent · In progress",
        period: "Steven P. Official Website · Independent Client Project",
        description: "Developing a WordPress e-commerce and portfolio website for an R&B artist selling digital vocal mixing templates and vocal chains.",
        technologies: ["WordPress", "E-commerce", "PHP", "JavaScript", "CMS"],
        details: [
            "Building the website around the artist's brand, music portfolio, and digital product business.",
            "Creating an e-commerce experience for vocal mixing templates and vocal chains while keeping the purchase journey clear for customers.",
            "Developing the portfolio side of the website to showcase the artist's work, identity, and creative projects.",
            "Continuing to improve and refine the WordPress platform as the project moves toward completion.",
        ],
    },
    {
        title: "Software Engineer",
        sortOrder: 3,
        companyLabel: "Pinnacle Technologies Inc.",
        engagement: "Hybrid - Caloocan, Philippines",
        company: "Pinnacle Technologies Inc.",
        dates: "September 2022 - May 2026",
        workMode: "Hybrid · Philippines",
        period: "Pinnacle Technologies Inc · September 2022 - May 2026",
        description: "Built and maintained multi-role web applications that support critical administrative, student, cashier, accounting, and applicant workflows.",
        technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL", "SQLyog"],
        details: [
            "Created clear, user-friendly interfaces with HTML, CSS, and JavaScript for people with different roles and responsibilities.",
            "Designed and maintained efficient SQLYog database structures so information remained organized and accessible across multiple access levels.",
            "Developed maintainable backend functionality using Laravel and PHP, improving the foundation for future features and changes.",
            "Investigated and resolved production issues to protect system stability, performance, and the user experience.",
        ],
    },
    {
        title: "Independent Full-Stack Developer",
        sortOrder: 4,
        companyLabel: "Bernabest Foodhouse Corporation & Remate",
        engagement: "Independent - Remote - Philippines",
        company: "Bernabest Foodhouse Corporation & Remate",
        dates: "January 2021 — January 2022",
        workMode: "Remote · Philippines",
        period: "Bernabest Foodhouse Corporation / Remate · Client Projects",
        description: "Delivered business systems and publishing platforms that helped client teams organize operations, manage information, and serve their users more effectively.",
        technologies: ["Laravel", "PHP", "JavaScript", "MySQL", "REST APIs"],
        details: [
            "Built Inventory Management and Cash Management systems that brought key business operations into clearer, more manageable workflows.",
            "Improved POS, HR, Franchise, Logistics, and Reporting modules to support more consistent day-to-day operations.",
            "Created and deployed a custom CMS with an admin dashboard for managing news articles, categories, and users.",
            "Built a Laravel publishing platform with RBAC for admins and bloggers, plus a public-facing portal for readers.",
            "Streamlined publishing workflows and enabled timely content updates for a smoother editorial process and better user engagement.",
            "Applied maintainable backend patterns to keep the systems stable, extensible, and easier to support.",
        ],
    },
];
</script>

<template>
    <Head title="Experience" />
    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />
        <div class="relative z-10 pt-20">
            <Navbar />

            <section class="px-6 py-24">
                <div class="mx-auto max-w-6xl">
                    <div class="max-w-3xl">
                        <p class="reveal-item text-sm uppercase tracking-[0.3em] text-slate-500">Experience</p>
                        <h1 class="reveal-item mt-3 text-4xl font-bold md:text-5xl">From requirements to release.</h1>
                        <p class="reveal-item mt-6 max-w-2xl text-lg leading-8 text-slate-400">I help businesses turn complex requirements into dependable systems—clearer workflows for teams, better experiences for users, and a technical foundation that can grow with the work.</p>
                        <Link href="/resume" class="reveal-item mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-300">
                            View resume <Icon icon="lucide:arrow-up-right" class="h-4 w-4" />
                        </Link>
                    </div>

                    <div class="relative mt-14 space-y-10 border-l border-slate-800 pl-8 md:ml-6 md:pl-12">
                        <article v-for="item in experience.slice().sort((first, second) => first.sortOrder - second.sortOrder)" :key="item.title" class="reveal-item relative rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 backdrop-blur-xl md:p-8">
                            <span class="absolute -left-[2.42rem] top-8 h-3 w-3 rounded-full bg-indigo-400 md:-left-[3.42rem]"></span>
                            <div class="grid gap-5 md:grid-cols-[0.7fr_1.3fr]">
                                <div>
                                    <h2 class="text-xl font-semibold text-white">{{ item.title }}</h2>
                                    <div class="mt-2 space-y-1 text-sm">
                                        <p class="text-indigo-300">{{ item.companyLabel || item.company }}</p>
                                        <p class="text-slate-500">{{ item.dates }}</p>
                                        <p class="text-slate-500">{{ item.engagement || item.workMode }}</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="leading-7 text-slate-300">{{ item.description }}</p>
                                    <ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-400">
                                        <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
                                    </ul>
                                    <div class="mt-6 flex flex-wrap gap-2">
                                        <span v-for="technology in item.technologies" :key="technology" class="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-400">{{ technology }}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section class="px-6 pb-24">
                <div class="mx-auto max-w-6xl rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 backdrop-blur-xl md:p-8">
                    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">Education</p>
                    <h2 class="mt-4 text-2xl font-semibold text-white">Our Lady of Fatima University</h2>
                    <p class="mt-2 text-slate-400">Bachelor of Science in Information Technology · June 2022</p>
                </div>
            </section>

            <section id="skills" class="reveal relative overflow-hidden px-6 py-10 pb-24">
                <div class="mx-auto max-w-6xl">
                    <div class="mb-14 max-w-3xl">
                        <p class="reveal-item text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">Stack and skills</p>
                        <h2 class="reveal-item mt-4 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">The tools behind practical solutions.</h2>
                        <p class="reveal-item mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">My stack is chosen to solve real business problems: reliable backends, focused interfaces, structured data, and integrations that make everyday work easier to run and maintain.</p>
                    </div>

                    <div class="grid gap-5 md:grid-cols-2">
                        <article v-for="(category, index) in skills" :key="category.title" class="skill-card reveal-item group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-400/30 hover:bg-slate-900/70 hover:shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
                            <div class="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/0 blur-3xl transition-all duration-700 group-hover:bg-indigo-500/[0.08]"></div>
                            <div class="relative flex items-start gap-4">
                                <div class="category-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-500 group-hover:scale-105 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-300"><Icon :icon="category.icon" class="h-5 w-5" /></div>
                                <div>
                                    <div class="flex items-center gap-3"><h3 class="text-lg font-semibold text-white">{{ category.title }}</h3><span class="font-mono text-[10px] tracking-widest text-slate-700">{{ String(index + 1).padStart(2, "0") }}</span></div>
                                    <p class="mt-1.5 max-w-sm text-sm leading-6 text-slate-500">{{ category.description }}</p>
                                </div>
                            </div>
                            <div class="relative mt-7 flex flex-wrap gap-2.5">
                                <div v-for="skill in category.skills" :key="skill.name" class="skill-item group/skill flex items-center gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/40 px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800/70">
                                    <div class="flex h-7 w-7 items-center justify-center"><Icon :icon="skill.icon" class="skill-logo h-6 w-6 transition-all duration-300" /></div>
                                    <span class="text-xs font-medium text-slate-400 transition-colors duration-300 group-hover/skill:text-white">{{ skill.name }}</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    </main>
</template>

<style scoped>
.skill-card:hover .category-icon { transform: rotate(3deg) scale(1.05); }
.skill-item:hover .skill-logo { transform: scale(1.15); }
</style>
