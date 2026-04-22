import { Section } from './Section'
import { projects } from '../data/projects'

const STATUS_COLOR: Record<string, string> = {
  Shipping: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  Prototype: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  Research: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
}

export function PersonalProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Side projects"
      title="Things I'm building after hours."
      subtitle='"Vibe-coded" end-to-end — mobile, realtime multiplayer, a reusable snippet library.'
      className="bg-slate-950"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-colors hover:border-slate-700"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-100">{p.name}</h3>
              <span
                className={`mono shrink-0 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${STATUS_COLOR[p.status]}`}
              >
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm italic text-slate-400">{p.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{p.description}</p>

            <ul className="mt-5 space-y-1.5 text-sm text-slate-400">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-slate-800 bg-slate-950/60 px-2.5 py-0.5 mono text-xs text-slate-400"
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
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
                >
                  View repo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
