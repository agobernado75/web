import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const SECTIONS = [
  "home",
  "features",
  "about",
  "projects",
  "pricing",
  "process",
  "testimonials",
  "contact",
]

function App() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i])
        if (section && scrollPosition >= section.offsetTop - 100) {
          setActiveSection(SECTIONS[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    const raf = requestAnimationFrame(handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Features />
        <About />
        <Projects />
        <Pricing />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
