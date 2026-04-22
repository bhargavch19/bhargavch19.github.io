import { motion } from 'framer-motion'
import { Section, sectionItem } from './Section'
import { projects } from '../data/projects'
import { EASE } from '../lib/motion'

const STATUS_COLOR: Record<string, string> = {
  Shipping: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  Prototype: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  Research: 'bg-zinc-500/10 text-zinc-300 border-zinc-500/30',
}

export function PersonalProjects() {
  return (
    <Section
      eyebrow="Side projects"
      title="Things I'm building after hours."
      subtitle='"Vibe-coded" end-to-end — mobile, realtime multiplayer, a reusable snippet library.'
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.name}
            variants={sectionItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-colors hover:border-[var(--color-border-strong)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-zinc-100">{p.name}</h3>
              <span
                className={`mono shrink-0 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${STATUS_COLOR[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm italic text-zinc-400">{p.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{p.description}</p>

            <ul className="mt-5 space-y-1.5 text-sm text-zinc-400">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-2.5 py-0.5 text-xs text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  View repo →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
