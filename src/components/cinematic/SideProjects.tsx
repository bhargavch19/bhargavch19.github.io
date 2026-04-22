import { SectionReveal } from './SectionReveal'
import { Carousel } from './Carousel'
import { CardSpotlight } from './CardSpotlight'

interface Slide {
  name: string
  tagline: string
  description: string
  meta: string
  status: 'Shipped' | 'Prototype' | 'Reference'
  chips: string[]
  stats: Array<[string, string]>
  visual: React.ReactNode
  href?: string
  hrefLabel?: string
}

const SLIDES: Slide[] = [
  {
    name: 'Kept',
    tagline: 'Promise-keeping accountability, without the shame.',
    description:
      "A React-Native app where you log daily commitments, invite witnesses, and build streaks that pause on a miss instead of resetting. Local-first storage is the source of truth; cloud is a sync layer. On-device behavioral intelligence.",
    meta: 'Mobile · Local-first',
    status: 'Shipped',
    chips: ['React Native 0.81', 'Expo 54', 'Zustand', 'Supabase', 'Reanimated 4'],
    stats: [
      ['1,374', 'Passing tests'],
      ['Local', 'First architecture'],
      ['4', 'Sync subsystems'],
      ['0', 'Cloud dependencies'],
    ],
    visual: <PhoneVisual />,
  },
  {
    name: 'Party Pack',
    tagline: 'Multiplayer party games, synchronized across a room.',
    description:
      "A Next.js 16 app for hosting real-time party nights — host runs the flow from their device, guests join with a QR code, games play in sync with live scoring and a confetti final reveal. Ephemeral 6-character room codes, no guest auth, JSONB-backed game registry.",
    meta: 'Realtime · Multiplayer',
    status: 'Prototype',
    chips: ['Next.js 16', 'React 19', 'Tailwind v4', 'Supabase', 'Framer Motion'],
    stats: [
      ['5', 'Games in sequence'],
      ['6-char', 'Room codes'],
      ['Realtime', 'Supabase subscriptions'],
      ['0', 'Guest signups needed'],
    ],
    visual: <PartyVisual />,
  },
  {
    name: 'UI Code Snippets',
    tagline: 'A growing reference library of production UI patterns.',
    description:
      "The source of the snippet gallery on this site. Angular, React, vanilla JS, and CSS patterns I've actually shipped in production, kept in one browsable place for reuse and reference across five stacks.",
    meta: 'Reference · Library',
    status: 'Reference',
    chips: ['Angular', 'React', 'TypeScript', 'JavaScript', 'CSS'],
    stats: [
      ['105', 'Snippets'],
      ['5', 'Stacks'],
      ['9+ yrs', 'Of receipts'],
      ['1', 'Browsable gallery'],
    ],
    visual: <CodeVisual />,
    href: '#snippets',
    hrefLabel: 'Open gallery →',
  },
]

