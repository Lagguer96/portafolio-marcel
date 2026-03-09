import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">

      <Header />

      <main className="max-w-5xl mx-auto px-6">

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />

      </main>

    </div>
  )
}