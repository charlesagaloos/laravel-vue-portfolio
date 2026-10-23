<script setup lang="ts">
import { reactive } from "vue";
import { Head } from "@inertiajs/vue3";
import Navbar from "@/Components/Portfolio/Navbar.vue";
import BackgroundEffects from "@/Components/Portfolio/BackgroundEffects.vue";
import Footer from "@/Components/Portfolio/Footer.vue";
import { useReveal } from "@/Composables/useReveal";

useReveal();

const email = "charlesagaloos1204@gmail.com";
const form = reactive({ reason: "Project", name: "", email: "", message: "" });

const prepareEmail = () => {
    const subject = `${form.reason} inquiry from ${form.name || "a portfolio visitor"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
};

const copyEmail = async () => {
    await navigator.clipboard?.writeText(email);
};
</script>

<template>
    <Head title="Contact" />
    <main class="relative isolate min-h-screen bg-slate-950 text-white">
        <BackgroundEffects />
        <div class="relative z-10 pt-20">
            <Navbar />

            <section class="reveal px-6 py-20 sm:py-24">
                <div class="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
                    <div>
                        <p class="reveal-item text-xs font-medium uppercase tracking-[0.3em] text-slate-500">Get in touch</p>
                        <h1 class="reveal-item mt-5 max-w-xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                            Let’s make<br /> something <span class="text-slate-400">good.</span>
                        </h1>
                        <p class="reveal-item mt-7 max-w-md text-base leading-7 text-slate-400">A project, an opportunity, or just a hello. Tell me what you have in mind and let’s start a conversation.</p>

                        <div class="reveal-item mt-12 border-t border-slate-800 pt-6">
                            <p class="text-xs uppercase tracking-[0.25em] text-slate-500">Prefer email?</p>
                            <a :href="`mailto:${email}`" class="group mt-4 flex items-center gap-2 text-lg text-white">
                                {{ email }}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                                </svg>
                            </a>
                            <button type="button" class="mt-4 flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white" @click="copyEmail">
                                Copy email address
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125v-9.75c0-.621.504-1.125 1.125-1.125H8.25m3.75-6h6.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H11.25a1.125 1.125 0 0 1-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125Z" />
                                </svg>
                            </button>
                        </div>

                        <div class="reveal-item mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
                            <p>Marikina City, Philippines</p>
                        </div>
                    </div>

                    <form class="reveal-item rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-black/10 sm:p-8" @submit.prevent="prepareEmail">
                        <div class="flex items-start gap-4 border-b border-slate-800 pb-6">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/60 text-slate-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75" />
                                </svg>
                            </div>
                            <div><h2 class="text-xl font-semibold text-white">Write an email.</h2><p class="mt-1 text-sm text-slate-500">Write here, then send from your email app.</p></div>
                        </div>

                        <fieldset class="mt-7">
                            <legend class="text-sm font-medium text-slate-300">I’m reaching out about</legend>
                            <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                                <label v-for="option in ['Project', 'Job', 'Team up', 'Hello']" :key="option" class="cursor-pointer rounded-xl border border-slate-800 px-3 py-3 text-center text-xs text-slate-400 transition hover:border-slate-600 has-[:checked]:border-white has-[:checked]:text-white">
                                    <input v-model="form.reason" type="radio" name="reason" :value="option" class="sr-only" />{{ option }}
                                </label>
                            </div>
                        </fieldset>

                        <div class="mt-6 grid gap-4 sm:grid-cols-2">
                            <label class="text-sm text-slate-300">Your name *<input v-model="form.name" required type="text" placeholder="Your full name" class="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-slate-500" /></label>
                            <label class="text-sm text-slate-300">Email address *<input v-model="form.email" required type="email" placeholder="you@example.com" class="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-slate-500" /></label>
                        </div>

                        <label class="mt-6 block text-sm text-slate-300">Your message *<textarea v-model="form.message" required rows="6" placeholder="What are you building, and where could I help?" class="mt-2 w-full resize-none rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-slate-500"></textarea></label>

                        <div class="mt-6 flex flex-col gap-5 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">
                            <p class="text-xs text-slate-500">Review and send in your email app.</p>
                            <button type="submit" class="theme-primary-cta group inline-flex items-center justify-center gap-4 rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200">Open email draft
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" /></svg>
                            </button>
                        </div>
                        <p class="mt-5 text-center text-xs text-slate-600">Your email is only used to reply.</p>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    </main>
</template>
