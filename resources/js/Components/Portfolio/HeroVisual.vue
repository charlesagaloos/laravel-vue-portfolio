<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ContributionsResponse = { total: Record<string, number>; contributions: Contribution[] };

const formatContributionDate = (date: string) => new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric", timeZone: "UTC",
}).format(new Date(`${date}T00:00:00Z`));

const githubActivity = ref<Contribution[]>(Array.from({ length: 91 }, () => ({ date: "", count: 0, level: 0 })));
const githubTotal = ref<number | null>(null);
const githubLoading = ref(true);

onMounted(async () => {
    try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/charlesagaloos?y=last");
        if (!response.ok) throw new Error("Unable to load GitHub contributions");
        const data = (await response.json()) as ContributionsResponse;
        githubActivity.value = data.contributions.slice(-91);
        githubTotal.value = data.total.lastYear ?? null;
    } catch {
        // Keep the empty grid visible when the public API is unavailable.
    } finally {
        githubLoading.value = false;
    }
});
</script>

<template>
    <div class="relative mx-auto min-h-[480px] w-full max-w-[560px]">
        <div class="absolute inset-8 rounded-[2.5rem] bg-indigo-500/[0.06] blur-3xl"></div>

        <a href="https://github.com/charlesagaloos" target="_blank" rel="noopener noreferrer" class="group absolute left-[10%] top-[8%] z-10 h-[320px] w-[62%] rotate-[-5deg] overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-100 shadow-2xl shadow-black/30 transition-transform duration-500 hover:rotate-[-2deg]">
            <div class="theme-avatar-visual theme-avatar-surface absolute inset-0 transition-colors duration-500">
                <div class="flex h-full items-center justify-center"><Icon icon="lucide:user-round" class="h-28 w-28 text-slate-700 transition-colors group-hover:text-indigo-400/50" /></div>
                <img src="/charles.png" alt="Charles Agaloos" class="theme-avatar-image absolute inset-0 z-0 h-full w-full scale-[1.16] bg-transparent object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.2]" loading="lazy" />
                <div class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/90 to-transparent px-5 pb-5 pt-14">
                    <p class="text-sm font-semibold text-white">Charles Agaloos</p>
                    <p class="mt-1 text-xs text-slate-400">Full-Stack Engineer</p>
                </div>
            </div>
        </a>

        <div class="availability-card absolute right-0 top-0 z-30 w-[48%] rounded-3xl border border-slate-200/10 bg-slate-100 p-4 text-slate-900 shadow-xl shadow-black/20 transition-all duration-500">
            <div class="flex items-center gap-2 text-xs font-medium text-slate-600"><span class="h-2 w-2 rounded-full bg-emerald-500"></span>Available for new projects</div>
            <div class="mt-4 flex items-end justify-between border-t border-slate-300/70 pt-3"><span class="text-xs text-slate-500">Work with me</span><Icon icon="lucide:arrow-up-right" class="h-4 w-4 text-slate-700" /></div>
        </div>

        <a href="https://github.com/charlesagaloos" target="_blank" rel="noopener noreferrer" class="absolute bottom-[2%] right-[2%] z-20 aspect-square w-[48%] max-w-[250px] rounded-[2rem] border border-slate-700/80 bg-slate-900/95 p-4 shadow-2xl shadow-black/30 backdrop-blur transition-transform duration-500 hover:translate-y-[-4px]">
            <div class="flex items-center justify-between"><div class="flex items-center gap-2"><Icon icon="lucide:github" class="h-5 w-5 text-slate-300" /><span class="text-sm font-medium text-white">GitHub activity</span></div><Icon icon="lucide:arrow-up-right" class="h-4 w-4 text-slate-500" /></div>
            <div class="mt-4 overflow-hidden" aria-label="Recent GitHub activity">
                <div class="grid w-full grid-flow-col grid-rows-7 grid-cols-[repeat(13,minmax(0,1fr))] gap-1.5">
                    <span v-for="(activity, index) in githubActivity" :key="index" :title="activity.date ? `${activity.count} contributions on ${formatContributionDate(activity.date)}` : 'No contributions'" class="aspect-square rounded-full" :class="{ 'bg-slate-800': activity.level === 0, 'bg-indigo-950': activity.level === 1, 'bg-indigo-800': activity.level === 2, 'bg-indigo-500': activity.level === 3, 'bg-indigo-300': activity.level === 4 }"></span>
                </div>
            </div>
            <div class="mt-4 flex items-center justify-between text-[11px] text-slate-500"><span v-if="githubLoading">Loading GitHub activity...</span><span v-else-if="githubTotal !== null">{{ githubTotal }} contributions in the past year</span><span v-else>GitHub activity</span><span>View profile</span></div>
        </a>

        <div class="absolute bottom-[4%] left-0 z-40 rounded-2xl border border-slate-800 bg-slate-950/95 px-4 py-3 shadow-xl shadow-black/20"><div class="flex items-center gap-2"><Icon icon="lucide:check" class="h-4 w-4 text-emerald-400" /><span class="text-xs font-medium text-slate-300">Built around your workflow</span></div></div>
        <div class="absolute left-[3%] top-[58%] z-40 rounded-2xl border border-slate-800 bg-slate-950/95 px-4 py-3 shadow-xl shadow-black/20"><p class="text-[10px] uppercase tracking-[0.18em] text-slate-500">Focus</p><p class="mt-1 text-xs font-medium text-white">Reliable business systems</p></div>
    </div>
</template>
