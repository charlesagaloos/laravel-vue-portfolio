import { onMounted, onUnmounted, ref } from "vue";

export function useParallax() {
    const scrollY = ref(0);

    const handleScroll = () => {
        scrollY.value = window.scrollY;
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

    return {
        scrollY,
    };
}
