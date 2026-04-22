import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '../lib/motion'
import { useHashTab } from '../hooks/useHashTab'
import { TabNav, type TabDef } from './TabNav'
import { About } from './About'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { SnippetsPane } from './SnippetsPane'
import { PersonalProjects } from './PersonalProjects'
import { Contact } from './Contact'
import { snippets } from '../data/snippets.generated'
import { roles } from '../data/experience'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

export const TAB_IDS = [
  'about',
  'experience',
  'skills',
  'snippets',
  'projects',
  'contact',
] as const

export type TabId = (typeof TAB_IDS)[number]

const TABS: readonly TabDef<TabId>[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience', count: roles.length },
  { id: 'skills', label: 'Skills', count: skillGroups.length },
  { id: 'snippets', label: 'Snippets', count: snippets.length },
  { id: 'projects', label: 'Projects', count: projects.length },
  { id: 'contact', label: 'Contact' },
]

const paneVariants = {
  enter: { opacity: 0, y: 8 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
}

export function TabShell() {
  const [active, select] = useHashTab<TabId>(TAB_IDS, 'about')

  return (
    <section id="tabs" className="relative mx-auto w-full max-w-6xl px-6 pb-24">
      {/* Mobile: horizontal tab pills */}
      <div className="sticky top-16 z-30 -mx-6 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 px-6 py-3 backdrop-blur lg:hidden">
        <TabNav
          tabs={TABS}
          active={active}
          onSelect={select}
          orientation="horizontal"
          indicatorId="mobile-tab-indicator"
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
        {/* Desktop: vertical sidebar */}
        <aside className="hidden lg:block">
          <TabNav
            tabs={TABS}
            active={active}
            onSelect={select}
            orientation="vertical"
            indicatorId="desktop-tab-indicator"
          />
        </aside>

        <div className="relative min-h-[60vh]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              variants={paneVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.22, ease: EASE }}
            >
              {active === 'about' && <About />}
              {active === 'experience' && <Experience />}
              {active === 'skills' && <Skills />}
              {active === 'snippets' && <SnippetsPane />}
              {active === 'projects' && <PersonalProjects />}
              {active === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
