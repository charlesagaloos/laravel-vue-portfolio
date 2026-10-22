<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <section id="client-reach" class="reveal relative overflow-hidden px-6 py-16 md:py-20">
        <div class="mx-auto max-w-6xl">
            <!-- Section heading -->
            <div class="mb-14 max-w-3xl">
                <p class="reveal-item text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
                    Client Reach
                </p>

                <h2 class="reveal-item mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                    From business problems to systems people can rely on.
                </h2>

                <p class="reveal-item mt-5 max-w-2xl text-base leading-7 text-slate-400">
                    Whether you need a new platform, a better workflow, or a
                    dependable system behind your operations, I turn complex
                    requirements into practical software that moves the work forward.
                </p>
            </div>

            <!-- Client reach -->
            <div class="grid gap-5 md:grid-cols-2">
                <!-- International -->
                <article
                    class="reach-card reveal-item group relative overflow-hidden rounded-[2rem] border border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.12] via-slate-950/70 to-slate-950/90 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300/50 hover:shadow-[0_24px_80px_rgba(99,102,241,0.16)] md:p-9">
                    <!-- Glow -->
                    <div
                        class="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/0 blur-3xl transition-all duration-700 group-hover:bg-indigo-500/10">
                    </div>

                    <div class="relative">
                        <!-- Label -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <span
                                    class="flex h-2.5 w-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]"></span>

                                <span class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                                    International · Remote delivery
                                </span>
                            </div>

                            <span
                                class="font-mono text-xs text-slate-700 transition-colors duration-300 group-hover:text-indigo-400/60">
                                01
                            </span>
                        </div>

                        <!-- Content -->
                        <div class="mt-10">
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                <Icon icon="lucide:globe-2" class="h-7 w-7" />
                            </div>

                            <h3 class="mt-6 text-2xl font-semibold tracking-tight text-white">
                                    Production systems for growing teams
                            </h3>

                            <p class="mt-2 text-sm font-medium text-indigo-300/80">
                                Direct collaboration · Clear delivery
                            </p>

                            <p class="mt-5 max-w-lg text-sm leading-7 text-slate-400">
                                I work directly with international clients to
                                turn requirements into production-ready web
                                platforms, with thoughtful decisions across
                                the frontend, backend, database, and integrations.
                            </p>
                        </div>

                        <!-- Bottom -->
                        <div
                            class="mt-8 flex items-center gap-3 border-t border-slate-800/80 pt-5 text-xs text-slate-500">
                            <span>Built around your workflow</span>

                            <span class="h-1 w-1 rounded-full bg-slate-700"></span>

                            <span>Laravel · PHP · MySQL</span>
                        </div>
                    </div>
                </article>

                <!-- Local -->
                <article
                    class="reach-card reveal-item group relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-950/95 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-600 hover:shadow-[0_24px_80px_rgba(15,23,42,0.5)] md:p-9">
                    <!-- Glow -->
                    <div
                        class="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-slate-500/0 blur-3xl transition-all duration-700 group-hover:bg-slate-500/10">
                    </div>

                    <div class="relative">
                        <!-- Label -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <span
                                    class="h-2.5 w-2.5 rounded-full bg-slate-500 transition-all duration-500 group-hover:bg-slate-300"></span>

                                <span class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Local · Business systems
                                </span>
                            </div>

                            <span
                                class="font-mono text-xs text-slate-700 transition-colors duration-300 group-hover:text-slate-500">
                                02
                            </span>
                        </div>

                        <!-- Content -->
                        <div class="mt-10">
                            <div
                                class="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-slate-600 group-hover:text-slate-200">
                                <Icon icon="lucide:building-2" class="h-7 w-7" />
                            </div>

                            <h3 class="mt-6 text-2xl font-semibold tracking-tight text-white">
                                Systems that keep operations moving
                            </h3>

                            <p class="mt-2 text-sm font-medium text-slate-500">
                                Business workflows · Digital platforms
                            </p>

                            <p class="mt-5 max-w-lg text-sm leading-7 text-slate-400">
                                I build and improve business management
                                systems, e-commerce platforms, and content
                                experiences that help local teams work with
                                more clarity and consistency.
                            </p>
                        </div>

                        <!-- Bottom -->
                        <div
                            class="mt-8 flex items-center gap-3 border-t border-slate-800/80 pt-5 text-xs text-slate-500">
                            <span>Philippines</span>

                            <span class="h-1 w-1 rounded-full bg-slate-700"></span>

                            <span>Business · E-commerce · CMS</span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Connecting line -->
            <div class="reveal-item relative mx-auto mt-6 hidden max-w-xl items-center justify-center">
                <div class="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-indigo-400/20"></div>

                <div
                    class="mx-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.08)]">
                    <span class="text-xs">✦</span>
                </div>

                <div class="h-px flex-1 bg-gradient-to-l from-transparent via-slate-800 to-indigo-400/20"></div>
            </div>
        </div>
    </section>
</template>
