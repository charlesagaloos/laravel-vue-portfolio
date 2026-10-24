<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Head } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import HeroSection from "@/Components/Portfolio/HeroSection.vue";
import ProjectsSection from "@/Components/Portfolio/ProjectsSection.vue";
import ContactSection from "@/Components/Portfolio/ContactSection.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import ClientReachSection from "@/Components/Portfolio/ClientReachSection.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
import RatingWidget from "@/Components/Portfolio/RatingWidget.vue";
import { useReveal } from "@/Composables/useReveal";

useReveal();

type RatingSummary = {
    average: number;
    total: number;
    distribution: Record<string, number>;
    recent: Array<{ rating: number; feedback: string | null; created_at: string }>;
};

const ratingSummary = ref<RatingSummary>({ average: 0, total: 0, distribution: {}, recent: [] });

const loadRatings = async () => {
    try {
        const response = await fetch("/ratings", { headers: { Accept: "application/json" } });
        if (response.ok) ratingSummary.value = await response.json();
    } catch {
        // Keep the hero quiet if ratings are temporarily unavailable.
    }
};

onMounted(loadRatings);
</script>

<template>

    <Head title="Charles Agaloos" />

    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />

        <div class="relative z-10 pt-20">
            <Navbar />

            <HeroSection :rating-summary="ratingSummary" />

            <ClientReachSection />

            <ProjectsSection />

            <ContactSection />
            <Footer />
        </div>

        <RatingWidget :summary="ratingSummary" @rated="ratingSummary = $event" />
    </main>
</template>
