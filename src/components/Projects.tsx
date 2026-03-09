import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce React",
      description: "Tienda online con carrito de compras y base de datos."
    },
    {
      title: "Sistema de devoluciones Excel",
      description: "Formulario automatizado con generación de PDF."
    },
    {
      title: "Backend Supabase",
      description: "API y base de datos PostgreSQL con autenticación."
    }
  ]

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Proyectos</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            key={project.title}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
