<script setup lang="ts">
import HeroVisual from "@/Components/Portfolio/HeroVisual.vue";

type RatingSummary = {
    average: number;
    total: number;
    recent: Array<{ rating: number; feedback: string | null; created_at: string }>;
};

defineProps<{ ratingSummary: RatingSummary }>();
</script>

<template>
    <section class="relative flex min-h-0 items-center justify-center overflow-hidden px-6 pb-4 pt-24">
        <!-- Background glow -->
        <div
            class="hero-accent-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl">
        </div>

        <div class="relative grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div class="text-center lg:text-left">
            <!-- Status -->
            <div
                class="hero-item mb-5 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3.5 py-1.5 text-xs text-slate-400 backdrop-blur">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>

                Available for new projects.
            </div>

            <!-- Title -->
            <p class="hero-item mb-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                Full-Stack Engineer · Business Systems Builder
            </p>

            <h1 class="hero-item text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Charles Benjamin M. Agaloos III
            </h1>

            <!-- Description -->
            <p class="hero-item mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
                I help businesses turn complex ideas and operational problems
                into reliable web systems. From the first requirement to a
                production-ready product, I build software that makes work
                clearer, faster, and easier to maintain.
            </p>

            <!-- Actions -->
            <div class="hero-item mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a href="#projects"
                    class="theme-primary-cta rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200">
                    See How I Can Help
                </a>

                <a href="#contact"
                    class="rounded-xl border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-900">
                    Contact Me
                </a>
            </div>

            </div>

            <HeroVisual :rating-summary="ratingSummary" />
        </div>
    </section>
</template>

<style scoped>
.hero-accent-glow {
    background-color: rgb(255 255 255 / 0.08);
}

:global(html.theme-light) .hero-accent-glow {
    background-color: rgb(12 16 47 / 0.1);
}

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
