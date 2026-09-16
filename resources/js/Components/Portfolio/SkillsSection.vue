<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { skills } from "@/data/skills";
</script>

<template>
    <section id="skills" class="reveal relative overflow-hidden px-6 py-24">
        <div class="mx-auto max-w-6xl">
            <!-- Section heading -->
            <div class="mb-14 max-w-3xl">
                <p class="reveal-item text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
                    Technical Skills
                </p>

                <h2 class="reveal-item mt-4 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                    Technologies I work with.
                </h2>

                <p class="reveal-item mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                    Technologies and tools I use to build, maintain, and
                    support web applications.
                </p>
            </div>

            <!-- Skill categories -->
            <div class="grid gap-5 md:grid-cols-2">
                <article v-for="(category, index) in skills" :key="category.title"
                    class="skill-card reveal-item group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-400/30 hover:bg-slate-900/70 hover:shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
                    <!-- Ambient card glow -->
                    <div
                        class="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-500/0 blur-3xl transition-all duration-700 group-hover:bg-indigo-500/[0.08]">
                    </div>

                    <!-- Top accent -->
                    <div
                        class="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/0 to-transparent transition-all duration-700 group-hover:via-indigo-400/50">
                    </div>

                    <!-- Header -->
                    <div class="relative flex items-start justify-between gap-6">
                        <div class="flex items-start gap-4">
                            <!-- Category icon -->
                            <div
                                class="category-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-500 group-hover:scale-105 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                                <Icon :icon="category.icon" class="h-5 w-5" />
                            </div>

                            <div>
                                <div class="flex items-center gap-3">
                                    <h3 class="text-lg font-semibold tracking-tight text-white">
                                        {{ category.title }}
                                    </h3>

                                    <span
                                        class="font-mono text-[10px] tracking-widest text-slate-700 transition-colors duration-300 group-hover:text-indigo-400/60">
                                        {{ String(index + 1).padStart(2, "0") }}
                                    </span>
                                </div>

                                <p class="mt-1.5 max-w-sm text-sm leading-6 text-slate-500">
                                    {{ category.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Technologies -->
                    <div class="relative mt-7 flex flex-wrap gap-2.5">
                        <div v-for="skill in category.skills" :key="skill.name"
                            class="skill-item group/skill flex items-center gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/40 px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800/70">
                            <div class="flex h-7 w-7 items-center justify-center">
                                <Icon :icon="skill.icon" class="skill-logo h-6 w-6 transition-all duration-300" />
                            </div>

                            <span
                                class="text-xs font-medium text-slate-400 transition-colors duration-300 group-hover/skill:text-white">
                                {{ skill.name }}
                            </span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Closing statement -->
            <div class="reveal-item mt-16 flex items-center justify-center gap-5 text-sm text-slate-600">
                <div class="h-px w-10 bg-slate-800"></div>

                <p class="text-center">
                    The right tools turn ideas into reliable products.
                </p>

                <div class="h-px w-10 bg-slate-800"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skill-card:hover .category-icon {
    transform: rotate(3deg) scale(1.05);
}

.skill-item:hover .skill-logo {
    transform: scale(1.15);
}

@media (prefers-reduced-motion: reduce) {

    .skill-card:hover .category-icon,
    .skill-item:hover .skill-logo {
        transform: none;
    }
}
</style>
