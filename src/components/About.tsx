import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
    >
      <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">Sobre mí</h2>

      <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
        Técnico de Soporte TI con experiencia en mesa de ayuda, gestión de incidentes y mantenimiento de sistemas.
        También desarrollo soluciones web utilizando React, Node.js y bases de datos modernas.
      </p>
    </motion.section>
  )
}
