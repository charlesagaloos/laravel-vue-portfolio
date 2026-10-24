<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ContributionsResponse = { total: Record<string, number>; contributions: Contribution[] };
type RatingSummary = {
    average: number;
    total: number;
    recent: Array<{ rating: number; feedback: string | null; created_at: string }>;
};
type FeedbackPosition = { bottom: string; left: string; rotationClass: string };

const shuffle = <T,>(items: T[]) => {
    const result = [...items];

    for (let index = result.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }

    return result;
};

const props = defineProps<{ ratingSummary: RatingSummary }>();
const displayedFeedback = ref<RatingSummary["recent"]>([]);
const feedbackPositions = ref<FeedbackPosition[]>([]);
let feedbackTimer: number | undefined;
let githubController: AbortController | undefined;
const positionPool: FeedbackPosition[] = [
    { bottom: "4%", left: "0%", rotationClass: "rotate-[-2deg]" },
    { bottom: "4%", left: "44%", rotationClass: "rotate-[2deg]" },
    { bottom: "18%", left: "18%", rotationClass: "rotate-[-3deg]" },
];

const shuffleFeedback = () => {
    const feedback = shuffle(props.ratingSummary.recent)
        .filter((entry) => entry.feedback?.trim())
        .slice(0, 3);

    if (feedback.length > 1 && feedback[0].created_at === displayedFeedback.value[0]?.created_at) {
        feedback.push(feedback.shift()!);
    }

    displayedFeedback.value = feedback;
    feedbackPositions.value = shuffle(positionPool).slice(0, feedback.length);
};

watch(() => props.ratingSummary.recent, shuffleFeedback, { deep: true, immediate: true });

onMounted(() => {
    feedbackTimer = window.setInterval(shuffleFeedback, 5000);
});

onBeforeUnmount(() => {
    window.clearInterval(feedbackTimer);
    githubController?.abort();
});

const formatContributionDate = (date: string) => new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric", timeZone: "UTC",
}).format(new Date(`${date}T00:00:00Z`));

const githubActivity = ref<Contribution[]>(Array.from({ length: 91 }, () => ({ date: "", count: 0, level: 0 })));
const githubTotal = ref<number | null>(null);
const githubLoading = ref(true);

onMounted(async () => {
    githubController = new AbortController();

    try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/charlesagaloos?y=last", {
            signal: githubController.signal,
        });
        if (!response.ok) throw new Error("Unable to load GitHub contributions");
        const data = (await response.json()) as ContributionsResponse;
        githubActivity.value = data.contributions.slice(-91);
        githubTotal.value = data.total.lastYear ?? null;
    } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;

        // Keep the empty grid visible when the public API is unavailable.
    } finally {
        githubLoading.value = false;
    }
});
</script>

