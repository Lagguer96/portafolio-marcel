import { Server, Monitor, Database, Code } from "lucide-react"

export default function Skills() {
  const skills = [
    { name: "IT Support", icon: <Monitor /> },
    { name: "Active Directory", icon: <Server /> },
    { name: "Networking", icon: <Server /> },
    { name: "React", icon: <Code /> },
    { name: "Node.js", icon: <Code /> },
    { name: "Supabase", icon: <Database /> }
  ]

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Habilidades</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-600"
          >
            <span className="text-sky-600 transition group-hover:scale-105 dark:text-sky-400">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
