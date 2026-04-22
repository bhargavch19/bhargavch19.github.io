import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'

interface Props {
  children: ReactNode
  ariaLabel: string
}

export function Carousel({ children, ariaLabel }: Props) {
  const scroller = useRef<HTMLDivElement>(null)
  const slides = Children.toArray(children).filter(isValidElement) as ReactElement[]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const root = scroller.current
    if (!root) return
    const targets = Array.from(root.children) as HTMLElement[]
    if (targets.length === 0) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length === 0) return
        const idx = targets.indexOf(visible[0].target as HTMLElement)
        if (idx !== -1) setActive(idx)
      },
      { root, threshold: [0.5, 0.75, 1] },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [slides.length])

  const scrollToIndex = (i: number) => {
    const root = scroller.current
    if (!root) return
    const child = root.children[i] as HTMLElement | undefined
    if (!child) return
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    root.scrollTo({
      left: child.offsetLeft - root.offsetLeft,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  const onPrev = () => scrollToIndex(Math.max(0, active - 1))
  const onNext = () => scrollToIndex(Math.min(slides.length - 1, active + 1))

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      onNext()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      onPrev()
    } else if (e.key === 'Home') {
      e.preventDefault()
      scrollToIndex(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      scrollToIndex(slides.length - 1)
    }
  }

  return (
    <div role="region" aria-label={ariaLabel} aria-roledescription="carousel">
      <div
        ref={scroller}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${ariaLabel} — use left and right arrow keys to navigate`}
        className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollBehavior: 'smooth',
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.key ?? i}
            className="shrink-0 snap-center"
            style={{
              width: 'min(860px, 85vw)',
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
            }}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {cloneElement(slide)}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className="rounded-[2px] transition-all duration-300"
              style={{
                width: i === active ? 48 : 24,
                height: 2,
                background: i === active ? 'var(--color-accent)' : 'var(--color-border)',
                transitionTimingFunction: 'var(--ease-out-soft)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <ArrowButton direction="prev" onClick={onPrev} disabled={active === 0} />
          <ArrowButton direction="next" onClick={onNext} disabled={active === slides.length - 1} />
        </div>
      </div>
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
      className="mono grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] text-zinc-400 transition-all hover:border-[var(--color-accent)] hover:text-accent disabled:opacity-30 disabled:hover:border-[var(--color-border)] disabled:hover:text-zinc-400"
      style={{ fontSize: 14, background: 'var(--color-card)' }}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  )
}