<template>
    <div class="hero-visual relative mx-auto min-h-[480px] w-full max-w-[560px]">
        <div class="absolute inset-8 rounded-[2.5rem] bg-indigo-500/[0.06] blur-3xl"></div>

        <a href="https://github.com/charlesagaloos" target="_blank" rel="noopener noreferrer"
            class="hero-avatar-card group absolute left-[10%] top-[8%] z-10 h-[320px] w-[62%] rotate-[-5deg] overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-100 shadow-2xl shadow-black/30 transition-transform duration-500 hover:rotate-[-2deg]">
            <div class="theme-avatar-visual theme-avatar-surface absolute inset-0 transition-colors duration-500">
                <div class="flex h-full items-center justify-center">
                    <Icon icon="lucide:user-round"
                        class="h-28 w-28 text-slate-700 transition-colors group-hover:text-indigo-400/50" />
                </div>
                <img src="/charles.png" alt="Charles Agaloos"
                    class="theme-avatar-image absolute inset-0 z-0 h-full w-full scale-[1.16] bg-transparent object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.2]"
                    loading="lazy" />
                <div
                    class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/90 to-transparent px-5 pb-5 pt-14">
                </div>
            </div>
        </a>

        <div
            class="availability-card absolute right-0 top-0 z-30 w-[48%] rounded-3xl border border-slate-200/10 bg-slate-100 p-4 text-slate-900 shadow-xl shadow-black/20 transition-all duration-500">
            <div class="flex items-center gap-2 text-xs font-medium text-slate-600"><span
                    class="h-2 w-2 rounded-full bg-emerald-500"></span>Available for new projects</div>
            <div class="mt-4 flex items-end justify-between border-t border-slate-300/70 pt-3"><span
                    class="text-xs text-slate-500">Work with me</span>
                <Icon icon="lucide:arrow-up-right" class="h-4 w-4 text-slate-700" />
            </div>
        </div>

        <a href="https://github.com/charlesagaloos" target="_blank" rel="noopener noreferrer"
            class="hero-github-card absolute bottom-[5%] right-[1%] z-20 h-[58%] w-[42%] max-w-[240px] rounded-[1.75rem] border border-slate-700/80 bg-slate-900/95 p-4 shadow-2xl shadow-black/30 backdrop-blur transition-transform duration-500 hover:translate-y-[-4px]">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2"><span
                        class="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/15">
                        <Icon icon="lucide:github" class="h-4 w-4 text-indigo-300" />
                    </span>
                    <div>
                        <p class="text-xs font-semibold text-white">Open source</p>
                        <p class="text-[10px] text-slate-500">Activity over time</p>
                    </div>
                </div>
                <Icon icon="lucide:arrow-up-right" class="h-4 w-4 text-slate-500" />
            </div>
            <div class="mt-4 flex items-end justify-between rounded-xl border border-white/5 bg-black/10 px-3 py-2.5">
                <div><strong class="block text-xl font-semibold leading-none text-white">{{ githubLoading ? '—' :
                        githubTotal ?? '—' }}</strong><span class="mt-1 block text-[10px] text-slate-500">contributions
                        this year</span></div><span
                    class="github-active-badge rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-emerald-300">Active</span>
            </div>
            <div class="mt-3 rounded-xl border border-white/5 bg-black/10 p-2"
                aria-label="Recent GitHub activity">
                <div class="grid aspect-[13/7] w-full grid-flow-col grid-rows-7 grid-cols-[repeat(13,minmax(0,1fr))] gap-1">
                    <span v-for="(activity, index) in githubActivity" :key="`desktop-${index}`"
                        :title="activity.date ? `${activity.count} contributions on ${formatContributionDate(activity.date)}` : 'No contributions'"
                        class="h-full w-full rounded-full"
                        :class="{ 'bg-slate-800': activity.level === 0, 'bg-indigo-950': activity.level === 1, 'bg-indigo-800': activity.level === 2, 'bg-indigo-500': activity.level === 3, 'bg-indigo-300': activity.level === 4 }"></span>
                </div>
            </div>
        </a>

        <div class="pointer-events-none absolute inset-0 z-40">
            <template v-if="displayedFeedback.length">
                <TransitionGroup name="feedback" tag="div" class="contents">
                    <div v-for="(entry, index) in displayedFeedback" :key="entry.created_at"
                        class="feedback-card hero-feedback-card pointer-events-auto absolute w-fit min-w-[8rem] max-w-[11rem] overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 px-3.5 py-3 shadow-2xl shadow-black/30 backdrop-blur transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105"
                        :class="feedbackPositions[index]?.rotationClass"
                        :style="{ bottom: feedbackPositions[index]?.bottom, left: feedbackPositions[index]?.left }">
                        <div
                            class="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-500 to-transparent">
                        </div>
                        <div class="flex items-start justify-between gap-3">
                            <Icon icon="lucide:quote" class="h-3.5 w-3.5 shrink-0 text-slate-500" />
                        </div>
                        <div class="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2"
                            :aria-label="`${entry.rating} star${entry.rating === 1 ? '' : 's'}`">
                            <div class="flex items-center gap-0.5">
                                <Icon v-for="star in entry.rating" :key="star" icon="material-symbols:star"
                                    class="h-3 w-3 text-amber-400" />
                            </div>
                        </div>
                        <p class="mt-1 line-clamp-2 text-[11px] leading-4 text-slate-300">“{{ entry.feedback }}”</p>
                    </div>
                </TransitionGroup>
            </template>
            <div v-else
                class="hero-feedback-card absolute bottom-[4%] left-0 w-[48%] rounded-2xl border border-slate-800 bg-slate-950/95 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur">
                <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-1" aria-label="Average portfolio rating">
                        <Icon v-for="star in Math.round(ratingSummary.average)" :key="star" icon="material-symbols:star"
                            class="h-3 w-3 text-amber-400" />
                    </div>
                    <span class="text-[10px] text-slate-500">{{ ratingSummary.total ?
                        `${ratingSummary.average.toFixed(1)} / 5` :
                        'No ratings yet' }}</span>
                </div>
                <p class="mt-1.5 text-xs leading-4 text-slate-500">Share your thoughts on the work.</p>
            </div>
        </div>
        <div
            class="hero-focus-card absolute left-[3%] top-[52%] z-40 rounded-2xl border border-slate-800 bg-slate-950/95 px-4 py-3 shadow-xl shadow-black/20">
            <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500">Focus</p>
            <p class="mt-1 text-xs font-medium text-white">Reliable business systems</p>
        </div>
    </div>
</template>

