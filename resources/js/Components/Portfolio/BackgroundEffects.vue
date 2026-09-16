<script setup lang="ts">
import { computed } from "vue";
import { useParallax } from "@/Composables/useParallax";

const { scrollY } = useParallax();

const primaryScrollStyle = computed(() => ({
    transform: `translate3d(0, ${scrollY.value * 0.12}px, 0)`,
}));

const secondaryScrollStyle = computed(() => ({
    transform: `translate3d(0, ${scrollY.value * -0.08}px, 0)`,
}));

const tertiaryScrollStyle = computed(() => ({
    transform: `translate3d(0, ${scrollY.value * 0.05}px, 0)`,
}));
</script>

<template>
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <!-- Primary -->
        <div class="orb-wrapper" :style="primaryScrollStyle">
            <div class="background-orb background-orb-primary"></div>
        </div>

        <!-- Secondary -->
        <div class="orb-wrapper" :style="secondaryScrollStyle">
            <div class="background-orb background-orb-secondary"></div>
        </div>

        <!-- Tertiary -->
        <div class="orb-wrapper" :style="tertiaryScrollStyle">
            <div class="background-orb background-orb-tertiary"></div>
        </div>

        <!-- Subtle technical grid -->
        <div class="background-grid"></div>
    </div>
</template>

<style scoped>
.orb-wrapper {
    position: absolute;
    inset: 0;
    will-change: transform;
}

.background-orb {
    position: absolute;
    border-radius: 9999px;
    filter: blur(100px);
    opacity: 0.12;
    will-change: transform;
}

.background-orb-primary {
    width: 420px;
    height: 420px;
    top: 8%;
    left: 10%;
    background: rgb(99 102 241);
    animation: floatPrimary 12s ease-in-out infinite;
}

.background-orb-secondary {
    width: 360px;
    height: 360px;
    top: 42%;
    right: 8%;
    background: rgb(59 130 246);
    animation: floatSecondary 15s ease-in-out infinite;
}

.background-orb-tertiary {
    width: 300px;
    height: 300px;
    bottom: 8%;
    left: 35%;
    background: rgb(129 140 248);
    animation: floatTertiary 18s ease-in-out infinite;
}

/*
|--------------------------------------------------------------------------
| Technical Grid
|--------------------------------------------------------------------------
*/

.background-grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgb(148 163 184 / 0.025) 1px,
            transparent 1px),
        linear-gradient(90deg,
            rgb(148 163 184 / 0.025) 1px,
            transparent 1px);

    background-size: 80px 80px;

    mask-image: radial-gradient(ellipse at center,
            black 0%,
            transparent 75%);
}

/*
|--------------------------------------------------------------------------
| Floating Animation
|--------------------------------------------------------------------------
*/

@keyframes floatPrimary {

    0%,
    100% {
        transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
        transform: translate3d(40px, 30px, 0) scale(1.08);
    }
}

@keyframes floatSecondary {

    0%,
    100% {
        transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
        transform: translate3d(-35px, 45px, 0) scale(1.1);
    }
}

@keyframes floatTertiary {

    0%,
    100% {
        transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
        transform: translate3d(30px, -35px, 0) scale(1.06);
    }
}

/*
|--------------------------------------------------------------------------
| Reduced Motion
|--------------------------------------------------------------------------
*/

@media (prefers-reduced-motion: reduce) {
    .orb-wrapper {
        transform: none !important;
    }

    .background-orb {
        animation: none;
    }

    .background-grid {
        display: none;
    }
}
</style>
