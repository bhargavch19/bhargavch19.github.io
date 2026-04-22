import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

interface Props {
  onNavigateSnippets: () => void
  onNavigateHome: () => void
}

const LINKS = [
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
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
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3.5 sm:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            onNavigateHome()
          }}
          className="inline-flex items-baseline gap-2.5 text-[15px] font-semibold tracking-tight text-zinc-100"
          aria-label={`${profile.name}, ${profile.title} — home`}
        >
          <span
            aria-hidden="true"
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
            className="mono hidden border-l border-[var(--color-border)] pl-2.5 text-[11px] font-normal uppercase text-zinc-400 sm:inline"
            style={{ letterSpacing: '0.16em' }}
          >
            {profile.title}
          </span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-5 text-[13px] md:gap-7">
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
        </nav>
      </div>

      <nav
        aria-label="Primary, compact"
        className="mx-auto flex gap-5 overflow-x-auto border-t border-[var(--color-border)] px-6 pb-2.5 text-[13px] md:hidden"
        style={{ scrollbarWidth: 'none' }}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-zinc-400 transition-colors hover:text-zinc-100"
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
          className="whitespace-nowrap text-zinc-400 transition-colors hover:text-zinc-100"
        >
          Snippets
        </a>
      </nav>
    </header>
  )
}
