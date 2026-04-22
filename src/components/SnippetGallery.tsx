import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { sectionItem } from './Section'
import { SnippetCard } from './SnippetCard'
import { snippets, type Snippet } from '../data/snippets.generated'
import { profile } from '../data/profile'
import { EASE } from '../lib/motion'

const FILTERS: Array<{ key: 'all' | Snippet['language']; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'angular', label: 'Angular' },
  { key: 'react', label: 'React' },
  { key: 'javascript', label: 'JavaScript' },
  { key: 'css', label: 'CSS' },
  { key: 'html', label: 'HTML' },
]

export function SnippetGallery() {
  const [filter, setFilter] = useState<'all' | Snippet['language']>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return snippets.filter((s) => {
      if (filter !== 'all' && s.language !== filter) return false
      if (q.length === 0) return true
      return (
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q)
      )
    })
  }, [filter, query])

  const countByLanguage = useMemo(() => {
    const counts = new Map<string, number>()
    for (const s of snippets) counts.set(s.language, (counts.get(s.language) ?? 0) + 1)
    return counts
  }, [])

  return (
    <div>
      <motion.div variants={sectionItem} className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="mono text-[11px] uppercase tracking-[0.22em] text-accent">All snippets</h3>
        <div className="relative w-full sm:w-72">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, category, code…"
            aria-label="Search snippets"
            className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-[var(--color-accent)] focus:outline-none"
          />
        </div>
      </motion.div>

      <motion.div variants={sectionItem} className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.key
          const count = f.key === 'all' ? snippets.length : countByLanguage.get(f.key) ?? 0
          return (
            <button
              type="button"
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                active
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-accent'
                  : 'border-[var(--color-border)] text-zinc-400 hover:border-[var(--color-border-strong)] hover:text-zinc-200'
              }`}
            >
              {f.label} <span className="ml-1 mono text-xs opacity-70">{count}</span>
            </button>
          )
        })}
      </motion.div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center text-zinc-400">
          No snippets match that filter.{' '}
          <button
            type="button"
            onClick={() => {
              setFilter('all')
              setQuery('')
            }}
            className="text-accent underline"
          >
            Reset
          </button>
        </p>
      ) : (
        <motion.div
          layout
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((s) => (
            <motion.div
              key={s.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              <SnippetCard snippet={s} />
            </motion.div>
          ))}
        </motion.div>
      )}

      <p className="mt-10 text-sm text-zinc-500">
        Source of truth:{' '}
        <a
          href={profile.snippetsRepo}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-300 underline hover:text-accent"
        >
          bhargavch19/UI-Code-Snippets
        </a>
        .
      </p>
    </div>
  )
}
