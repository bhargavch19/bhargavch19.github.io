import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className = '' }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section
      id={id}
      ref={ref}
      className={`relative scroll-mt-24 border-t border-slate-900/60 py-20 sm:py-28 fade-up ${
        inView ? 'in-view' : ''
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-14">
          {eyebrow && (
            <p className="mono mb-3 text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-3 max-w-2xl text-base text-slate-400">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