export function SideProjects() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-raised)] px-6 pt-28 pb-32 sm:pt-[140px] sm:pb-[160px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mb-14">
            <span className="section-count">
              <span className="mono text-accent" style={{ fontWeight: 500 }}>05</span>
              <span
                className="mono ml-2.5 uppercase text-zinc-400"
                style={{ fontSize: 10, letterSpacing: '0.22em' }}
              >
                Side projects
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
              Things I'm building after hours.{' '}
              <span className="text-zinc-400">Different stacks. One standard.</span>
            </h2>
          </div>
        </SectionReveal>

        <Carousel ariaLabel="Side projects">
          {SLIDES.map((s) => (
            <ProjectCard key={s.name} slide={s} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

function ProjectCard({ slide }: { slide: Slide }) {
  const statusStyles =
    slide.status === 'Shipped'
      ? { border: '1px solid rgba(16,185,129,0.35)', background: 'rgba(16,185,129,0.12)', color: '#6ee7b7' }
      : slide.status === 'Prototype'
        ? { border: '1px solid rgba(245,158,11,0.35)', background: 'rgba(245,158,11,0.12)', color: '#fcd34d' }
        : { border: '1px solid var(--color-border-strong)', background: 'var(--color-bg-raised)', color: 'var(--color-fg-400)' }

  return (
    <article
      className="relative grid gap-10 overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-8 transition-colors duration-300 hover:border-[var(--color-border-strong)] lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-12"
    >
      <CardSpotlight />
      <div className="flex flex-col gap-5">
        <div
          className="mono uppercase text-zinc-400"
          style={{ fontSize: 11, letterSpacing: '0.2em' }}
        >
          {slide.meta}
        </div>
        <h3
          className="font-semibold text-zinc-100"
          style={{ fontSize: 'clamp(32px, 3.2vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
        >
          {slide.name}
        </h3>
        <p className="italic text-zinc-400" style={{ fontSize: 18 }}>
          {slide.tagline}
        </p>
        <p className="text-zinc-300" style={{ fontSize: 15, lineHeight: 1.65 }}>
          {slide.description}
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {slide.stats.map(([n, l]) => (
            <div key={l}>
              <div
                className="text-zinc-100"
                style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em' }}
              >
                {n}
              </div>
              <div
                className="mono mt-1 uppercase text-zinc-400"
                style={{ fontSize: 10, letterSpacing: '0.18em' }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <span
            className="mono rounded-full px-3 py-1 uppercase"
            style={{ fontSize: 10, letterSpacing: '0.12em', ...statusStyles }}
          >
            {slide.status}
          </span>
          {slide.chips.map((c) => (
            <span
              key={c}
              className="mono rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-3 py-1 text-zinc-400"
              style={{ fontSize: 12 }}
            >
              {c}
            </span>
          ))}
        </div>

        {slide.href && (
          <a
            href={slide.href}
            className="mono inline-flex items-center gap-2 text-accent transition-colors hover:text-zinc-100"
            style={{ fontSize: 13, letterSpacing: '0.08em' }}
          >
            {slide.hrefLabel ?? 'Open →'}
          </a>
        )}
      </div>

      <div
        className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-[var(--color-border)]"
        style={{ background: 'linear-gradient(135deg, #0f0f16 0%, #13131c 100%)' }}
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
            background:
              'radial-gradient(circle at 30% 30%, oklch(0.71 0.18 264 / 0.25), transparent 55%)',
          }}
        />
        {slide.visual}
      </div>
    </article>
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
            className="mono block uppercase text-zinc-400"
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
          className="mono uppercase text-zinc-400"
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
              className="mono uppercase text-zinc-400"
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
          <span className="text-zinc-400" style={{ fontSize: 9 }}>+1</span>
        </div>
      </div>
    </div>
  )
}

function CodeVisual() {
  return (
    <div
      className="absolute overflow-hidden rounded-[14px] border border-[var(--color-border)]"
      style={{ inset: '12% 10%', background: '#0a0a13', display: 'grid', gridTemplateRows: 'auto 1fr' }}
    >
      <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-3.5 py-2.5">
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#fb7185' }} />
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#fcd34d' }} />
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#6ee7b7' }} />
        <em
          className="mono ml-3 text-zinc-400"
          style={{ fontStyle: 'normal', fontSize: 10, letterSpacing: '0.08em' }}
        >
          snippets/ng-shared-components.ts
        </em>
      </div>
      <pre
        className="mono m-0 overflow-hidden whitespace-pre px-4 py-4 text-zinc-300"
        style={{ fontSize: 12, lineHeight: 1.7 }}
      >
        <span style={{ color: 'var(--color-fg-600)', fontStyle: 'italic' }}>
          {'// 105 production-tested patterns, five stacks.'}
        </span>
        {'\n'}
        <span style={{ color: '#c4b5fd' }}>export</span>
        {' '}
        <span style={{ color: '#c4b5fd' }}>const</span>
        {' '}
        <span style={{ color: '#7dd3fc' }}>snippets</span>
        {' = {\n  '}
        <span style={{ color: '#7dd3fc' }}>angular</span>
        {':  '}
        <span style={{ color: '#fcd34d' }}>54</span>
        {',\n  '}
        <span style={{ color: '#7dd3fc' }}>react</span>
        {':    '}
        <span style={{ color: '#fcd34d' }}>27</span>
        {',\n  '}
        <span style={{ color: '#7dd3fc' }}>vanilla</span>
        {':  '}
        <span style={{ color: '#fcd34d' }}>14</span>
        {',\n  '}
        <span style={{ color: '#7dd3fc' }}>typescript</span>
        {': '}
        <span style={{ color: '#fcd34d' }}>6</span>
        {',\n  '}
        <span style={{ color: '#7dd3fc' }}>css</span>
        {':      '}
        <span style={{ color: '#fcd34d' }}>4</span>
        {',\n};'}
      </pre>
    </div>
  )
}
