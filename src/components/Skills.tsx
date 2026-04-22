import { motion } from 'framer-motion'
import { Section, sectionItem } from './Section'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <Section
      eyebrow="Skills"
      title="The stack I reach for."
      subtitle="Decade-deep on the frontend, comfortable across the full stack and the cloud."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={sectionItem}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          >
            <h3 className="mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1 text-sm text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
