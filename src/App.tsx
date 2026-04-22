import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TabShell } from './components/TabShell'

export default function App() {
  return (
    <>
      <Nav />
      <main className="noise-overlay min-h-screen">
        <Hero />
        <TabShell />
      </main>
    </>
  )
}
