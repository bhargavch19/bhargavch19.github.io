import { useMemo, useState } from 'react'
import { Section } from './Section'
import { SnippetCard } from './SnippetCard'
import { snippets, type Snippet } from '../data/snippets.generated'
import { profile } from '../data/profile'

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
    <Section
      id="snippets"
      eyebrow={`${snippets.length} snippets`}
      title="The full UI-Code-Snippets gallery."
      subtitle="Searchable, filterable, copy-pasteable. Extracted at build time from the repo's README."
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.key
            const count =
              f.key === 'all' ? snippets.length : countByLanguage.get(f.key) ?? 0
            return (
              <button
                type="button"
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? 'border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]'
                    : 'border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {f.label} <span className="ml-1 mono text-xs opacity-70">{count}</span>
              </button>
            )
          })}
        </div>
        <div className="relative w-full sm:w-72">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, category, code…"
            aria-label="Search snippets"
            className="w-full rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[color:var(--color-accent)] focus:outline-none"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-slate-800 bg-slate-900/40 p-8 text-center text-slate-400">
          No snippets match that filter.{' '}
          <button
            type="button"
            onClick={() => {
              setFilter('all')
              setQuery('')
            }}
            className="text-[color:var(--color-accent)] underline"
          >
            Reset
          </button>
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((s) => (
            <SnippetCard key={s.id} snippet={s} />
          ))}
        </div>
      )}

      <p className="mt-10 text-sm text-slate-500">
        Source of truth:{' '}
        <a
          href={profile.snippetsRepo}
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 underline hover:text-[color:var(--color-accent)]"
        >
          bhargavch19/UI-Code-Snippets
        </a>
        .
      </p>
    </Section>
  )
}
