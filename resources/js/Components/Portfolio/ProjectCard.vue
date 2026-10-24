<script setup lang="ts">
import type { Project } from "@/data/projects";
import { Link } from "@inertiajs/vue3";

const props = defineProps<{
    project: Project;
    index: number;
    detailUrl?: string;
    compact?: boolean;
    showPreview?: boolean;
}>();

const emit = defineEmits<{
    viewDetails: [];
}>();
</script>

<template>
    <article
        class="reveal-item group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-slate-700 hover:bg-slate-900/70">
        <!-- Subtle top-right background glow -->
        <div
            class="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-400/[0.05]">
        </div>

        <!-- Hover highlight -->
        <div
            class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        </div>

        <div class="relative z-10 flex flex-1 flex-col">
            <!-- Project header -->
            <div class="flex items-center justify-between">
                <span v-if="!props.compact"
                    class="font-mono text-sm text-slate-600 transition-colors duration-300 group-hover:text-blue-400/70">
                    {{ String(index + 1).padStart(2, "0") }}
                </span>

                <div class="flex items-center gap-3">
                    <span v-if="project.badge && !props.compact"
                        class="project-badge rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-blue-300">
                        {{ project.badge }}
                    </span>
                    <span v-if="project.status && !props.compact"
                        class="font-mono text-xs uppercase tracking-[0.15em] text-slate-600">
                        {{ project.status }}
                    </span>
                </div>
            </div>

            <!-- Project preview -->
            <Link v-if="props.showPreview !== false && project.preview && props.detailUrl" :href="props.detailUrl"
                class="mt-6 block aspect-[16/10] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 focus:outline-none focus:ring-2 focus:ring-blue-400/60">
                <img :src="project.preview" :alt="`${project.title} project preview`"
                    class="block h-full w-full object-contain" />
            </Link>
            <div v-else-if="props.showPreview !== false && project.preview"
                class="mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80">
                <img :src="project.preview" :alt="`${project.title} project preview`"
                    class="block h-full w-full object-contain" />
            </div>

            <!-- Project information -->
            <div class="mt-8">
                <div v-if="!props.compact"
                    class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.15em]">
                    <span class="text-blue-400/80">
                        {{ project.type }}
                    </span>
                </div>

                <div class="mt-3 flex items-start justify-between gap-4">
                    <h3
                        class="text-2xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1">
                        {{ project.title }}
                    </h3>

                    <p v-if="props.compact" class="shrink-0 pt-1 text-sm text-slate-400">
                        {{ project.year }}
                    </p>
                </div>

                <p v-if="!props.compact" class="mt-5 leading-7 text-slate-400">
                    {{ project.description }}
                </p>
            </div>

            <!-- Project metadata -->
            <div class="mt-auto pt-8">
                <!-- Role -->
                <p v-if="project.role && !props.compact"
                    class="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
                    {{ project.role }}
                </p>

                <!-- Technologies -->
                <div v-if="!props.compact" class="flex flex-wrap gap-2">
                    <span v-for="technology in project.technologies" :key="technology"
                        class="rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1 font-mono text-xs text-slate-400 transition-all duration-300 group-hover:border-slate-700 group-hover:text-slate-300">
                        {{ technology }}
                    </span>
                </div>

                <!-- Links -->
                <div class="mt-6 flex flex-wrap items-center gap-5">
                    <!-- Single project URL -->
                    <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 hover:text-blue-400"
                        :class="{ 'order-2': props.compact }">
                        Visit Project

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor"
                            class="h-4 w-4 transition-all duration-300 group-hover/details:-translate-y-1 group-hover/details:translate-x-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>

                    <!-- Multiple project links -->
                    <template v-if="project.links && !props.compact">
                        <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors duration-300 hover:text-blue-400">
                            {{ link.label }}

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                            </svg>
                        </a>
                    </template>

                    <!-- View Details -->
                    <Link v-if="props.detailUrl" :href="props.detailUrl"
                        class="group/details inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
                        :class="{ 'order-1': props.compact }">
                        View Project

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4 transition-transform duration-300 group-hover/details:translate-x-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                        </svg>
                    </Link>

                    <button v-else-if="project.problem || project.solution || project.impact" type="button"
                        class="group/details inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
                        @click="emit('viewDetails')">
                        See the Business Challenge

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4 transition-transform duration-300 group-hover/details:scale-110">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </article>
</template>
