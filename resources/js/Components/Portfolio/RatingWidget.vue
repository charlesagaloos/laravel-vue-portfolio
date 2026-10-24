<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";

type RatingSummary = {
    average: number;
    total: number;
    distribution: Record<string, number>;
    recent: Array<{ rating: number; feedback: string | null; created_at: string }>;
};

const props = defineProps<{ summary: RatingSummary }>();
const emit = defineEmits<{ rated: [summary: RatingSummary] }>();

const isOpen = ref(false);
const selectedRating = ref(0);
const feedback = ref("");
const isSubmitting = ref(false);
const submitted = ref(false);
const errorMessage = ref("");
let popupTimer: number | undefined;

const openWidget = () => {
    isOpen.value = true;
    submitted.value = false;
    errorMessage.value = "";
};

const closeWidget = () => {
    isOpen.value = false;
};

const submitRating = async () => {
    if (!selectedRating.value || isSubmitting.value) return;

    isSubmitting.value = true;
    errorMessage.value = "";

    try {
        const response = await fetch("/ratings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-CSRF-TOKEN": document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? "",
            },
            body: JSON.stringify({ rating: selectedRating.value, feedback: feedback.value.trim() || null }),
        });

        if (!response.ok) throw new Error("Unable to submit rating.");

        const payload = await response.json();
        emit("rated", payload.summary);
        submitted.value = true;
        feedback.value = "";
        sessionStorage.setItem("portfolio-rating-submitted", "1");
    } catch {
        errorMessage.value = "Something went wrong. Please try again.";
    } finally {
        isSubmitting.value = false;
    }
};

onMounted(() => {
    if (sessionStorage.getItem("portfolio-rating-submitted")) return;
    popupTimer = window.setTimeout(openWidget, 2500 + Math.random() * 4500);
});

onBeforeUnmount(() => window.clearTimeout(popupTimer));
</script>

<template>
    <button v-if="!isOpen && !submitted" type="button"
        class="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-950/90 px-4 py-2 text-xs text-slate-300 shadow-2xl shadow-black/20 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-slate-500 hover:text-white sm:inline-flex"
        @click="openWidget">
        <Icon icon="material-symbols:star" class="h-3.5 w-3.5 text-amber-400" />
        Rate my work
    </button>

    <div v-if="isOpen" class="fixed bottom-5 right-5 z-50 w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border border-slate-700 bg-slate-950/95 p-5 text-white shadow-2xl shadow-black/30 backdrop-blur-xl">
        <button type="button" aria-label="Close rating form" class="absolute right-4 top-4 text-slate-500 transition hover:text-white" @click="closeWidget">
            <Icon icon="lucide:x" class="h-4 w-4" />
        </button>

        <template v-if="!submitted">
            <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Quick feedback</p>
            <h2 class="mt-2 pr-6 text-lg font-semibold">How would you rate my work?</h2>
            <p class="mt-1 text-xs leading-5 text-slate-400">Your feedback helps me improve the experience.</p>

            <div class="mt-5 flex items-center gap-1" role="radiogroup" aria-label="Rating">
                <button v-for="star in 5" :key="star" type="button" :aria-label="`${star} star${star > 1 ? 's' : ''}`"
                    class="rounded p-1 transition hover:scale-110" @click="selectedRating = star">
                    <Icon icon="material-symbols:star" class="h-5 w-5" :class="star <= selectedRating ? 'text-amber-400' : 'text-slate-600'" />
                </button>
                <span class="ml-2 text-xs text-slate-500">{{ selectedRating ? `${selectedRating}/5` : "Choose a rating" }}</span>
            </div>

            <textarea v-model="feedback" rows="3" maxlength="500" placeholder="What stood out, or what could be better? (optional)"
                class="mt-4 w-full resize-none rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-xs leading-5 text-white outline-none placeholder:text-slate-600 focus:border-slate-600"></textarea>

            <p v-if="errorMessage" class="mt-2 text-xs text-rose-400">{{ errorMessage }}</p>
            <button type="button" :disabled="!selectedRating || isSubmitting"
                class="theme-primary-cta mt-4 flex w-full items-center justify-between rounded-xl bg-white px-4 py-2.5 text-xs font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                @click="submitRating">
                {{ isSubmitting ? "Sending..." : "Send rating" }}
                <Icon icon="lucide:arrow-right" class="h-4 w-4" />
            </button>
            <p class="mt-3 text-[11px] text-slate-600">Anonymous. One rating per visitor.</p>
        </template>

        <template v-else>
            <Icon icon="lucide:check" class="h-6 w-6 text-emerald-400" />
            <h2 class="mt-3 text-lg font-semibold">Thanks for the feedback.</h2>
            <p class="mt-1 text-xs leading-5 text-slate-400">Your rating has been added to the portfolio.</p>
            <button type="button" class="mt-4 text-xs text-blue-400 hover:text-blue-300" @click="closeWidget">Close</button>
        </template>
    </div>
</template>
