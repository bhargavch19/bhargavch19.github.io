import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'

export function Hero() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(hover: hover)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (orb1.current) {
          orb1.current.style.translate = `${x * 18}px ${y * 18}px`
        }
        if (orb2.current) {
          orb2.current.style.translate = `${x * 36}px ${y * 36}px`
        }
      })
    }
    document.addEventListener('mousemove', onMove)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="top"
      className="noise-overlay relative grid min-h-screen place-items-center overflow-hidden px-6 pt-28 pb-20"
      style={{ isolation: 'isolate' }}
    >
      <div aria-hidden="true" className="grid-backdrop pointer-events-none absolute inset-0 z-0" />

      {/* centered radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          width: 800,
          height: 800,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, oklch(0.71 0.18 264 / 0.22) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      {/* two floating orbs with mouse parallax */}
      <div
        ref={orb1}
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          left: -120,
          top: '30%',
          width: 340,
          height: 340,
          borderRadius: 9999,
          background: 'oklch(0.71 0.18 264)',
          filter: 'blur(80px)',
          opacity: 0.35,
          animation: 'orbFloat 14s ease-in-out infinite',
          transition: 'translate 200ms var(--ease-out-soft)',
        }}
      />
      <div
        ref={orb2}
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          right: -140,
          top: '55%',
          width: 420,
          height: 420,
          borderRadius: 9999,
          background: 'oklch(0.82 0.13 210)',
          filter: 'blur(80px)',
          opacity: 0.35,
          animation: 'orbFloat 14s ease-in-out -6s infinite',
          transition: 'translate 200ms var(--ease-out-soft)',
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[1100px] text-center">
        <p
          className="mono uppercase text-accent"
          style={{
            fontSize: 12,
            letterSpacing: '0.3em',
            opacity: 0,
            transform: 'translateY(10px)',
            animation: 'fadeUp 900ms var(--ease-out-soft) 200ms forwards',
          }}
        >
          {profile.name} · {profile.title} · {profile.location}
        </p>

        <h1
          className="font-semibold text-zinc-100"
          style={{
            marginTop: 28,
            fontSize: 'clamp(52px, 9vw, 124px)',
            lineHeight: 0.98,
            letterSpacing: '-0.035em',
          }}
        >
          <HeroWord delay={350}>Full-stack</HeroWord>{' '}
          <HeroWord delay={450} style={{ color: 'var(--color-fg-400, #a1a1aa)' }}>
            JavaScript.
          </HeroWord>
          <br />
          <HeroWord delay={550} className="accent-gradient">
            Data
          </HeroWord>{' '}
          <HeroWord delay={650} className="accent-gradient">
            in
          </HeroWord>{' '}
          <HeroWord delay={750} className="accent-gradient">
            motion.
          </HeroWord>
        </h1>

        <p
          className="mx-auto text-zinc-400"
          style={{
            marginTop: 32,
            maxWidth: 640,
            fontSize: 'clamp(18px, 1.5vw, 22px)',
            lineHeight: 1.45,
            opacity: 0,
            transform: 'translateY(10px)',
            animation: 'fadeUp 900ms var(--ease-out-soft) 1000ms forwards',
          }}
        >
          {profile.tagline}
        </p>

        <div
          className="inline-flex flex-wrap justify-center gap-3"
          style={{
            marginTop: 48,
            opacity: 0,
            animation: 'fadeUp 900ms var(--ease-out-soft) 1150ms forwards',
          }}
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#09090f] transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(110deg, var(--color-accent) 0%, var(--color-accent-2) 100%)',
              boxShadow: '0 0 0 transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 14px 32px -10px var(--color-accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 transparent'
            }}
          >
            See the work <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:border-[var(--color-accent)] hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mono absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 uppercase text-zinc-600"
        style={{
          bottom: 28,
          fontSize: 10,
          letterSpacing: '0.3em',
          opacity: 0,
          animation: 'fadeUp 900ms var(--ease-out-soft) 1400ms forwards',
        }}
      >
        Scroll
        <span
          aria-hidden="true"
          style={{
            width: 1,
            height: 36,
            background: 'linear-gradient(to bottom, var(--color-fg-600, #52525b), transparent)',
            animation: 'scrollHint 2.4s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}

function HeroWord({
  children,
  delay,
  className = '',
  style,
}: {
  children: React.ReactNode
  delay: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        opacity: 0,
        transform: 'translateY(30px)',
        animation: `wordUp 900ms var(--ease-out-soft) ${delay}ms forwards`,
        ...style,
      }}
    >
      {children}
    </span>
  )
}
