<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Link } from "@inertiajs/vue3";
import BrandLogo from "@/Components/Portfolio/BrandLogo.vue";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
    <footer class="relative z-10 border-t border-slate-800/80 px-6 py-10">
        <div class="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Link href="/" class="group inline-flex items-center gap-3">
                <BrandLogo class="transition-transform duration-300 group-hover:scale-105" />
                <span>
                    <span class="block text-sm font-semibold tracking-[0.18em] text-white">CHARLES AGALOOS</span>
                    <span class="mt-1 block text-xs text-slate-500">Full-Stack Engineer</span>
                </span>
            </Link>

            <nav aria-label="Footer navigation" class="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
                <a href="https://github.com/charlesagaloos" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-white">GitHub</a>
                <a href="https://www.linkedin.com/in/charlesagaloos/" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-white">LinkedIn</a>
                <a href="https://ph.jobstreet.com/profiles/charlesbenjaminiii-agaloos-1b7tcMtC6B" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-white">JobStreet</a>
                <Link href="/resume" class="transition-colors hover:text-white">Resume</Link>
                <button type="button" @click="scrollToTop" class="group inline-flex items-center gap-2 transition-colors hover:text-white">
                    Back to top
                    <Icon icon="lucide:arrow-up" class="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </button>
            </nav>
        </div>

        <div class="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-slate-800/80 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Charles Agaloos™. All rights reserved.</p>
            <p class="inline-flex items-center gap-2"><Icon icon="lucide:map-pin" class="h-3.5 w-3.5" />Marikina City, Philippines</p>
        </div>
    </footer>
</template>
