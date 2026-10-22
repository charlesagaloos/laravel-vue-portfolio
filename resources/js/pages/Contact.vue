<script setup lang="ts">
import { Head } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import ContactSection from "@/Components/Portfolio/ContactSection.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
</script>

<template>
    <Head title="Contact" />
    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects /><div class="relative z-10 pt-20"><Navbar /><ContactSection /><Footer /></div>
    </main>
</template>
