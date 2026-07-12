import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Achievements from './sections/Achievements'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
