import { motion } from 'framer-motion'
import { Section, sectionItem } from './Section'
import { profile } from '../data/profile'

const cardClass =
  'rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]'

export function Contact() {
  return (
    <Section
      eyebrow="Contact"
      title={profile.availability}
      subtitle="The fastest way to reach me is email. GitHub and LinkedIn work too."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <motion.a
          variants={sectionItem}
          href={`mailto:${profile.email}`}
          className={cardClass}
        >
          <p className="mono text-[11px] uppercase tracking-wider text-zinc-500">Email</p>
          <p className="mt-2 text-lg text-zinc-100">{profile.email}</p>
        </motion.a>
        <motion.a
          variants={sectionItem}
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={cardClass}
        >
          <p className="mono text-[11px] uppercase tracking-wider text-zinc-500">GitHub</p>
          <p className="mt-2 text-lg text-zinc-100">@bhargavch19</p>
        </motion.a>
        <motion.a
          variants={sectionItem}
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className={cardClass}
        >
          <p className="mono text-[11px] uppercase tracking-wider text-zinc-500">LinkedIn</p>
          <p className="mt-2 text-lg text-zinc-100">/in/bhargavch19</p>
        </motion.a>
        <motion.a variants={sectionItem} href={profile.resumeHref} className={cardClass}>
          <p className="mono text-[11px] uppercase tracking-wider text-zinc-500">Resume</p>
          <p className="mt-2 text-lg text-zinc-100">Download (.pdf)</p>
        </motion.a>
      </div>

      <footer className="mt-16 border-t border-[var(--color-border)] pt-8 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite + Tailwind +
          framer-motion. Hosted on GitHub Pages.
        </p>
      </footer>
    </Section>
  )
}
