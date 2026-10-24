<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

type SetupItem = {
    name: string;
    value: string;
    image?: string;
};

type SetupGroup = {
    icon: string;
    title: string;
    items: SetupItem[];
};

const setupGroups: SetupGroup[] = [
    {
        icon: "lucide:monitor",
        title: "Desk setup",
        items: [
            { name: "Main monitor", value: "Lenovo Legion R34w-30 34”", image: "/images/projects/setup/main%20monitor.png" },
            { name: "Second monitor", value: "ASUS VG279Q 27”", image: "/images/projects/setup/second%20monitor.png" },
            { name: "Keyboard", value: "SolaKaka A99 Pro", image: "/images/projects/setup/keyboard.png" },
            { name: "Mouse", value: "Logitech G304", image: "/images/projects/setup/mouse.png" },
        ],
    },
    {
        icon: "lucide:cpu",
        title: "Main workstation",
        items: [
            { name: "Operating system", value: "Windows 11 Pro 64-bit" },
            { name: "Processor", value: "AMD Ryzen 5 2600X · 6 cores / 12 threads · 3.6GHz" },
            { name: "Memory", value: "16GB RAM" },
            { name: "Graphics", value: "NVIDIA GeForce RTX 2060" },
        ],
    },
    {
        icon: "lucide:laptop",
        title: "Backup machine",
        items: [{ name: "Laptop", value: "ASUS ROG Strix G15 G513QE-HN060T", image: "/images/projects/setup/laptop.png" }],
    },
];

const selectedImage = ref<SetupItem | null>(null);

const openImage = (item: SetupItem) => {
    if (!item.image) return;
    selectedImage.value = item;
    document.body.style.overflow = "hidden";
};

const closeImage = () => {
    selectedImage.value = null;
    document.body.style.overflow = "";
};

const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape" && selectedImage.value) closeImage();
};

onMounted(() => document.addEventListener("keydown", handleEscape));
onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleEscape);
    document.body.style.overflow = "";
});
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
                        <div v-for="item in group.items" :key="item.name">
                            <dt class="text-xs uppercase tracking-[0.15em] text-slate-500">{{ item.name }}</dt>
                            <div class="mt-1 flex items-start justify-between gap-3">
                                <dd class="text-sm leading-6 text-slate-300">{{ item.value }}</dd>
                                <button v-if="item.image" type="button"
                                    class="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300"
                                    :aria-label="`View ${item.name} image`" @click="openImage(item)">
                                    View
                                    <Icon icon="lucide:eye" class="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    </dl>
                </article>
            </div>
        </div>
    </section>

    <Teleport to="body">
        <div v-if="selectedImage" class="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/85 p-6 backdrop-blur-md"
            role="dialog" aria-modal="true" :aria-label="`${selectedImage.name} preview`" @click.self="closeImage">
            <div class="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl shadow-black/40">
                <button type="button" class="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-950/80 text-slate-300 transition-colors hover:text-white"
                    aria-label="Close image preview" @click="closeImage">
                    <Icon icon="lucide:x" class="h-4 w-4" />
                </button>
                <img :src="selectedImage.image" :alt="`${selectedImage.name} setup image`" class="max-h-[84vh] max-w-full rounded-2xl object-contain" />
            </div>
        </div>
    </Teleport>
</template>
