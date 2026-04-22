import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { EASE } from '../lib/motion'

interface SectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } },
}

export function Section({ eyebrow, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={`mx-auto w-full max-w-5xl px-6 py-10 sm:py-14 ${className}`}
    >
      <motion.header variants={item} className="mb-8 sm:mb-10">
        {eyebrow && (
          <p className="mono mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-3 max-w-2xl text-base text-zinc-400">{subtitle}</p>}
      </motion.header>
      {children}
    </motion.section>
  )
}

/** Reusable variants exported for children that want to participate in the stagger. */
export const sectionItem = item
