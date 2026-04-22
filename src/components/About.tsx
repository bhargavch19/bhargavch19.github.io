import { Section } from './Section'
import { profile } from '../data/profile'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Pixel-correct, performance-minded, hire-friendly.">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-slate-300">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <aside className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h3 className="mono text-xs uppercase tracking-wider text-slate-500">Currently</h3>
          <p className="mt-2 text-slate-200">Senior Frontend Developer at Capital One</p>
          <h3 className="mono mt-6 text-xs uppercase tracking-wider text-slate-500">Based in</h3>
          <p className="mt-2 text-slate-200">{profile.location}</p>
          <h3 className="mono mt-6 text-xs uppercase tracking-wider text-slate-500">Availability</h3>
          <p className="mt-2 text-slate-200">Open to C2C contracts</p>
        </aside>
      </div>
    </Section>
  )
}
