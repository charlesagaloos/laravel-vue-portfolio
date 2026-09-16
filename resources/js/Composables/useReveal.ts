import { onMounted, onUnmounted, ref } from "vue";

export function useReveal() {
    const observer = ref<IntersectionObserver | null>(null);

    onMounted(() => {
        observer.value = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.value?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            },
        );

        document
            .querySelectorAll(".reveal, .reveal-item")
            .forEach((element) => {
                observer.value?.observe(element);
            });
    });

    onUnmounted(() => {
        observer.value?.disconnect();
    });

    return {
        observer,
    };
}
