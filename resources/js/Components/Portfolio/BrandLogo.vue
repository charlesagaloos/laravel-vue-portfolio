<script setup lang="ts">
const dots: Array<{ x: number; y: number; radius: number }> = [];
const step = 3.2;
const centerY = 24;
const startX = 7;
const endX = 41;

for (let x = startX; x <= endX; x += step) {
    const distanceFromLeft = x - startX;
    const distanceFromRight = endX - x;
    const width = Math.min(distanceFromLeft, distanceFromRight);

    for (let y = centerY - width; y <= centerY + width; y += step) {
        const progress = distanceFromLeft / (endX - startX);
        dots.push({ x, y, radius: Math.max(0.55, 1.8 - progress * 1.35) });
    }
}
</script>

<template>
    <svg viewBox="0 0 48 48" class="h-10 w-10 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Charles Agaloos logo">
        <rect x="1.5" y="1.5" width="45" height="45" rx="10" class="fill-slate-950/40 stroke-slate-800" stroke-width="1.2" />
        <circle v-for="(dot, index) in dots" :key="index" :cx="dot.x" :cy="dot.y" :r="dot.radius" class="fill-blue-400" />
    </svg>
</template>
