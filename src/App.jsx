import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Technologies from "./Components/Technologies"
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-teal-600">
      {/* Full-screen dark background with gradient effect */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-950 z-[-1]">
        {/* Gradient overlay on top of the solid dark background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main container for the content */}
      <div className="relative container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
