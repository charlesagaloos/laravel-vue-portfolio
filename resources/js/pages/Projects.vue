<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
import ProjectCard from "@/Components/Portfolio/ProjectCard.vue";
import { projects } from "@/data/projects";
import { useReveal } from "@/Composables/useReveal";

useReveal();

const orderedProjects = [...projects]
    .filter((project) => project.showOnProjectsPage)
    .sort((first, second) => Number(second.title === "LIRA") - Number(first.title === "LIRA"));
</script>

<template>
    <Head title="Projects" />

    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />

        <div class="relative z-10 pt-20">
            <Navbar />

            <section class="reveal px-6 py-20">
                <div class="mx-auto max-w-6xl">
                    <div class="mb-12 max-w-3xl">
                        <p class="reveal-item text-sm uppercase tracking-[0.3em] text-slate-500">Selected Projects</p>
                        <h1 class="reveal-item mt-3 text-4xl font-bold md:text-5xl">Personal products and client systems.</h1>
                        <p class="reveal-item mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                            Explore LIRA, my artist portfolio platform, alongside selected systems built around real client needs.
                        </p>
                    </div>

                    <div class="grid gap-6 md:grid-cols-2">
                        <ProjectCard v-for="(project, index) in orderedProjects" :key="project.slug" :project="project" :index="index" :detail-url="`/projects/${project.slug}`" :show-preview="true" compact />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    </main>
</template>
