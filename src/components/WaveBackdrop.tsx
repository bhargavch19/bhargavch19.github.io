/**
 * A subtle, CPU-cheap animated backdrop for the hero.
 * Two flowing SVG wave lines panning at different speeds give a parallax feel.
 * Respects prefers-reduced-motion via CSS (the animation duration collapses to ~0).
 */
export function WaveBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
    >
      <defs>
        <linearGradient id="wave-grad-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-accent-2)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wave-grad-b" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="var(--color-accent-2)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-accent-2)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="wave-layer wave-layer-slow">
        <path
          d="M-200 540 C 120 480 320 620 640 540 C 960 460 1160 600 1520 520 L 1520 820 L -200 820 Z"
          fill="url(#wave-grad-a)"
        />
      </g>
      <g className="wave-layer wave-layer-fast">
        <path
          d="M-200 620 C 200 560 420 680 720 600 C 1020 520 1220 660 1640 580 L 1640 820 L -200 820 Z"
          fill="url(#wave-grad-b)"
        />
      </g>
    </svg>
  )
}
