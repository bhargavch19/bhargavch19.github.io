import { useEffect, useRef, useState } from 'react'

interface Word {
  prefix: string
  accent: string
  caption: string
}

const WORDS: Word[] = [
  {
    prefix: 'Translate',
    accent: ' designs.',
    caption: 'Figma pixels → production pixels. Never "close enough."',
  },
  {
    prefix: 'Own',
    accent: ' state.',
    caption: 'NgRx, Zustand, TanStack Query. State shaped around the user, not the API.',
  },
  {
    prefix: 'Ship',
    accent: ' accessible.',
    caption:
      'WCAG 2.1 AA and ADA-compliant by default. axe DevTools, screen-reader passes, keyboard-first.',
  },
  {
    prefix: 'Prove',
    accent: ' it works.',
    caption: 'Cypress, Jest, SonarQube. Zero production incidents, 100% on-time delivery.',
  },
  {
    prefix: 'Deploy',
    accent: ' it.',
    caption: 'Docker, Kubernetes, Jenkins, AWS. The build that goes out tonight.',
  },
]

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const total = section.offsetHeight - window.innerHeight
        if (total <= 0) return
        const p = Math.max(0, Math.min(1, -rect.top / total))
        const next = Math.min(WORDS.length - 1, Math.floor(p * WORDS.length))
        setIdx((cur) => (cur === next ? cur : next))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const current = WORDS[idx]

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      aria-labelledby="philosophy-heading"
      className="relative bg-[var(--color-bg)]"
      style={{ minHeight: '300vh' }}
    >
      <h2 id="philosophy-heading" className="sr-only">
        How I work — five principles
      </h2>

      {/* Full list for screen readers (always in DOM). The visual below is
          scroll-driven and marked aria-hidden so SR users aren't confused by
          duplicated content. */}
      <ol className="sr-only">
        {WORDS.map((w, i) => (
          <li key={i}>
            {i + 1}. {w.prefix}
            {w.accent} — {w.caption}
          </li>
        ))}
      </ol>

      <div
        aria-hidden="true"
        className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      >
        <p
          className="mono uppercase text-accent"
          style={{ fontSize: 11, letterSpacing: '0.3em', marginBottom: 32 }}
        >
          How I work
        </p>

        <div className="relative flex min-h-[220px] flex-col items-center justify-center">
          <div
            key={idx}
            className="font-semibold text-zinc-100"
            style={{
              fontSize: 'clamp(60px, 11vw, 160px)',
              fontWeight: 600,
              letterSpacing: '-0.035em',
              lineHeight: 1,
              animation: 'wordIn 700ms var(--ease-out-soft)',
            }}
          >
            {current.prefix}
            <span className="accent-gradient">{current.accent}</span>
          </div>
        </div>

        <p
          key={`cap-${idx}`}
          className="text-zinc-400"
          style={{
            marginTop: 32,
            maxWidth: 560,
            fontSize: 18,
            lineHeight: 1.5,
            minHeight: 54,
          }}
        >
          {current.caption}
        </p>

        <div
          className="absolute left-1/2 flex -translate-x-1/2 gap-2.5"
          style={{ bottom: 60 }}
        >
          {WORDS.map((_, i) => (
            <span
              key={i}
              className="rounded-[2px] transition-all duration-300"
              style={{
                width: i === idx ? 48 : 24,
                height: 2,
                background: i === idx ? 'var(--color-accent)' : 'var(--color-border)',
                transitionTimingFunction: 'var(--ease-out-soft)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
