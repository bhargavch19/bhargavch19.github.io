import { motion } from 'framer-motion'
import { sectionItem } from './Section'
import { SnippetCard } from './SnippetCard'
import { featured } from '../data/featured-snippets'
import { snippets } from '../data/snippets.generated'

export function FeaturedSnippets() {
  const snippetById = new Map(snippets.map((s) => [s.id, s]))

  return (
    <div>
      <motion.div variants={sectionItem} className="mb-6">
        <h3 className="mono text-[11px] uppercase tracking-[0.22em] text-accent">Featured</h3>
        <p className="mt-2 text-zinc-400">Six patterns I reach for again and again.</p>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((f) => {
          const snippet = snippetById.get(f.id)
          if (!snippet) return null
          return (
            <motion.div key={f.id} variants={sectionItem}>
              <SnippetCard
                snippet={{ ...snippet, title: f.headline }}
                blurb={f.blurb}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
