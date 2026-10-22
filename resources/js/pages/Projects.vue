<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import ProjectsSection from "@/Components/Portfolio/ProjectsSection.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
</script>

<template>
    <Head title="Projects" />
    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects /><div class="relative z-10 pt-20"><Navbar /><ProjectsSection :show-personal-projects="true" /><Footer /></div>
    </main>
</template>
