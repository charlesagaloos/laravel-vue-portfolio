<script setup lang="ts">
import { computed } from "vue";
import { Head, Link, usePage } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
import { projects } from "@/data/projects";
import { useReveal } from "@/Composables/useReveal";

useReveal();

const page = usePage();
const projectList = projects.filter((item) => item.showOnProjectsPage);
const projectSlug = computed(() => page.url.split("?")[0].split("/").filter(Boolean).pop() ?? "");
const projectIndex = computed(() => projectList.findIndex((item) => item.slug === projectSlug.value));
const project = computed(() => projectList[projectIndex.value]);
const nextProject = computed(() => projectList[(projectIndex.value + 1) % projectList.length]);
</script>

<template>

    <Head :title="project ? `${project.title} — Projects` : 'Project not found'" />

    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />

        <div class="relative z-10 pt-20">
            <Navbar />

            <template v-if="project">
                <section class="reveal px-6 py-20">
                    <div class="mx-auto max-w-5xl">
                        <Link href="/projects"
                            class="reveal-item inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-4 w-4" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5m6 6-6-6 6-6" />
                            </svg>
                            Back to projects
                        </Link>

                        <div class="mt-12 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                            <div>
                                <p class="reveal-item text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
                                    {{ project.type }}</p>
                                <h1 class="reveal-item mt-4 text-4xl font-bold tracking-tight md:text-6xl">{{
                                    project.title }}</h1>
                                <p class="reveal-item mt-6 max-w-2xl text-lg leading-8 text-slate-400">{{
                                    project.description }}</p>
                                <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer"
                                    class="reveal-item mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-indigo-300">
                                    Visit project
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7 17 17 7M7 7h10v10" />
                                    </svg>
                                </a>
                            </div>

                            <dl
                                class="reveal-item grid grid-cols-2 gap-x-6 gap-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 backdrop-blur-xl">
                                <div>
                                    <dt class="text-xs uppercase tracking-[0.2em] text-slate-600">Role</dt>
                                    <dd class="mt-2 text-sm leading-6 text-slate-300">{{ project.role }}</dd>
                                </div>
                                <div>
                                    <dt class="text-xs uppercase tracking-[0.2em] text-slate-600">Year</dt>
                                    <dd class="mt-2 text-sm text-slate-300">{{ project.year }}</dd>
                                </div>
                                <div>
                                    <dt class="text-xs uppercase tracking-[0.2em] text-slate-600">Type</dt>
                                    <dd class="mt-2 text-sm leading-6 text-slate-300">{{ project.type }}</dd>
                                </div>
                                <div>
                                    <dt class="text-xs uppercase tracking-[0.2em] text-slate-600">Status</dt>
                                    <dd class="mt-2 text-sm text-slate-300">{{ project.status ?? "Completed" }}</dd>
                                </div>
                            </dl>
                        </div>

                        <div
                            class="reveal-item project-showcase-image mt-16 overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/70 shadow-2xl shadow-black/20">
                            <img v-if="project.preview" :src="project.preview" :alt="`${project.title} project preview`"
                                class="h-full max-h-[560px] w-full object-cover" />
                            <div v-else
                                class="flex min-h-[360px] items-end bg-[radial-gradient(circle_at_75%_25%,rgba(99,102,241,0.32),transparent_35%),linear-gradient(135deg,#111827,#020617)] p-8 md:min-h-[460px] md:p-12">
                                <div>
                                    <p class="mt-3 max-w-xl text-3xl font-semibold text-white md:text-5xl">{{
                                        project.title }}</p>
                                    <p class="mt-4 text-slate-400">{{ project.type }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-20 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                            <div>
                                <p class="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">The case
                                    study</p>
                                <h2 class="mt-4 text-3xl font-semibold text-white md:text-4xl">Turning the challenge
                                    into a clearer system.</h2>
                            </div>
                            <div class="space-y-12">
                                <section v-if="project.problem">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">01 · The
                                        challenge</p>
                                    <p class="mt-4 text-lg leading-8 text-slate-300">{{ project.problem }}</p>
                                </section>
                                <section v-if="project.approach || project.solution">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">02 · My
                                        approach</p>
                                    <p class="mt-4 text-lg leading-8 text-slate-300">{{ project.approach ??
                                        project.solution }}</p>
                                </section>
                                <section v-if="project.impact">
                                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">03 · The
                                        outcome</p>
                                    <p class="mt-4 text-lg leading-8 text-slate-300">{{ project.impact }}</p>
                                </section>
                            </div>
                        </div>

                        <div v-if="project.before || project.after" class="mt-20 grid gap-5 md:grid-cols-2">
                            <article class="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-7">
                                <p class="text-xs uppercase tracking-[0.25em] text-slate-600">Before</p>
                                <p class="mt-5 leading-7 text-slate-400">{{ project.before }}</p>
                            </article>
                            <article class="rounded-3xl border border-indigo-400/20 bg-indigo-500/[0.06] p-7">
                                <p class="text-xs uppercase tracking-[0.25em] text-indigo-400">After</p>
                                <p class="mt-5 leading-7 text-slate-300">{{ project.after }}</p>
                            </article>
                        </div>

                        <section class="mt-20 border-t border-slate-800/80 pt-10">
                            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">Built with</p>
                            <div class="mt-6 flex flex-wrap gap-3"><span v-for="technology in project.technologies"
                                    :key="technology"
                                    class="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300">{{
                                        technology }}</span></div>
                        </section>

                        <Link :href="`/projects/${nextProject.slug}`"
                            class="group mt-20 flex items-center justify-between border-t border-slate-800/80 pt-8">
                            <div>
                                <p class="text-xs uppercase tracking-[0.25em] text-slate-600">Next project</p>
                                <p
                                    class="mt-2 text-2xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                                    {{ nextProject.title }}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor"
                                class="h-6 w-6 text-indigo-400 transition-transform group-hover:translate-x-2"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </template>

            <section v-else class="px-6 py-32 text-center">
                <h1 class="text-4xl font-bold text-white">Project not found</h1>
                <Link href="/projects" class="mt-6 inline-flex text-indigo-300 hover:text-indigo-200">Back to projects
                </Link>
            </section>

            <Footer />
        </div>
    </main>
</template>
