import { useCallback, useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/cinematic/StatsStrip'
import { Pipeline } from './components/cinematic/Pipeline'
import { Philosophy } from './components/cinematic/Philosophy'
import { ProfessionalWork } from './components/cinematic/ProfessionalWork'
import { SideProjects } from './components/cinematic/SideProjects'
import { Contact } from './components/cinematic/Contact'
import { SnippetsView } from './components/SnippetsView'

const SNIPPETS_HASH = '#snippets'

function readView(): 'snippets' | 'landing' {
  if (typeof window === 'undefined') return 'landing'
  return window.location.hash === SNIPPETS_HASH ? 'snippets' : 'landing'
}

export default function App() {
  const [view, setView] = useState<'snippets' | 'landing'>(readView)

  useEffect(() => {
    const onHashChange = () => setView(readView())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [view])

  const onNavigateSnippets = useCallback(() => {
    window.location.hash = SNIPPETS_HASH
  }, [])

  const onNavigateHome = useCallback(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
    setView('landing')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav onNavigateSnippets={onNavigateSnippets} onNavigateHome={onNavigateHome} />
      <main id="main-content" className="noise-overlay min-h-screen">
        {view === 'landing' ? (
          <>
            <Hero />
            <StatsStrip />
            <Pipeline />
            <Philosophy />
            <ProfessionalWork />
            <SideProjects />
            <Contact />
            <footer
              className="border-t border-[var(--color-border)] px-6 py-10 text-center text-zinc-400"
              style={{ fontSize: 13 }}
            >
              © {new Date().getFullYear()} Bhargav Chellu · Built with care, in the dark.
            </footer>
          </>
        ) : (
          <SnippetsView onNavigateHome={onNavigateHome} />
        )}
      </main>
    </>
  )
}
