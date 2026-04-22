import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

interface Props {
  onNavigateSnippets: () => void
  onNavigateHome: () => void
}

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const

export function Nav({ onNavigateSnippets, onNavigateHome }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[rgba(9,9,15,0.72)] backdrop-blur-[18px] backdrop-saturate-150'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3.5 sm:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            onNavigateHome()
          }}
          className="inline-flex items-baseline gap-2.5 text-[15px] font-semibold tracking-tight text-zinc-100"
        >
          <span
            className="mono inline-grid h-7 w-7 place-items-center rounded-lg text-xs font-bold"
            style={{
              background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-2) 100%)',
              color: '#09090f',
              letterSpacing: '-0.02em',
            }}
          >
            BC
          </span>
          <span>{profile.name}</span>
          <span
            className="mono hidden border-l border-[var(--color-border)] pl-2.5 text-[11px] font-normal uppercase text-zinc-500 sm:inline"
            style={{ letterSpacing: '0.16em' }}
          >
            {profile.title}
          </span>
        </a>

        <div className="flex items-center gap-5 text-[13px] sm:gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-zinc-400 transition-colors hover:text-zinc-100 md:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#snippets"
            onClick={(e) => {
              e.preventDefault()
              onNavigateSnippets()
            }}
            className="hidden text-zinc-400 transition-colors hover:text-zinc-100 md:inline"
          >
            Snippets
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-zinc-100 transition-all hover:border-[var(--color-accent)] hover:text-accent"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  )
}
