import { createInertiaApp, router } from '@inertiajs/vue3';

let transitionOverlay: HTMLDivElement | null = null;
let transitionTimer: number | undefined;
let historyPosition: number | null = null;
let navigationDirection = 'forward';

const logoDots = (() => {
    const dots: string[] = [];
    const step = 3.2;
    const centerY = 24;
    const startX = 7;
    const endX = 41;

    let index = 0;

    for (let x = startX; x <= endX; x += step) {
        const distanceFromLeft = x - startX;
        const distanceFromRight = endX - x;
        const width = Math.min(distanceFromLeft, distanceFromRight);

        for (let y = centerY - width; y <= centerY + width; y += step) {
            const progress = distanceFromLeft / (endX - startX);
            const radius = Math.max(0.55, 1.8 - progress * 1.35);
            const offsetX = Math.round(Math.sin(index * 2.7) * 18);
            const offsetY = Math.round(Math.cos(index * 1.9) * 18);
            const delay = (index % 10) * 35;
            dots.push(`<circle class="page-transition-dot" cx="${x}" cy="${y}" r="${radius}" style="--dot-x:${offsetX}px;--dot-y:${offsetY}px;--dot-delay:${delay}ms" />`);
            index += 1;
        }
    }

    return dots.join('');
})();

const getHistoryPosition = () => {
    const position = window.history.state?.position;
    return typeof position === 'number' ? position : null;
};

const ensureTransitionOverlay = () => {
    if (transitionOverlay) return transitionOverlay;

    transitionOverlay = document.createElement('div');
    transitionOverlay.className = 'page-transition-overlay';
    transitionOverlay.setAttribute('aria-hidden', 'true');
    transitionOverlay.innerHTML = `
        <div class="page-transition-wash"></div>
        <div class="page-transition-content">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="page-transition-logo">
                <rect x="1.5" y="1.5" width="45" height="45" rx="10" class="page-transition-logo-box fill-slate-950/40 stroke-slate-800" stroke-width="1.2" />
                <g class="page-transition-logo-dots fill-blue-400">${logoDots}</g>
            </svg>
        </div>`;
    document.body.appendChild(transitionOverlay);
    return transitionOverlay;
};

const showPageTransition = (direction = 'forward') => {
    const overlay = ensureTransitionOverlay();
    window.clearTimeout(transitionTimer);
    overlay.classList.remove('is-active', 'is-back', 'is-forward');
    void overlay.offsetWidth;
    overlay.classList.add('is-active', direction === 'back' ? 'is-back' : 'is-forward');
};

const hidePageTransition = () => {
    if (!transitionOverlay) return;
    transitionOverlay.classList.remove('is-active');
    transitionTimer = window.setTimeout(() => {
        transitionOverlay?.classList.remove('is-back', 'is-forward');
    }, 500);
};

window.addEventListener('popstate', () => {
    const nextPosition = getHistoryPosition();
    navigationDirection = nextPosition !== null && historyPosition !== null && nextPosition < historyPosition
        ? 'back'
        : 'forward';
});

router.on('start', () => showPageTransition(navigationDirection));
router.on('finish', () => {
    historyPosition = getHistoryPosition();
    navigationDirection = 'forward';
    window.setTimeout(hidePageTransition, 1100);
});

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});

historyPosition = getHistoryPosition();
