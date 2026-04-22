import { motion } from 'framer-motion'
import { Section, sectionItem } from './Section'
import { profile } from '../data/profile'

export function About() {
  return (
    <Section eyebrow="About" title="Pixel-correct, performance-minded, hire-friendly.">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <motion.div variants={sectionItem} className="space-y-5 text-lg leading-relaxed text-zinc-300">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>
        <motion.aside
          variants={sectionItem}
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
        >
          <h3 className="mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">Most recent</h3>
          <p className="mt-2 text-zinc-100">Senior Frontend Developer · Capital One</p>
          <h3 className="mono mt-6 text-[11px] uppercase tracking-[0.22em] text-zinc-500">Based in</h3>
          <p className="mt-2 text-zinc-100">{profile.location}</p>
          <h3 className="mono mt-6 text-[11px] uppercase tracking-[0.22em] text-zinc-500">Availability</h3>
          <p className="mt-2 text-zinc-100">{profile.availability}</p>
        </motion.aside>
      </div>
    </Section>
  )
}
