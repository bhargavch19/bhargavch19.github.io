import { SectionReveal } from './SectionReveal'
import { Carousel } from './Carousel'
import { CardSpotlight } from './CardSpotlight'
import { roles, type Role } from '../../data/experience'

export function ProfessionalWork() {
  return (
    <section
      id="experience"
      className="bg-[var(--color-bg)] px-6 pt-32 pb-28 sm:pt-[160px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="section-count">
                <span className="mono text-accent" style={{ fontWeight: 500 }}>04</span>
                <span
                  className="mono ml-2.5 uppercase text-zinc-400"
                  style={{ fontSize: 10, letterSpacing: '0.22em' }}
                >
                  Professional experience
                </span>
              </span>
              <h2
                className="mt-5 font-semibold text-zinc-100"
                style={{
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                }}
              >
                Where I've shipped.{' '}
                <span className="text-zinc-400">Ten-plus years, four employers.</span>
              </h2>
              <p className="mt-6 max-w-[620px] text-zinc-400" style={{ fontSize: 19, lineHeight: 1.55 }}>
                Full-stack work across financial services, government, and travel — from Angular and React
                SPAs at the surface down through Node.js and Python pipelines on AWS.
              </p>
            </div>
          </div>
        </SectionReveal>

        <Carousel ariaLabel="Professional experience">
          {roles.map((role) => (
            <RoleCard key={`${role.company}-${role.start}`} role={role} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

function RoleCard({ role }: { role: Role }) {
  return (
    <article
      className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-colors duration-300 hover:border-[var(--color-border-strong)] sm:p-10"
    >
      <CardSpotlight />
      <header>
        <div
          className="mono uppercase text-zinc-400"
          style={{ fontSize: 11, letterSpacing: '0.2em' }}
        >
          {role.start} — {role.end} · {role.location}
        </div>
        <h3
          className="mt-3 font-semibold text-zinc-100"
          style={{ fontSize: 'clamp(28px, 2.6vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          {role.title}
          <span className="text-zinc-400"> · </span>
          <span className="accent-gradient">{role.company}</span>
        </h3>
      </header>

      <ul className="space-y-3 pl-0" style={{ listStyle: 'none' }}>
        {role.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-zinc-300" style={{ fontSize: 15, lineHeight: 1.6 }}>
            <span
              aria-hidden="true"
              className="mt-[0.6em] block h-1 w-1 shrink-0 rounded-full"
              style={{ background: 'var(--color-accent)' }}
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {role.apps && role.apps.length > 0 && (
        <div className="mt-auto">
          <div
            className="mono mb-3 uppercase text-zinc-400"
            style={{ fontSize: 10, letterSpacing: '0.22em' }}
          >
            Apps shipped
          </div>
          <div className="flex flex-wrap gap-2">
            {role.apps.map((a) => (
              <span
                key={a}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1 text-zinc-300"
                style={{ fontSize: 12 }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <div
          className="mono mb-3 uppercase text-zinc-400"
          style={{ fontSize: 10, letterSpacing: '0.22em' }}
        >
          Stack
        </div>
        <div className="flex flex-wrap gap-2">
          {role.stack.map((s) => (
            <span
              key={s}
              className="mono rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1 text-zinc-400"
              style={{ fontSize: 12 }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
