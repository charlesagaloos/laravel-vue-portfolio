<script setup lang="ts">
import ProjectCard from "@/Components/Portfolio/ProjectCard.vue";
import { projects } from "@/data/projects";
</script>

<template>
    <section id="projects" class="reveal px-6 py-24">
        <div class="mx-auto max-w-6xl">
            <!-- Section heading -->
            <div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <p class="reveal-item text-sm uppercase tracking-[0.3em] text-slate-500">
                        Selected Work
                    </p>

                    <h2 class="reveal-item mt-3 text-3xl font-bold md:text-4xl">
                        Projects I've worked on.
                    </h2>
                </div>

                <p class="reveal-item max-w-md leading-7 text-slate-400">
                    A selection of web applications, business systems, and
                    production websites built and maintained throughout my
                    career.
                </p>
            </div>

            <!-- Projects -->
            <div class="grid gap-6 md:grid-cols-2">
                <ProjectCard v-for="(project, index) in projects" :key="project.title" :project="project"
                    :index="index" />
            </div>
        </div>
    </section>
</template>
