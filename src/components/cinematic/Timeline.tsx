import { useEffect, useRef, useState } from 'react'
import { SectionReveal } from './SectionReveal'
import { roles } from '../../data/experience'

export function Timeline() {
  const items = roles.slice(0, 4)

  return (
    <section
      id="experience"
      className="border-y border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 pt-32 pb-32 sm:pt-[160px] sm:pb-[160px]"
    >
      <div className="mx-auto max-w-[1000px]">
        <SectionReveal>
          <span className="section-count">
            <span className="mono text-accent" style={{ fontWeight: 500 }}>06</span>
            <span
              className="mono ml-2.5 uppercase text-zinc-500"
              style={{ fontSize: 10, letterSpacing: '0.22em' }}
            >
              Experience
            </span>
          </span>
          <h2
            className="mt-5 font-semibold text-zinc-100"
            style={{
              fontSize: 'clamp(40px, 5vw, 72px)',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
            }}
          >
            Where I've shipped.
          </h2>
          <p className="mt-6 max-w-[620px] text-zinc-400" style={{ fontSize: 19, lineHeight: 1.55 }}>
            Ten-plus years across financial services, government, and travel.
          </p>
        </SectionReveal>

        <ol className="relative m-0 mt-16 list-none p-0">
          {items.map((role, i) => (
            <TimelineItem key={`${role.company}-${role.start}`} role={role} isLast={i === items.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  )
}

type Role = (typeof roles)[number]

function TimelineItem({ role, isLast }: { role: Role; isLast: boolean }) {
  const ref = useRef<HTMLLIElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  const summary = role.highlights[0] ?? ''

  return (
    <li
      ref={ref}
      className={`relative ${isLast ? '' : 'border-b border-[var(--color-border)]'}`}
      style={{
        padding: '32px 0 32px 60px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 700ms var(--ease-out-soft), transform 700ms var(--ease-out-soft)',
      }}
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute bg-[var(--color-border)]"
          style={{ left: 20, top: 42, bottom: -33, width: 1 }}
        />
      )}
      <span
        aria-hidden="true"
        className="absolute rounded-full border-2 border-[var(--color-accent)]"
        style={{ left: 14, top: 36, width: 14, height: 14, background: 'var(--color-bg-raised)' }}
      />

      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h3
          className="m-0 font-semibold text-zinc-100"
          style={{ fontSize: 22, letterSpacing: '-0.01em' }}
        >
          {role.title} · <em className="not-italic text-accent">{role.company}</em>
        </h3>
        <span
          className="mono uppercase text-zinc-500"
          style={{ fontSize: 11, letterSpacing: '0.12em' }}
        >
          {role.start} — {role.end}
        </span>
      </div>
      <p className="mt-3 max-w-[680px] text-zinc-400">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {role.stack.slice(0, 6).map((s) => (
          <span
            key={s}
            className="mono rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1 text-zinc-400"
            style={{ fontSize: 12 }}
          >
            {s}
          </span>
        ))}
      </div>
    </li>
  )
}
