import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(6,182,212,0.12),_transparent_40%)] dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.25),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(14,116,144,0.2),_transparent_42%)]" />

      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-12 md:px-10 md:py-14">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
