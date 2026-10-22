import { ref } from "vue";

const isLightTheme = ref(false);
let hasInitialized = false;

const applyTheme = (light: boolean) => {
    if (typeof document === "undefined") {
        return;
    }

    document.documentElement.classList.toggle("theme-light", light);
    document.documentElement.style.colorScheme = light ? "light" : "dark";
}

const initializeTheme = () => {
    if (hasInitialized || typeof window === "undefined") {
        return;
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    isLightTheme.value = savedTheme === "light";
    applyTheme(isLightTheme.value);
    hasInitialized = true;
};

const toggleTheme = () => {
    isLightTheme.value = !isLightTheme.value;
    applyTheme(isLightTheme.value);
    window.localStorage.setItem(
        "portfolio-theme",
        isLightTheme.value ? "light" : "dark"
    );
};

export const useTheme = () => ({
    isLightTheme,
    initializeTheme,
    toggleTheme,
});
