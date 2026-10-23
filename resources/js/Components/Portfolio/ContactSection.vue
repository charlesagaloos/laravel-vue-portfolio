<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <section id="contact" class="reveal relative overflow-hidden px-6 py-16 sm:py-20">
        <div class="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 px-7 py-10 shadow-2xl shadow-black/10 sm:px-10 sm:py-12 lg:px-11">
            <div class="contact-ring pointer-events-none absolute -right-20 -top-32 h-[440px] w-[440px] rounded-full border sm:-right-8"></div>
            <div class="contact-ring pointer-events-none absolute -right-8 -top-24 h-[360px] w-[360px] rounded-full border"></div>
            <div class="contact-ring pointer-events-none absolute right-8 -top-16 h-[280px] w-[280px] rounded-full border"></div>

            <div class="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p class="reveal-item text-xs font-medium uppercase tracking-[0.3em] text-slate-500">Have something in mind?</p>
                    <h2 class="reveal-item mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                        Let’s turn your idea<br class="hidden sm:block" /> into a <span class="text-slate-400">working system.</span>
                    </h2>
                </div>

                <div class="reveal-item flex shrink-0 flex-col items-start gap-4 lg:items-end">
                    <Link href="/contact" class="theme-primary-cta group inline-flex items-center gap-7 rounded-xl bg-white px-6 py-4 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200">
                        Let’s talk
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </Link>
                    <p class="text-sm text-slate-500">Tell me what you’re building.</p>
                </div>
            </div>
        </div>
    </section>
</template>

