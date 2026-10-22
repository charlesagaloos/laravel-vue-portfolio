<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Head } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import SetupSection from "@/Components/Portfolio/SetupSection.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
import { useReveal } from "@/Composables/useReveal";

useReveal();
</script>

<template>
    <Head title="About" />
    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />
        <div class="relative z-10 pt-20">
            <Navbar />

            <section id="about" class="reveal overflow-hidden px-6 py-24">
                <div class="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
                    <div class="max-w-3xl">
                        <p class="reveal-item text-sm uppercase tracking-[0.3em] text-slate-500">About Me</p>
                        <h1 class="reveal-item mt-3 text-4xl font-bold md:text-5xl">A technical partner for solving real business problems.</h1>

                        <div class="mt-8 space-y-5 text-lg leading-8 text-slate-400">
                            <p class="reveal-item">I'm a Full-Stack Engineer with 5+ years of experience helping businesses build, improve, and maintain the systems they depend on every day.</p>
                            <p class="reveal-item">I work across frontend, backend, databases, and APIs to turn business ideas and manual processes into useful digital products. My work includes building internal tools, business workflows, dashboards, integrations, and production-ready web applications.</p>
                            <p class="reveal-item">I start with the people, workflow, and business goal behind the request. Then I shape the right first version, build it carefully, and stay involved as the system grows. The goal is not just to write code, but to make the work clearer, faster, and more dependable for the people using it.</p>
                        </div>

                        <div class="mt-10 flex flex-wrap items-center gap-6">
                            <a href="https://github.com/charlesagaloos" target="_blank" rel="noopener noreferrer" class="reveal-item group inline-flex items-center gap-3 text-sm font-medium text-white">
                                <Icon icon="lucide:github" class="h-5 w-5 text-slate-400 transition-colors group-hover:text-indigo-300" />
                                <span class="border-b border-slate-700 pb-1 transition-colors group-hover:border-indigo-300">View my GitHub profile</span>
                                <Icon icon="lucide:arrow-up-right" class="h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-300" />
                            </a>

                            <Link href="/resume" class="reveal-item group inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800">
                                View Resume
                                <Icon icon="lucide:arrow-up-right" class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>

                    <div class="reveal-item relative mx-auto w-full max-w-[380px]">
                        <div class="absolute inset-8 rounded-[2.5rem] bg-indigo-500/[0.08] blur-3xl"></div>
                        <div class="theme-avatar-surface relative h-[430px] overflow-hidden rounded-[2.5rem] border border-slate-700/80 shadow-2xl shadow-black/30 transition-colors duration-500">
                            <div class="theme-avatar-visual absolute inset-0">
                                <img src="/charles.png" alt="Portrait of Charles Agaloos" class="theme-avatar-image absolute inset-0 z-0 h-full w-full scale-[1.12] bg-transparent object-cover object-bottom" />
                                <div class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent px-6 pb-6 pt-24">
                                    <p class="theme-avatar-label text-xs uppercase tracking-[0.25em]" style="color: #ffffff !important;">Hello, I'm</p>
                                    <p class="theme-avatar-name mt-2 text-2xl font-semibold" style="color: #ffffff !important;">Charles Agaloos</p>
                                    <p class="mt-1 text-sm text-slate-300">Full-Stack Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div class="absolute -bottom-5 -left-5 z-40 rounded-2xl border border-slate-800 bg-slate-950/95 px-4 py-3 shadow-xl shadow-black/20">
                            <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500">Based in</p>
                            <p class="mt-1 text-sm font-medium text-white">Marikina City, Philippines</p>
                        </div>
                        <div class="absolute -right-4 top-8 z-30 rounded-2xl border border-slate-200/10 bg-slate-100 px-4 py-3 text-slate-900 shadow-xl shadow-black/20">
                            <div class="flex items-center gap-2 text-xs font-medium text-slate-600">
                                <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                                Open to opportunities
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SetupSection />
            <Footer />
        </div>
    </main>
</template>
