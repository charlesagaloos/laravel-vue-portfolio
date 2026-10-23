<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import ProjectCard from "@/Components/Portfolio/ProjectCard.vue";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const selectedProject = ref<Project | null>(null);

const openProjectDetails = (project: Project) => {
    selectedProject.value = project;
};

const closeProjectDetails = () => {
    selectedProject.value = null;
};

watch(selectedProject, (project) => {
    document.body.style.overflow = project ? "hidden" : "";
});

const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
        closeProjectDetails();
    }
};

onMounted(() => {
    window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = "";
});
</script>

<template>
    <section id="projects" class="reveal px-6 py-16 md:py-20">
        <div class="mx-auto max-w-6xl">
            <!-- Section heading -->
            <div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <p class="reveal-item text-sm uppercase tracking-[0.3em] text-slate-500">
                        Selected Client Work
                    </p>

                    <h2 class="reveal-item mt-3 text-3xl font-bold md:text-4xl">
                        Systems built around real business needs.
                    </h2>
                </div>

                <p class="reveal-item max-w-md leading-7 text-slate-400">
                    Explore examples of how I turn business challenges, manual workflows, and new ideas into useful systems and products.
                </p>
            </div>

            <!-- Projects -->
            <div class="grid gap-6 md:grid-cols-2">
                <ProjectCard v-for="(project, index) in projects.filter((project) => project.title !== 'LIRA' && project.showOnHome !== false)" :key="project.title" :project="project" :index="index" :show-preview="false"
                    @view-details="openProjectDetails(project)" />
            </div>
        </div>

        <!-- Project Details Modal -->
        <Teleport to="body">
        <div v-if="selectedProject" class="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden overscroll-none px-6 py-8" role="dialog" aria-modal="true" aria-label="Project details">
            <!-- Backdrop -->
            <div class="project-modal-backdrop absolute inset-0 backdrop-blur-md" @click.self="closeProjectDetails"></div>

            <!-- Modal -->
            <div
                class="project-modal-panel relative z-10 max-h-[calc(100vh-4rem)] w-full max-w-3xl overscroll-contain overflow-y-auto rounded-3xl border border-slate-800 bg-slate-950 p-7 shadow-2xl shadow-black/40 md:p-10">
                <!-- Top line -->
                <div
                    class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent">
                </div>

                <!-- Close button -->
                <button type="button" aria-label="Close project details"
                    class="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:text-white"
                    @click="closeProjectDetails">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6 6 18" />
                    </svg>
                </button>

                <!-- Modal header -->
                <div class="pr-10">
                    <p class="font-mono text-xs uppercase tracking-[0.2em] text-blue-400/80">
                        {{ selectedProject.type }}
                    </p>

                    <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        {{ selectedProject.title }}
                    </h2>

                    <p class="mt-4 max-w-2xl leading-7 text-slate-400">
                        {{ selectedProject.description }}
                    </p>
                </div>

                <!-- Divider -->
                <div class="my-8 h-px bg-slate-800"></div>

                <!-- Case Study -->
                <div class="space-y-8">
                    <!-- Problem -->
                    <section v-if="selectedProject.problem">
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs text-blue-400">
                                01
                            </span>

                            <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
                                The Challenge
                            </h3>
                        </div>

                        <p class="mt-3 max-w-2xl leading-7 text-slate-400">
                            {{ selectedProject.problem }}
                        </p>
                    </section>

                    <!-- Solution -->
                    <section v-if="selectedProject.solution">
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs text-blue-400">
                                02
                            </span>

                            <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
                                How I Helped
                            </h3>
                        </div>

                        <p class="mt-3 max-w-2xl leading-7 text-slate-400">
                            {{ selectedProject.solution }}
                        </p>
                    </section>

                    <!-- Impact -->
                    <section v-if="selectedProject.impact">
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs text-blue-400">
                                03
                            </span>

                            <h3 class="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
                                The Result
                            </h3>
                        </div>

                        <p class="mt-3 max-w-2xl leading-7 text-slate-400">
                            {{ selectedProject.impact }}
                        </p>
                    </section>
                </div>

                <!-- Modal footer -->
                <div class="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-800 pt-6">
                    <span class="mr-2 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
                        Stack
                    </span>

                    <span v-for="technology in selectedProject.technologies" :key="technology"
                        class="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 font-mono text-xs text-slate-400">
                        {{ technology }}
                    </span>
                </div>
            </div>
        </div>
        </Teleport>
    </section>
</template>
