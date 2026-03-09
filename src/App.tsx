import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div style={{fontFamily:"Arial", maxWidth:900, margin:"auto"}}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}