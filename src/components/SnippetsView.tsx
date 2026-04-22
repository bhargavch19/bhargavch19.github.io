import { FeaturedSnippets } from './FeaturedSnippets'
import { SnippetGallery } from './SnippetGallery'
import { snippets } from '../data/snippets.generated'

interface Props {
  onNavigateHome: () => void
}

export function SnippetsView({ onNavigateHome }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
      <button
        type="button"
        onClick={onNavigateHome}
        className="mono mb-8 inline-flex items-center gap-2 uppercase text-zinc-400 transition-colors hover:text-accent"
        style={{ fontSize: 11, letterSpacing: '0.22em' }}
      >
        <span aria-hidden="true">←</span> Back to portfolio
      </button>
      <p
        className="mono mb-4 uppercase text-accent"
        style={{ fontSize: 11, letterSpacing: '0.22em' }}
      >
        {snippets.length} snippets
      </p>
      <h1
        className="font-semibold text-zinc-100"
        style={{
          fontSize: 'clamp(40px, 5vw, 60px)',
          letterSpacing: '-0.025em',
          lineHeight: 1.05,
        }}
      >
        UI-Code-Snippets gallery.
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-400" style={{ fontSize: 18, lineHeight: 1.55 }}>
        Extracted at build time from the original repo. Start with six featured patterns, then browse
        the whole library.
      </p>
      <div className="mt-10">
        <FeaturedSnippets />
        <div className="my-12 h-px w-full bg-[var(--color-border)]" />
        <SnippetGallery />
      </div>
    </section>
  )
}
