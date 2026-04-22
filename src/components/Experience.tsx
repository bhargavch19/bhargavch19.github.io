import { Section } from './Section'
import { roles, education } from '../data/experience'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped."
      subtitle="Nine-plus years across financial services, government, and travel."
    >
      <ol className="relative space-y-10 border-l border-slate-800 pl-6 sm:pl-10">
        {roles.map((role, i) => (
          <li key={`${role.company}-${i}`} className="relative">
            <span
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[color:var(--color-accent)] bg-slate-950 sm:-left-[31px]"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-semibold text-slate-100">
                {role.title} · <span className="text-[color:var(--color-accent)]">{role.company}</span>
              </h3>
              <span className="mono text-xs uppercase tracking-wider text-slate-500">
                {role.start} — {role.end}
              </span>
            </div>
            <p className="mono mt-1 text-xs uppercase tracking-wider text-slate-500">
              {role.location}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-slate-300">
              {role.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {role.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-800 bg-slate-900/50 px-2.5 py-0.5 mono text-xs text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        <h3 className="mono col-span-full text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
          Education
        </h3>
        {education.map((ed) => (
          <div
            key={ed.school}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <p className="text-slate-100">{ed.degree}</p>
            <p className="mt-1 text-sm text-slate-400">{ed.school} · {ed.location}</p>
            <p className="mono mt-2 text-xs uppercase tracking-wider text-slate-500">{ed.year}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
