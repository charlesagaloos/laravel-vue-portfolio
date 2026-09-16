<script setup lang="ts">
const email = "charlesagaloos1204@gmail.com";
</script>

<template>
    <section id="contact" class="reveal relative overflow-hidden px-6 py-32 sm:py-40">
        <!-- Ambient background -->
        <div
            class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.05] blur-[120px]">
        </div>

        <div class="relative mx-auto max-w-6xl">
            <div class="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <!-- Main CTA -->
                <div>
                    <p class="reveal-item text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                        Get In Touch
                    </p>

                    <h2
                        class="reveal-item mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                        Let's build something
                        <span class="text-slate-500">meaningful.</span>
                    </h2>

                    <p class="reveal-item mt-8 max-w-xl text-lg leading-8 text-slate-400">
                        I'm open to full-time opportunities, freelance
                        projects, and collaborations involving full-stack web
                        development.
                    </p>

                    <!-- Email -->
                    <a :href="`mailto:${email}`"
                        class="reveal-item group mt-10 inline-flex items-center gap-3 text-lg font-medium text-white">
                        <span
                            class="border-b border-slate-600 pb-1 transition-colors duration-300 group-hover:border-white">
                            {{ email }}
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </a>

                    <!-- Resume -->
                    <div class="reveal-item mt-8">
                        <a href="/Charles_Agaloos_FullStack_Engineer_Resume.pdf" target="_blank"
                            rel="noopener noreferrer"
                            class="group inline-flex items-center gap-3 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-slate-500 hover:bg-white/[0.03] hover:text-white">
                            <span>Download Resume</span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                            </svg>
                        </a>
                    </div>

                    <!-- Availability -->
                    <p class="reveal-item mt-8 text-sm text-slate-600">
                        Based in the Philippines · Available for remote
                        opportunities
                    </p>
                </div>

                <!-- Contact Links -->
                <div class="reveal-item lg:pb-2">
                    <div class="border-t border-slate-800">
                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/charlesagaloos/" target="_blank" rel="noopener noreferrer"
                            class="group flex items-center justify-between border-b border-slate-800 py-5">
                            <div>
                                <p
                                    class="text-sm font-medium text-white transition-colors duration-300 group-hover:text-slate-300">
                                    LinkedIn
                                </p>

                                <p class="mt-1 text-sm text-slate-600">
                                    Professional profile
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                            </svg>
                        </a>

                        <!-- GitHub -->
                        <a href="https://github.com/charlesagaloos" target="_blank" rel="noopener noreferrer"
                            class="group flex items-center justify-between border-b border-slate-800 py-5">
                            <div>
                                <p
                                    class="text-sm font-medium text-white transition-colors duration-300 group-hover:text-slate-300">
                                    GitHub
                                </p>

                                <p class="mt-1 text-sm text-slate-600">
                                    Code & projects
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                            </svg>
                        </a>

                        <!-- JobStreet -->
                        <a href="https://ph.jobstreet.com/profiles/charlesbenjaminiii-agaloos-1b7tcMtC6B"
                            target="_blank" rel="noopener noreferrer"
                            class="group flex items-center justify-between border-b border-slate-800 py-5">
                            <div>
                                <p
                                    class="text-sm font-medium text-white transition-colors duration-300 group-hover:text-slate-300">
                                    JobStreet
                                </p>

                                <p class="mt-1 text-sm text-slate-600">
                                    Job profile
                                </p>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17 17 7M7 7h10v10" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom line -->
            <div
                class="reveal-item mt-24 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <p>Available for new opportunities.</p>

                <p>© 2026 Charles Agaloos</p>
            </div>
        </div>
    </section>
</template>
