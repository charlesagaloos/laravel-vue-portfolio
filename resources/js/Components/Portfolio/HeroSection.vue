<script setup lang="ts">
import HeroVisual from "@/Components/Portfolio/HeroVisual.vue";
</script>

<template>
    <section class="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 pb-12 pt-20">
        <!-- Background glow -->
        <div
            class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl">
        </div>

        <div class="relative grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div class="text-center lg:text-left">
            <!-- Status -->
            <div
                class="hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-400 backdrop-blur">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>

                Available for new projects.
            </div>

            <!-- Title -->
            <p class="hero-item mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">
                Full-Stack Engineer · Business Systems Builder
            </p>

            <h1 class="hero-item text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Charles Benjamin M. Agaloos III
            </h1>

            <!-- Description -->
            <p class="hero-item mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
                I help businesses turn complex ideas and operational problems
                into reliable web systems. From the first requirement to a
                production-ready product, I build software that makes work
                clearer, faster, and easier to maintain.
            </p>

            <!-- Actions -->
            <div class="hero-item mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a href="#projects"
                    class="theme-primary-cta rounded-xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200">
                    See How I Can Help
                </a>

                <a href="#contact"
                    class="rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-900">
                    Contact Me
                </a>
            </div>

            <!-- Technology line -->
            <div
                class="hero-item mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600 lg:justify-start">
                <span>Laravel</span>
                <span>•</span>
                <span>PHP</span>
                <span>•</span>
                <span>MySQL</span>
                <span>•</span>
                <span>JavaScript</span>
                <span>•</span>
                <span>REST APIs</span>
            </div>
            </div>

            <HeroVisual />
        </div>
    </section>
</template>

<style scoped>
.hero-item {
    opacity: 0;
    transform: translateY(20px);
    animation: heroFadeUp 0.8s ease-out forwards;
}

.hero-item:nth-child(1) {
    animation-delay: 0.1s;
}

.hero-item:nth-child(2) {
    animation-delay: 0.2s;
}

.hero-item:nth-child(3) {
    animation-delay: 0.3s;
}

.hero-item:nth-child(4) {
    animation-delay: 0.4s;
}

.hero-item:nth-child(5) {
    animation-delay: 0.5s;
}

.hero-item:nth-child(6) {
    animation-delay: 0.6s;
}

@keyframes heroFadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .hero-item {
        opacity: 1;
        transform: none;
        animation: none;
    }
}
</style>
