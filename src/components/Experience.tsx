import { motion } from 'framer-motion'
import { Section, sectionItem } from './Section'
import { roles, education } from '../data/experience'

export function Experience() {
  return (
    <Section
      eyebrow="Experience"
      title="Where I've shipped."
      subtitle="Nine-plus years across financial services, government, and travel."
    >
      <ol className="relative space-y-10 border-l border-[var(--color-border)] pl-6 sm:pl-10">
        {roles.map((role, i) => (
          <motion.li
            key={`${role.company}-${i}`}
            variants={sectionItem}
            className="relative"
          >
            <span
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] sm:-left-[31px]"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-semibold text-zinc-100">
                {role.title} · <span className="text-accent">{role.company}</span>
              </h3>
              <span className="mono text-xs uppercase tracking-wider text-zinc-500">
                {role.start} — {role.end}
              </span>
            </div>
            <p className="mono mt-1 text-xs uppercase tracking-wider text-zinc-500">
              {role.location}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-zinc-300">
              {role.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {role.apps && role.apps.length > 0 && (
              <div className="mt-4">
                <p className="mono mb-2 text-[11px] uppercase tracking-wider text-zinc-500">
                  Applications
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.apps.map((app) => (
                    <span
                      key={app}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {role.stack.map((s) => (
                <span
                  key={s}
                  className="mono rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-2.5 py-0.5 text-xs text-zinc-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>

      <motion.div variants={sectionItem} className="mt-16 grid gap-4 sm:grid-cols-2">
        <h3 className="mono col-span-full text-[11px] uppercase tracking-[0.22em] text-accent">
          Education
        </h3>
        {education.map((ed) => (
          <div
            key={ed.school}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
          >
            <p className="text-zinc-100">{ed.degree}</p>
            <p className="mt-1 text-sm text-zinc-400">
              {ed.school} · {ed.location}
            </p>
            <p className="mono mt-2 text-xs uppercase tracking-wider text-zinc-500">{ed.year}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}
