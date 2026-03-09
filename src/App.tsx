import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const experienceItems = [
  {
    date: "24/04/2023 - 22/10/2023",
    role: "(Consultor Independiente) • Mesa de ayuda y soporte TI • CAP Minería"
  },
  {
    date: "15/01/2023 - 15/04/2024",
    role: "(Prácticas Profesionales) • Mesa de ayuda y soporte TI • CAP Minería"
  },
  {
    date: "23/10/2023 - 31/11/2024",
    role: "Soporte • Mesa de ayuda y soporte TI • CAP Minería"
  }
]

const supportHighlights = [
  "Implementación de medidas de seguridad informática.",
  "Realización de copias de seguridad y recuperación.",
  "Documentación técnica y elaboración de informes IT.",
  "Creación de documentación para usuario final.",
  "Soporte remoto y presencial a usuarios.",
  "Mantenimiento preventivo de componentes y herramientas.",
  "Monitorización de sistemas y continuidad operacional.",
  "Cumplimiento de SLA y gestión de tickets.",
  "Contribución en políticas internas de TI y soporte."
]

export default function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const shouldUseDark =
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle("dark", shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme)
    localStorage.setItem("theme", nextTheme ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-[#dfe4e1] bg-[radial-gradient(circle_at_top,_rgba(111,143,130,0.28),_transparent_40%)] p-4 text-[#0f172a] transition-colors duration-300 dark:bg-[#0b1220] dark:bg-[radial-gradient(circle_at_top,_rgba(111,143,130,0.18),_transparent_42%)] dark:text-slate-100 sm:p-6 md:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl items-center justify-center sm:min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-5xl rounded-lg border border-[#58776c]/40 bg-[#f8f8f5] p-3 shadow-[0_22px_60px_-24px_rgba(12,25,22,0.65),0_5px_18px_-8px_rgba(12,25,22,0.35)] dark:border-[#8cb3a3]/50 dark:bg-slate-900/95">
          <div className="rounded-sm border border-[#6f8f82]/45 bg-[#fcfcfa] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-[#8cb3a3]/40 dark:bg-slate-900/90 md:p-10">
          <header className="mb-8 border-b-4 border-[#6f8f82] pb-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl tracking-wide md:text-6xl">
                MARCEL <span className="text-[#6f8f82] dark:text-[#9bc4b3]">MEDINA</span>
              </h1>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">Soporte TI</p>
            </div>

            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-md border border-[#6f8f82] bg-white px-3 py-2 text-sm font-semibold text-[#2f4f43] transition hover:bg-[#e7eeea] dark:border-[#9bc4b3] dark:bg-slate-800 dark:text-[#c4e0d5] dark:hover:bg-slate-700"
              aria-label="Cambiar modo"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              {isDark ? "Modo diurno" : "Modo nocturno"}
            </button>
          </div>
        </header>

          <main className="grid gap-0 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-6 border-b-2 border-[#6f8f82] pb-6 md:border-b-0 md:border-r-2 md:pr-6">
            <section>
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Contacto</h2>
              <p>Santiago Centro, Santiago, Chile</p>
              <p>(+56) 9 72492884</p>
              <p>Medina17796@gmail.com</p>
            </section>

            <section>
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Educación</h2>
              <p>Universidad de las Américas.</p>
              <p>Ingeniero en ejecución en Informática.</p>
            </section>

            <section>
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Habilidades clave</h2>
              <ul className="list-disc pl-5">
                <li>Liderazgo.</li>
                <li>Comunicación asertiva.</li>
                <li>Gestión de activos.</li>
                <li>Resolución de problemas.</li>
                <li>Investigación y análisis.</li>
                <li>Elaboración de informes.</li>
                <li>Trabajo en equipo.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Idiomas</h2>
              <ul className="list-disc pl-5">
                <li>Español (Nativo).</li>
                <li>Inglés B2.</li>
              </ul>
            </section>
          </aside>

          <section className="space-y-6 pt-6 md:pl-6 md:pt-0">
            <article className="border-b-2 border-[#6f8f82] pb-4">
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Objetivo</h2>
              <p>
                Formarme profesionalmente como el desarrollador y técnico capaz que puedo ser, y seré,
                apoyando, creciendo y enseñando durante el proceso, siendo el mismo que se da el tiempo de
                poder ayudar a conocer y resolver.
              </p>
            </article>

            <article className="border-b-2 border-[#6f8f82] pb-4">
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Experiencia</h2>
              <div className="space-y-3">
                {experienceItems.map((item) => (
                  <div key={`${item.date}-${item.role}`}>
                    <p className="font-semibold italic text-[#395347] dark:text-[#9bc4b3]">{item.date}</p>
                    <p>{item.role}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-b-2 border-[#6f8f82] pb-4">
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Comunicación</h2>
              <ul className="list-disc space-y-1 pl-5">
                {supportHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Referencias</h2>
              <p>
                Último jefe en el área: <span className="text-blue-700 dark:text-blue-400">diegoyb@gmail.com</span>
              </p>
            </article>
          </section>
          </main>
          </div>
        </div>
      </div>
    </div>
  )
}
