import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../hooks/useCountUp'
import { EASE } from '../lib/motion'

const SCORE = 97

const STATS: Array<{ label: string; value: string }> = [
  { label: 'On-time delivery', value: '100%' },
  { label: 'Production incidents caused', value: '0' },
  { label: 'Stakeholders still talking to me', value: 'Yes' },
  { label: 'Portfolio in your browser', value: 'right now' },
]

export function HireMeter() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const value = useCountUp(started ? SCORE : 0, 1200, started)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="noise-overlay relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-bg-raised)] p-6"
    >
      <div className="flex items-baseline justify-between">
        <div>
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Hire signal
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            Odds you'll be glad you called, based on 9+ years of receipts.
          </p>
        </div>
        <div className="text-right">
          <span className="accent-gradient text-5xl font-semibold tabular-nums">
            {value}%
          </span>
        </div>
      </div>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg-raised)]">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: started ? `${SCORE}%` : '0%' }}
          transition={{ duration: 1.2, ease: EASE }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]"
        />
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] pb-2 last:border-0">
            <dt className="text-zinc-500">{s.label}</dt>
            <dd className="mono font-medium text-zinc-200">{s.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mono mt-4 text-[10px] uppercase tracking-wider text-zinc-600">
        Sample size: n = 1. Confidence: calibrated.
      </p>
    </motion.div>
  )
}
