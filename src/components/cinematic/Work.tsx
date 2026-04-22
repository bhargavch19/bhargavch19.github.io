import { SectionReveal } from './SectionReveal'

export function Work() {
  return (
    <section id="work" className="bg-[var(--color-bg)] px-6 pt-32 pb-32 sm:pt-[160px] sm:pb-[160px]">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div>
              <span className="section-count">
                <span className="mono text-accent" style={{ fontWeight: 500 }}>05</span>
                <span className="mono ml-2.5 uppercase text-zinc-500" style={{ fontSize: 10, letterSpacing: '0.22em' }}>
                  Selected work
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
                What I'm most proud of.
                <br />
                <span className="text-zinc-500">Three projects. Different stacks. One standard.</span>
              </h2>
            </div>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-8">
          <ProjectCard
            meta="Enterprise · Financial services"
            name="Capital One call tooling"
            tag="Rebuilding call-center tooling at enterprise scale."
            desc="Three years leading the frontend on six Angular 13–18 SPAs for agents and customers — Call-Agent Dashboard, Call-Quality Dashboard, Card Lock/Unlock, Statement Reprints, Memory Messages, and the Agent Call Data Ingest pipeline."
            stats={[
              ['6', 'Apps shipped'],
              ['0', 'Prod incidents'],
              ['A/B', 'Adobe Target + Optimizely'],
              ['E2E', 'Cypress · SonarQube'],
            ]}
            status={{ label: 'Shipped', variant: 'shipped' }}
            chips={['Angular 13–18', 'NgRx', 'TypeScript', 'AWS', 'Docker', 'Kubernetes']}
            visual={<CodeVisual />}
          />
          <ProjectCard
            meta="Side project · Mobile"
            name="Kept"
            tag="Promise-keeping accountability, without the shame."
            desc="A React-Native app where you log daily commitments, invite witnesses, and build streaks that pause on a miss instead of resetting. Local-first storage is the source of truth; cloud is a sync layer. On-device behavioral intelligence."
            stats={[
              ['1,374', 'Passing tests'],
              ['0.81', 'React Native'],
              ['54', 'Expo'],
              ['Local', 'First architecture'],
            ]}
            status={{ label: 'Shipped', variant: 'shipped' }}
            chips={['React Native', 'Expo 54', 'Zustand', 'Supabase', 'Reanimated 4']}
            visual={<PhoneVisual />}
          />
          <ProjectCard
            meta="Side project · Realtime"
            name="Party Pack"
            tag="Multiplayer party games, synchronized across a room."
            desc="A Next.js 16 app for hosting real-time party nights — host runs the flow from their device, guests join with a QR code, games play in sync with live scoring and a confetti final reveal. Ephemeral 6-character room codes, no guest auth, JSONB-backed game registry."
            stats={[
              ['5', 'Games in sequence'],
              ['6-char', 'Room codes'],
              ['Realtime', 'Supabase subscriptions'],
              ['0', 'Guest signups needed'],
            ]}
            status={{ label: 'Prototype', variant: 'prototype' }}
            chips={['Next.js 16', 'React 19', 'Tailwind v4', 'Supabase', 'Framer Motion']}
            visual={<PartyVisual />}
          />
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  meta: string
  name: string
  tag: string
  desc: string
  stats: Array<[string, string]>
  status: { label: string; variant: 'shipped' | 'prototype' }
  chips: string[]
  visual: React.ReactNode
}

function ProjectCard({ meta, name, tag, desc, stats, status, chips, visual }: ProjectCardProps) {
  const statusStyles =
    status.variant === 'shipped'
      ? { border: '1px solid rgba(16,185,129,0.35)', background: 'rgba(16,185,129,0.12)', color: '#6ee7b7' }
      : { border: '1px solid rgba(245,158,11,0.35)', background: 'rgba(245,158,11,0.12)', color: '#fcd34d' }

  return (
    <SectionReveal>
      <article
        className="relative grid items-center gap-10 overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-9 transition-colors duration-300 hover:border-[var(--color-border-strong)] lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14"
      >
        <div>
          <div
            className="mono uppercase text-zinc-500"
            style={{ fontSize: 11, letterSpacing: '0.2em' }}
          >
            {meta}
          </div>
          <h3
            className="mt-3.5 mb-2 font-semibold text-zinc-100"
            style={{ fontSize: 'clamp(32px, 3.4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            {name}
          </h3>
          <p className="mb-5 italic text-zinc-400" style={{ fontSize: 18 }}>
            {tag}
          </p>
          <p className="text-zinc-300" style={{ fontSize: 16, lineHeight: 1.6 }}>
            {desc}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="text-zinc-100" style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>
                  {n}
                </div>
                <div
                  className="mono mt-1 uppercase text-zinc-500"
                  style={{ fontSize: 10, letterSpacing: '0.18em' }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span
              className="mono rounded-full px-3 py-1 uppercase"
              style={{ fontSize: 10, letterSpacing: '0.12em', ...statusStyles }}
            >
              {status.label}
            </span>
            {chips.map((c) => (
              <span
                key={c}
                className="mono rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1 text-zinc-400"
                style={{ fontSize: 12 }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div
          className="project-visual relative overflow-hidden rounded-2xl border border-[var(--color-border)]"
          style={{
            aspectRatio: '16 / 11',
            background: 'linear-gradient(135deg, #0f0f16 0%, #13131c 100%)',
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              inset: '-40%',
              background: 'radial-gradient(circle at 30% 30%, oklch(0.71 0.18 264 / 0.25), transparent 55%)',
            }}
          />
          {visual}
        </div>
      </article>
    </SectionReveal>
  )
}

function CodeVisual() {
  return (
    <div
      className="absolute overflow-hidden rounded-[14px] border border-[var(--color-border)]"
      style={{ inset: '12% 10%', background: '#0a0a13', display: 'grid', gridTemplateRows: 'auto 1fr' }}
    >
      <div
        className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-3.5 py-2.5"
      >
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#fb7185' }} />
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#fcd34d' }} />
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#6ee7b7' }} />
        <em
          className="mono ml-3 text-zinc-500"
          style={{ fontStyle: 'normal', fontSize: 10, letterSpacing: '0.08em' }}
        >
          call-agent-dashboard.component.ts
        </em>
      </div>
      <pre
        className="mono m-0 overflow-hidden whitespace-pre px-4 py-4 text-zinc-300"
        style={{ fontSize: 12, lineHeight: 1.7 }}
      >
        <span style={{ color: '#c4b5fd' }}>@Component</span>
        {'({\n  selector: '}
        <span style={{ color: '#6ee7b7' }}>'ca-call-agent'</span>
        {',\n  changeDetection: '}
        <span style={{ color: '#c4b5fd' }}>OnPush</span>
        {',\n})\n'}
        <span style={{ color: '#c4b5fd' }}>export class</span>
        {' '}
        <span style={{ color: '#7dd3fc' }}>CallAgentDashboard</span>
        {' {\n  '}
        <span style={{ color: 'var(--color-fg-600)', fontStyle: 'italic' }}>{'// Selectors wired to NgRx feature state.'}</span>
        {'\n  agent$ = '}
        <span style={{ color: '#c4b5fd' }}>this</span>
        {'.store.'}
        <span style={{ color: '#7dd3fc' }}>select</span>
        {'(selectAgent);\n  queue$ = '}
        <span style={{ color: '#c4b5fd' }}>this</span>
        {'.store.'}
        <span style={{ color: '#7dd3fc' }}>select</span>
        {'(selectLiveQueue);\n\n  '}
        <span style={{ color: '#7dd3fc' }}>onCardLock</span>
        {'(id: '}
        <span style={{ color: '#c4b5fd' }}>string</span>
        {') {\n    '}
        <span style={{ color: '#c4b5fd' }}>this</span>
        {'.store.'}
        <span style={{ color: '#7dd3fc' }}>dispatch</span>
        {'(\n      lockCard({ id, source: '}
        <span style={{ color: '#6ee7b7' }}>'agent'</span>
        {' }),\n    );\n  }\n}'}
      </pre>
    </div>
  )
}

function PhoneVisual() {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[36px] border border-[var(--color-border-strong)] p-2"
      style={{
        left: '50%',
        top: '50%',
        width: '60%',
        aspectRatio: '9 / 19',
        background: 'linear-gradient(180deg, #1a1a28 0%, #0f0f16 100%)',
        boxShadow:
          '0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
      }}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-[28px]"
        style={{
          background: 'linear-gradient(180deg, #0a0a14 0%, #13131c 100%)',
          padding: '22px 16px',
        }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 6, width: '40%', height: 18, borderRadius: '0 0 10px 10px', background: '#000' }}
        />
        <div
          className="mono mt-3 uppercase text-accent"
          style={{ fontSize: 9, letterSpacing: '0.2em' }}
        >
          Today · Apr 22
        </div>
        <div className="mt-1.5 text-zinc-100" style={{ fontSize: 16, fontWeight: 600 }}>
          Good morning, Bhargav.
        </div>
        <div
          className="mt-3.5 rounded-[10px] border p-2.5"
          style={{ background: 'rgba(99,132,255,0.1)', borderColor: 'rgba(99,132,255,0.3)' }}
        >
          <span
            className="mono block uppercase text-zinc-500"
            style={{ fontSize: 9, letterSpacing: '0.15em' }}
          >
            Current streak
          </span>
          <b className="block text-zinc-100" style={{ fontSize: 24 }}>
            41 days
          </b>
        </div>
        <ChecklistRow label="Walk before 8am" done />
        <ChecklistRow label="Read 20 pages" done />
        <ChecklistRow label="Ship one snippet" />
        <ChecklistRow label="Text a witness" />
      </div>
    </div>
  )
}

function ChecklistRow({ label, done = false }: { label: string; done?: boolean }) {
  return (
    <div
      className="mt-2.5 flex items-center gap-2 rounded-[10px] border border-[var(--color-border)] bg-[var(--color-card)] px-2.5 py-2"
    >
      <span
        className="block flex-shrink-0 rounded"
        style={{
          width: 14,
          height: 14,
          border: '1.5px solid var(--color-accent)',
          background: done ? 'var(--color-accent)' : 'transparent',
        }}
      />
      <span className="text-zinc-300" style={{ fontSize: 11 }}>
        {label}
      </span>
    </div>
  )
}

function PartyVisual() {
  const tiles: Array<{ label: string; name: string; on?: boolean }> = [
    { label: 'Game 01', name: 'Fibbage', on: true },
    { label: 'Game 02', name: 'Draw' },
    { label: 'Game 03', name: 'Guess' },
    { label: 'Game 04', name: 'Trivia' },
    { label: 'Game 05', name: 'Reveal' },
  ]
  return (
    <div className="absolute grid gap-3.5" style={{ inset: '18%', gridTemplateRows: 'auto 1fr' }}>
      <div
        className="rounded-[14px] border border-[var(--color-border)] p-3.5 text-center"
        style={{ background: 'rgba(9,9,15,0.6)' }}
      >
        <div
          className="mono uppercase text-zinc-500"
          style={{ fontSize: 9, letterSpacing: '0.3em' }}
        >
          Join at partypack.live
        </div>
        <div
          className="mono mt-1.5 font-bold accent-gradient"
          style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '0.15em' }}
        >
          K7Q2XM
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {tiles.map((t) => (
          <div
            key={t.label}
            className="flex aspect-square flex-col justify-between rounded-[10px] border p-2"
            style={{
              background: t.on ? 'rgba(99,132,255,0.08)' : 'rgba(9,9,15,0.5)',
              borderColor: t.on ? 'oklch(0.71 0.18 264 / 0.5)' : 'var(--color-border)',
            }}
          >
            <span
              className="mono uppercase text-zinc-500"
              style={{ fontSize: 8, letterSpacing: '0.12em' }}
            >
              {t.label}
            </span>
            <span className="text-zinc-200" style={{ fontSize: 10, fontWeight: 500 }}>
              {t.name}
            </span>
          </div>
        ))}
        <div
          className="grid aspect-square place-items-center rounded-[10px] border border-[var(--color-border)]"
          style={{ background: 'rgba(9,9,15,0.5)' }}
        >
          <span className="text-zinc-500" style={{ fontSize: 9 }}>+1</span>
        </div>
      </div>
    </div>
  )
}
