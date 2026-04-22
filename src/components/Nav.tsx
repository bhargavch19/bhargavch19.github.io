import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'hidden text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:inline'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="mono text-sm font-semibold tracking-tight text-zinc-100">
          <span className="accent-gradient">BC</span>
          <span className="text-zinc-500">.</span>
        </a>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className={linkClass}
          >
            Email
          </a>
          <a
            href={profile.resumeHref}
            className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm text-zinc-100 transition-all hover:border-[var(--color-accent)] hover:text-accent"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
