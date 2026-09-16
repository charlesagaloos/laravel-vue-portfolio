<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const closeMenu = () => {
    isOpen.value = false;
};


const dots = [];

const step = 3.2;
const centerY = 24;
const startX = 7;
const endX = 41;

for (let x = startX; x <= endX; x += step) {
    const distanceFromLeft = x - startX;
    const distanceFromRight = endX - x;

    const width = Math.min(distanceFromLeft, distanceFromRight);

    for (
        let y = centerY - width;
        y <= centerY + width;
        y += step
    ) {
        const progress = distanceFromLeft / (endX - startX);

        const radius = Math.max(
            0.55,
            1.8 - progress * 1.35
        );

        dots.push({
            x,
            y,
            radius,
        });
    }
}
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50 px-6 pt-4">
        <nav class="mx-auto max-w-6xl rounded-2xl border border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
            <!-- Navbar top -->
            <div class="flex items-center justify-between px-5 py-3">
                <!-- Logo -->
                <a href="#" class="group flex items-center gap-3" @click="closeMenu">
                    <!-- Dot Diamond Logo -->
                    <svg viewBox="0 0 48 48"
                        class="h-9 w-9 overflow-visible transition-transform duration-500 group-hover:scale-105"
                        fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Charles Agaloos">
                        <!-- Logo Box -->
                        <rect x="1.5" y="1.5" width="45" height="45" rx="10" class="fill-slate-950/40 stroke-slate-800"
                            stroke-width="1.2" />

                        <!-- Diamond Dot Field -->
                        <g>
                            <circle v-for="(dot, index) in dots" :key="index" :cx="dot.x" :cy="dot.y" :r="dot.radius"
                                class="fill-blue-400 transition-all duration-500" :class="{
                                    'group-hover:fill-blue-300': true
                                }" />
                        </g>
                    </svg>

                    <!-- Name -->
                    <span class="hidden text-sm font-semibold tracking-[0.18em] text-white sm:block">
                        CHARLES AGALOOS
                    </span>
                </a>


                <!-- Desktop Navigation -->
                <div class="hidden items-center gap-5 text-sm text-slate-400 md:flex">
                    <a href="#about" class="transition-colors duration-300 hover:text-white">
                        About
                    </a>

                    <a href="#skills" class="transition-colors duration-300 hover:text-white">
                        Skills
                    </a>

                    <a href="#projects" class="transition-colors duration-300 hover:text-white">
                        Projects
                    </a>

                    <a href="#contact" class="transition-colors duration-300 hover:text-white">
                        Contact
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button type="button"
                    class="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-all duration-300 hover:border-slate-700 hover:text-white md:hidden"
                    :aria-expanded="isOpen" aria-label="Toggle navigation menu" @click="isOpen = !isOpen">
                    <!-- Hamburger -->
                    <span class="absolute h-px w-4 bg-current transition-all duration-300"
                        :class="isOpen ? 'rotate-45' : '-translate-y-1.5'"></span>

                    <span class="absolute h-px w-4 bg-current transition-all duration-300"
                        :class="isOpen ? 'opacity-0' : 'opacity-100'"></span>

                    <span class="absolute h-px w-4 bg-current transition-all duration-300"
                        :class="isOpen ? '-rotate-45' : 'translate-y-1.5'"></span>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div class="grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden" :class="isOpen
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
                ">
                <div class="overflow-hidden">
                    <div class="border-t border-slate-800/80 px-5 pb-5 pt-3">
                        <div class="flex flex-col">
                            <a href="#about"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                About
                            </a>

                            <a href="#skills"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                Skills
                            </a>

                            <a href="#projects"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                Projects
                            </a>

                            <a href="#contact"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
