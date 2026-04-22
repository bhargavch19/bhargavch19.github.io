import { useState } from 'react'
import { CodeBlock } from './CodeBlock'
import type { Snippet } from '../data/snippets.generated'

const LANG_LABEL: Record<Snippet['language'], string> = {
  angular: 'Angular',
  react: 'React',
  javascript: 'JS',
  css: 'CSS',
  html: 'HTML',
}

const LANG_COLOR: Record<Snippet['language'], string> = {
  angular: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
  react: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
  javascript: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  css: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  html: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
}

interface Props {
  snippet: Snippet
  blurb?: string
  defaultExpanded?: boolean
}

export function SnippetCard({ snippet, blurb, defaultExpanded = false }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-colors hover:border-slate-700">
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-100">{snippet.title}</h3>
          <span
            className={`mono shrink-0 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${LANG_COLOR[snippet.language]}`}
          >
            {LANG_LABEL[snippet.language]}
          </span>
        </div>
        <p className="mono text-xs uppercase tracking-wider text-slate-500">
          {snippet.category}
        </p>
        {blurb && <p className="text-sm leading-relaxed text-slate-400">{blurb}</p>}
      </div>

      {expanded ? (
        <div className="px-5 pb-5">
          <CodeBlock code={snippet.code} language={snippet.language} maxHeight="24rem" />
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className="mt-3 mono text-xs uppercase tracking-wider text-slate-400 hover:text-[color:var(--color-accent)]"
          >
            Collapse
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="border-t border-slate-800 px-5 py-3 text-left mono text-xs uppercase tracking-wider text-slate-400 transition-colors hover:bg-slate-900 hover:text-[color:var(--color-accent)]"
        >
          View code →
        </button>
      )}
    </article>
  )
}
