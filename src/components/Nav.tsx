import { useEffect, useState } from 'react'

const LINKS: Array<{ href: string; label: string }> = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#snippets', label: 'Snippets' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
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
          ? 'border-b border-slate-800/60 bg-slate-950/80 backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="mono text-sm font-semibold tracking-tight text-slate-100">
          BC<span className="text-[color:var(--color-accent)]">.</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-slate-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="resume.docx"
            className="rounded-full border border-slate-700 px-4 py-1.5 text-sm text-slate-100 transition-all hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
