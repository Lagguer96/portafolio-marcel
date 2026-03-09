import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const skills = ["IT Support", "Active Directory", "Networking", "React", "Node.js", "Supabase"]

const experiences = [
  {
    company: "CAP Minería",
    role: "Soporte TI – Mesa de ayuda",
    period: "2023 – 2024",
    items: [
      "Soporte técnico remoto y presencial a usuarios.",
      "Resolución de más del 90% de incidentes en primer nivel.",
      "Gestión de documentación técnica y reportes IT.",
      "Implementación de políticas internas de TI.",
      "Cumplimiento de SLA en la resolución de tickets."
    ]
  },
  {
    company: "DBTEK",
    role: "Jefe de Bodega",
    period: "2024 – Actualidad",
    items: [
      "Gestión de proveedores y coordinación de abastecimiento.",
      "Control de inventario y organización de bodega.",
      "Análisis de mercado para reposición de productos.",
      "Supervisión de recepción y distribución de mercadería.",
      "Liderazgo del equipo de operaciones de bodega.",
      "Optimización de procesos internos mediante herramientas tecnológicas y análisis de datos."
    ]
  }
]

const projects = [
  "E-commerce React: Tienda online con carrito de compras y base de datos.",
  "Sistema de devoluciones Excel: Formulario automatizado con generación de PDF.",
  "Backend Supabase: API y base de datos PostgreSQL con autenticación."
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
        <article className="w-full max-w-5xl rounded-lg border border-[#58776c]/40 bg-[#f8f8f5] p-3 shadow-[0_22px_60px_-24px_rgba(12,25,22,0.65),0_5px_18px_-8px_rgba(12,25,22,0.35)] dark:border-[#8cb3a3]/50 dark:bg-slate-900/95">
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
                  <p>
                    <span className="font-semibold">Email:</span> medina17796@gmail.com
                  </p>
                  <p>
                    <span className="font-semibold">Teléfono:</span> +56 9 7249 2884
                  </p>
                  <p>
                    <span className="font-semibold">LinkedIn:</span> linkedin.com
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Sobre mí</h2>
                  <p>
                    Técnico de Soporte TI con experiencia en mesa de ayuda, gestión de incidentes y
                    mantenimiento de sistemas. También desarrollo soluciones web utilizando React, Node.js y
                    bases de datos modernas.
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Habilidades</h2>
                  <ul className="list-disc space-y-1 pl-5">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>
              </aside>

              <section className="space-y-6 pt-6 md:pl-6 md:pt-0">
                <article className="border-b-2 border-[#6f8f82] pb-4">
                  <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">
                    Experiencia Profesional
                  </h2>
                  <div className="space-y-4">
                    {experiences.map((exp) => (
                      <div key={exp.company + exp.period}>
                        <p className="font-semibold">{exp.company}</p>
                        <p className="italic text-[#395347] dark:text-[#9bc4b3]">{exp.role}</p>
                        <p className="mb-1 text-sm">{exp.period}</p>
                        <ul className="list-disc space-y-1 pl-5">
                          {exp.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="border-b-2 border-[#6f8f82] pb-4">
                  <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Proyectos</h2>
                  <ul className="list-disc space-y-1 pl-5">
                    {projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </article>

                <article>
                  <h2 className="mb-2 text-3xl font-semibold text-[#4c6f62] dark:text-[#9bc4b3]">Resumen</h2>
                  <p>
                    Perfil orientado a soporte técnico, operaciones TI y mejora continua, con foco en atención a
                    usuarios, documentación y soluciones prácticas tanto en terreno como en desarrollo web.
                  </p>
                </article>
              </section>
            </main>
          </div>
        </article>
      </div>
    </div>
  )
}
