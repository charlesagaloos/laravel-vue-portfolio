<script setup lang="ts">
import { Icon } from "@iconify/vue";

const setupGroups = [
    {
        icon: "lucide:monitor",
        title: "Desk setup",
        items: [
            ["Main monitor", "Lenovo Legion R34w-30 34” WQHD curved, 180Hz"],
            ["Second monitor", "ASUS VG279Q 27”"],
            ["Keyboard", "SolaKaka A99 Pro"],
            ["Mouse", "Logitech G304"],
        ],
    },
    {
        icon: "lucide:cpu",
        title: "Main workstation",
        items: [
            ["Operating system", "Windows 11 Pro 64-bit"],
            ["Processor", "AMD Ryzen 5 2600X · 6 cores / 12 threads · 3.6GHz"],
            ["Memory", "16GB RAM"],
            ["Graphics", "NVIDIA GeForce RTX 2060"],
        ],
    },
    {
        icon: "lucide:laptop",
        title: "Backup machine",
        items: [["Laptop", "ASUS ROG Strix G15 G513QE-HN060T"]],
    },
];
</script>

<template>
    <section class="px-6 pb-24 pt-8">
        <div class="mx-auto max-w-6xl">
            <div class="max-w-2xl">
                <p class="text-sm uppercase tracking-[0.3em] text-slate-500">My setup</p>
                <h2 class="mt-3 text-3xl font-bold md:text-4xl">The tools behind the work.</h2>
                <p class="mt-5 leading-7 text-slate-400">
                    A reliable setup helps me stay focused on building dependable systems,
                    testing ideas quickly, and keeping projects moving.
                </p>
            </div>

            <div class="mt-10 grid gap-5 lg:grid-cols-3">
                <article v-for="group in setupGroups" :key="group.title"
                    class="rounded-3xl border border-slate-800/80 bg-slate-900/50 p-6 shadow-xl shadow-black/10">
                    <div class="flex items-center gap-3">
                        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300">
                            <Icon :icon="group.icon" class="h-5 w-5" />
                        </span>
                        <h3 class="font-semibold text-white">{{ group.title }}</h3>
                    </div>

                    <dl class="mt-6 space-y-4">
                        <div v-for="item in group.items" :key="item[0]">
                            <dt class="text-xs uppercase tracking-[0.15em] text-slate-500">{{ item[0] }}</dt>
                            <dd class="mt-1 text-sm leading-6 text-slate-300">{{ item[1] }}</dd>
                        </div>
                    </dl>
                </article>
            </div>
        </div>
    </section>
</template>
