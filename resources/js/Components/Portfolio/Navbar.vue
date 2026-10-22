<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Link } from "@inertiajs/vue3";
import { onMounted, onUnmounted, ref } from "vue";
import { useTheme } from "@/Composables/useTheme";

const isOpen = ref(false);
const { isLightTheme, initializeTheme, toggleTheme } = useTheme();
const themeToggleButton = ref<HTMLButtonElement | null>(null);

const closeMenu = () => {
    isOpen.value = false;
};

const handleThemeShortcut = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key.toLowerCase() === "d") {
        event.preventDefault();
        startThemeTransition();
    }
};

const startThemeTransition = (event?: MouseEvent) => {
    const source = (event?.currentTarget as HTMLElement | null) ?? themeToggleButton.value;
    const bounds = source?.getBoundingClientRect();
    const hasVisibleSource = Boolean(bounds && bounds.width > 0 && bounds.height > 0);
    const root = document.documentElement;

    root.style.setProperty("--theme-wave-x", `${hasVisibleSource ? bounds!.left + bounds!.width / 2 : window.innerWidth / 2}px`);
    root.style.setProperty("--theme-wave-y", `${hasVisibleSource ? bounds!.top + bounds!.height / 2 : window.innerHeight / 2}px`);

    const transitionDocument = document as Document & {
        startViewTransition?: (callback: () => void) => unknown;
    };

    if (transitionDocument.startViewTransition) {
        transitionDocument.startViewTransition(() => {
            toggleTheme();
        });

        return;
    }

    root.dataset.themeTransitionTo = isLightTheme.value ? "dark" : "light";
    root.classList.add("theme-transitioning");

    const finishThemeTransition = (animationEvent?: AnimationEvent) => {
        if (!root.classList.contains("theme-transitioning")) {
            return;
        }

        if (animationEvent && animationEvent.animationName !== "theme-wave-reveal") {
            return;
        }

        toggleTheme();
        root.classList.remove("theme-transitioning");
        delete root.dataset.themeTransitionTo;
        root.removeEventListener("animationend", finishThemeTransition);
    };

    root.addEventListener("animationend", finishThemeTransition);

    // Fallback for browsers that do not dispatch animationend for pseudo-elements.
    window.setTimeout(() => finishThemeTransition(), 750);
};

onMounted(() => {
    initializeTheme();
    window.addEventListener("keydown", handleThemeShortcut);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleThemeShortcut);
});


const dots: Array<{ x: number; y: number; radius: number }> = [];

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
                <Link href="/" class="group flex items-center gap-3" @click="closeMenu">
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
                </Link>


                <!-- Desktop Navigation -->
                <div class="hidden items-center gap-5 text-sm text-slate-400 md:flex">
                    <Link href="/about" class="transition-colors duration-300 hover:text-white">
                        About
                    </Link>

                    <Link href="/experience" class="transition-colors duration-300 hover:text-white">
                        Experience
                    </Link>

                    <Link href="/projects" class="transition-colors duration-300 hover:text-white">
                        Projects
                    </Link>

                    <Link href="/contact" class="transition-colors duration-300 hover:text-white">
                        Contact
                    </Link>

                    <button type="button"
                        ref="themeToggleButton"
                        class="ml-2 flex h-9 items-center gap-2 rounded-lg border border-slate-800 px-3 text-slate-400 transition-all duration-300 hover:border-slate-600 hover:bg-white/[0.03] hover:text-white"
                        :aria-label="isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'"
                        aria-keyshortcuts="Control+D" title="Toggle theme (Ctrl+D)" @click="startThemeTransition">
                        <Icon :icon="isLightTheme ? 'lucide:moon' : 'lucide:sun'" class="h-4 w-4" />
                    </button>
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
                            <Link href="/about"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                About
                            </Link>

                            <Link href="/experience"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                Experience
                            </Link>

                            <Link href="/projects"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                Projects
                            </Link>

                            <Link href="/contact"
                                class="rounded-lg px-3 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                @click="closeMenu">
                                Contact
                            </Link>

                            <button type="button"
                                class="mt-2 flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.03] hover:text-white"
                                :aria-label="isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'"
                                aria-keyshortcuts="Control+D" @click="startThemeTransition">
                                <Icon :icon="isLightTheme ? 'lucide:moon' : 'lucide:sun'" class="h-4 w-4" />
                                {{ isLightTheme ? "Dark theme" : "Light theme" }}
                                <span class="ml-auto text-xs text-slate-600">Ctrl+D</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
