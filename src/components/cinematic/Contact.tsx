import { SectionReveal } from './SectionReveal'
import { profile } from '../../data/profile'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 pt-[180px] pb-[180px] text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 -translate-x-1/2"
        style={{
          left: '50%',
          bottom: -200,
          width: 900,
          height: 500,
          background: 'radial-gradient(ellipse, oklch(0.71 0.18 264 / 0.3), transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-[1] mx-auto">
        <SectionReveal>
          <h2
            className="mx-auto max-w-[900px] font-semibold text-zinc-100"
            style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              letterSpacing: '-0.035em',
              lineHeight: 1.02,
            }}
          >
            Let's build something <span className="accent-gradient">worth keeping.</span>
          </h2>
        </SectionReveal>

        <SectionReveal>
          <p
            className="mx-auto mt-7 max-w-[520px] text-zinc-400"
            style={{ fontSize: 18, lineHeight: 1.5 }}
          >
            {profile.availability}. The fastest way to reach me is email — GitHub and LinkedIn work too.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-12 inline-flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#09090f] transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(110deg, var(--color-accent) 0%, var(--color-accent-2) 100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 14px 32px -10px var(--color-accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 transparent'
              }}
            >
              {profile.email} <span aria-hidden="true">→</span>
            </a>
            <a
              href={profile.resumeHref}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-[var(--color-accent)] hover:text-accent"
            >
              Download resume <span aria-hidden="true">↓</span>
            </a>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div
            className="mono mt-16 flex flex-wrap justify-center gap-8 uppercase text-zinc-400"
            style={{ fontSize: 12, letterSpacing: '0.22em' }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub · @bhargavch19
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn · /in/bhargavch19
            </a>
            <span>{profile.location}</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
