<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import HeroSection from "@/Components/Portfolio/HeroSection.vue";
import ProjectsSection from "@/Components/Portfolio/ProjectsSection.vue";
import ContactSection from "@/Components/Portfolio/ContactSection.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import ClientReachSection from "@/Components/Portfolio/ClientReachSection.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
import { useReveal } from "@/Composables/useReveal";

useReveal();
</script>

<template>

    <Head title="Charles Agaloos" />

    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />

        <div class="relative z-10">
            <Navbar />

            <HeroSection />

            <ClientReachSection />

            <ProjectsSection />

            <ContactSection />
            <Footer />
        </div>
    </main>
</template>
