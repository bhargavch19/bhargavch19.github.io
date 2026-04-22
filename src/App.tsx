import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { FeaturedSnippets } from './components/FeaturedSnippets'
import { SnippetGallery } from './components/SnippetGallery'
import { PersonalProjects } from './components/PersonalProjects'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <FeaturedSnippets />
        <SnippetGallery />
        <PersonalProjects />
        <Contact />
      </main>
    </>
  )
}
