import { Section } from './Section'
import { SnippetCard } from './SnippetCard'
import { featured } from '../data/featured-snippets'
import { snippets } from '../data/snippets.generated'

export function FeaturedSnippets() {
  const snippetById = new Map(snippets.map((s) => [s.id, s]))

  return (
    <Section
      id="featured"
      eyebrow="Featured"
      title="A dozen patterns I keep reaching for."
      subtitle="Hand-picked from the gallery below — production tricks that pay for themselves across projects."
      className="bg-slate-950"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((f) => {
          const snippet = snippetById.get(f.id)
          if (!snippet) return null
          return (
            <SnippetCard
              key={f.id}
              snippet={{ ...snippet, title: f.headline }}
              blurb={f.blurb}
            />
          )
        })}
      </div>
    </Section>
  )
}
