import { Section } from './Section'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The stack I reach for."
      subtitle="Decade-deep in the frontend, comfortable across the full stack and the cloud."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
