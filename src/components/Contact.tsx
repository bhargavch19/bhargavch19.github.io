import { Section } from './Section'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to C2C contracts."
      subtitle="The fastest way to reach me is email. GitHub and LinkedIn work too."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
        >
          <p className="mono text-xs uppercase tracking-wider text-slate-500">Email</p>
          <p className="mt-2 text-lg text-slate-100">{profile.email}</p>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
        >
          <p className="mono text-xs uppercase tracking-wider text-slate-500">GitHub</p>
          <p className="mt-2 text-lg text-slate-100">@bhargavch19</p>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
        >
          <p className="mono text-xs uppercase tracking-wider text-slate-500">LinkedIn</p>
          <p className="mt-2 text-lg text-slate-100">/in/bhargavch19</p>
        </a>
        <a
          href={profile.resumeHref}
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]"
        >
          <p className="mono text-xs uppercase tracking-wider text-slate-500">Resume</p>
          <p className="mt-2 text-lg text-slate-100">Download (.docx)</p>
        </a>
      </div>

      <footer className="mt-16 border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite + Tailwind. Hosted on
          GitHub Pages.
        </p>
      </footer>
    </Section>
  )
}