<style scoped>
.feedback-card {
    animation: feedbackFloat 5s ease-in-out infinite;
}

.feedback-card:nth-child(2) {
    animation-delay: -1.6s;
}

.feedback-card:nth-child(3) {
    animation-delay: -3.1s;
}

.feedback-enter-active,
.feedback-leave-active {
    transition: opacity 300ms ease, transform 300ms ease;
}

.feedback-move {
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
}

.feedback-enter-from,
.feedback-leave-to {
    opacity: 0;
    transform: translateY(12px) rotate(5deg) scale(0.94);
}

.feedback-leave-active {
    position: absolute;
}

@keyframes feedbackFloat {

    0%,
    100% {
        margin-top: 0;
    }

    50% {
        margin-top: -5px;
    }
}

.hero-github-card,
.hero-feedback-card,
.hero-focus-card {
    color: #f8fafc;
}

.hero-feedback-card {
    background: linear-gradient(145deg, #0f172a, #020617) !important;
    background-image: linear-gradient(145deg, #0f172a, #020617) !important;
}

:global(html.theme-light) .hero-github-card {
    background: linear-gradient(145deg, #ffffff, #eef4ff) !important;
    border-color: #bfdbfe !important;
    box-shadow: 0 22px 50px rgb(30 64 175 / 0.16) !important;
    color: #0f172a;
}

:global(html.theme-light) .hero-github-card .text-white,
:global(html.theme-light) .hero-github-card .text-slate-300 {
    color: #172554 !important;
}

:global(html.theme-light) .hero-github-card .text-slate-500,
:global(html.theme-light) .hero-github-card .text-slate-600 {
    color: #52637d !important;
}

:global(html.theme-light) .hero-github-card .border-white\/5,
:global(html.theme-light) .hero-github-card .border-white\/10 {
    border-color: #dbeafe !important;
}

:global(html.theme-light) .hero-github-card .bg-black\/10 {
    background-color: rgb(219 234 254 / 0.55) !important;
}

:global(html.theme-light) .hero-visual .hero-feedback-card,
:global(html.theme-light) .hero-visual .hero-focus-card {
    background: linear-gradient(145deg, #ffffff, #f1f5ff) !important;
    background-image: linear-gradient(145deg, #ffffff, #f1f5ff) !important;
    border-color: #cbd5e1 !important;
    box-shadow: 0 16px 32px rgb(30 64 175 / 0.14) !important;
    color: #0f172a;
}

:global(html.theme-light) .hero-visual .hero-feedback-card .text-slate-200,
:global(html.theme-light) .hero-visual .hero-feedback-card .text-slate-300,
:global(html.theme-light) .hero-visual .hero-focus-card .text-white {
    color: #172554 !important;
}

:global(html.theme-light) .hero-visual .hero-feedback-card .text-slate-500,
:global(html.theme-light) .hero-visual .hero-feedback-card .text-slate-600,
:global(html.theme-light) .hero-visual .hero-focus-card .text-slate-500 {
    color: #52637d !important;
}

:global(html.theme-light) .hero-visual .hero-feedback-card .border-white\/10 {
    border-color: #dbe4f0 !important;
}

:global(html.theme-light) .hero-avatar-card {
    border-color: #bfdbfe !important;
    box-shadow: 0 24px 55px rgb(30 64 175 / 0.16) !important;
}

@media (max-width: 640px) {
    .hero-visual {
        min-height: 560px !important;
        max-width: 100%;
    }

    .availability-card,
    .hero-focus-card {
        display: none !important;
    }

    .hero-avatar-card {
        left: 0;
        top: 12%;
        height: auto;
        aspect-ratio: 0.68;
        width: 44%;
    }

    .hero-github-card {
        right: 0;
        top: 24%;
        bottom: auto !important;
        height: auto !important;
        aspect-ratio: 1.08;
        width: 55%;
        padding: 0.75rem;
    }

    .hero-feedback-card {
        min-width: 6.5rem;
        max-width: min(11rem, 42vw);
        padding: 0.625rem;
    }

}

@media (min-width: 641px) and (max-width: 1024px) {
    .hero-visual {
        min-height: 460px !important;
        max-width: 560px;
    }

    .hero-feedback-card {
        max-width: min(11rem, 24vw);
    }
}

@media (max-width: 400px) {
    .hero-visual {
        min-height: 520px !important;
    }

    .hero-avatar-card {
        height: auto;
        width: 43%;
    }

    .hero-github-card {
        height: auto !important;
        width: 56%;
    }

    .hero-feedback-card {
        max-width: 8.5rem;
    }

    .github-active-badge {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .feedback-card {
        animation: none;
    }

    .feedback-enter-active,
    .feedback-leave-active {
        transition: none;
    }
}
</style>
