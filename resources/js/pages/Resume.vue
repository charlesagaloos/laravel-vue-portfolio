<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { Icon } from "@iconify/vue";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import Footer from "@/Components/Portfolio/Footer.vue";

const resumeUrl = "/Charles_Agaloos_FullStack_Engineer_Resume.pdf";

const printResume = () => {
    const printWindow = window.open(resumeUrl, "_blank", "noopener,noreferrer");

    if (printWindow) {
        printWindow.addEventListener("load", () => printWindow.print(), { once: true });
    }
};
</script>

<template>
    <Head title="Resume" />

    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />

        <div class="relative z-10 pt-20">
            <Navbar />

            <section class="px-6 py-16 sm:py-24">
                <div class="mx-auto max-w-5xl">
                    <div class="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between print:hidden">
                        <Link href="/about" class="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                            <Icon icon="lucide:arrow-left" class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to About
                        </Link>

                        <div class="flex flex-wrap gap-3">
                            <button type="button" @click="printResume" class="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-white transition hover:border-slate-500 hover:bg-white/[0.04]">
                                <Icon icon="lucide:printer" class="h-4 w-4" />
                                Print
                            </button>
                            <a :href="resumeUrl" download class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
                                <Icon icon="lucide:download" class="h-4 w-4" />
                                Download PDF
                            </a>
                        </div>
                    </div>

                    <div class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-black/30">
                        <iframe :src="`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`" title="Charles Agaloos resume" class="resume-pdf-frame block w-full border-0" style="height: 1180px; min-height: 1180px;"></iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </main>
</template>

<style>
@media print {
    body {
        background: white !important;
    }

    iframe {
        height: 100vh !important;
    }
}
</style>
