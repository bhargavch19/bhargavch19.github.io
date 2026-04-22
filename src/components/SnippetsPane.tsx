import { Section } from './Section'
import { FeaturedSnippets } from './FeaturedSnippets'
import { SnippetGallery } from './SnippetGallery'
import { snippets } from '../data/snippets.generated'

export function SnippetsPane() {
  return (
    <Section
      eyebrow={`${snippets.length} snippets`}
      title="UI-Code-Snippets gallery."
      subtitle="Extracted at build time from the original repo. Start with six featured patterns, then browse the whole library."
    >
      <FeaturedSnippets />
      <div className="my-12 h-px w-full bg-[var(--color-border)]" />
      <SnippetGallery />
    </Section>
  )
}
