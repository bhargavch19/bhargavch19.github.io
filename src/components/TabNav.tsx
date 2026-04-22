import { motion } from 'framer-motion'

export interface TabDef<T extends string> {
  id: T
  label: string
  count?: number | string
}

interface Props<T extends string> {
  tabs: readonly TabDef<T>[]
  active: T
  onSelect: (id: T) => void
  orientation: 'vertical' | 'horizontal'
  indicatorId: string
}

export function TabNav<T extends string>({
  tabs,
  active,
  onSelect,
  orientation,
  indicatorId,
}: Props<T>) {
  if (orientation === 'vertical') {
    return (
      <nav aria-label="Sections" className="sticky top-24">
        <ul className="flex flex-col gap-1">
          {tabs.map((tab) => {
            const isActive = active === tab.id
            return (
              <li key={tab.id} className="relative">
                <button
                  type="button"
                  onClick={() => onSelect(tab.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${
                    isActive
                      ? 'text-zinc-100'
                      : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId={indicatorId}
                      className="absolute inset-0 -z-10 rounded-xl bg-[var(--color-accent-soft)]"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`mono text-xs ${isActive ? 'text-accent' : 'text-zinc-600'}`}
                    >
                      {String(tabs.indexOf(tab) + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium tracking-tight">{tab.label}</span>
                  </span>
                  {tab.count !== undefined && (
                    <span className="mono text-[11px] text-zinc-500">{tab.count}</span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return (
    <nav
      aria-label="Sections"
      className="relative -mx-6 overflow-x-auto px-6 pb-2"
    >
      <ul className="relative flex min-w-max gap-2">
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <li key={tab.id} className="relative">
              <button
                type="button"
                onClick={() => onSelect(tab.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'text-zinc-100'
                    : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={indicatorId}
                    className="absolute inset-0 -z-10 rounded-full bg-[var(--color-accent-soft)] ring-1 ring-inset ring-[var(--color-accent)]/40"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="inline-flex items-center gap-2">
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className="mono text-[10px] text-zinc-500">{tab.count}</span>
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
