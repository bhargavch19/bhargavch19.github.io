import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile'

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.6 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="border-y border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 py-20 sm:py-[100px]"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-[60px]">
        {profile.stats.map((stat, i) => (
          <Stat key={stat.label} stat={stat} active={active} gradient={i === profile.stats.length - 1} />
        ))}
      </div>
    </section>
  )
}

type Stat = (typeof profile.stats)[number]

function Stat({ stat, active, gradient }: { stat: Stat; active: boolean; gradient: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(stat.value)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 1500
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(stat.value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, stat.value])

  const suffix = 'suffix' in stat && stat.suffix ? stat.suffix : ''

  return (
    <div aria-label={`${stat.value}${suffix} — ${stat.label}`}>
      <div
        aria-hidden="true"
        className={`font-semibold leading-none tabular-nums ${gradient ? 'accent-gradient' : 'text-zinc-100'}`}
        style={{
          fontSize: 'clamp(48px, 6vw, 88px)',
          letterSpacing: '-0.03em',
        }}
      >
        {value}
        {suffix}
      </div>
      <div
        aria-hidden="true"
        className="mono mt-4 uppercase text-zinc-400"
        style={{ fontSize: 11, letterSpacing: '0.22em' }}
      >
        {stat.label}
      </div>
    </div>
  )
}
