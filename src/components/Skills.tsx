import { Server, Monitor, Database, Code } from "lucide-react"

export default function Skills() {

  const skills = [
    {name:"IT Support",icon:<Monitor/>},
    {name:"Active Directory",icon:<Server/>},
    {name:"Networking",icon:<Server/>},
    {name:"React",icon:<Code/>},
    {name:"Node.js",icon:<Code/>},
    {name:"Supabase",icon:<Database/>}
  ]

  return (

    <section className="py-16">

      <h2 className="text-2xl font-bold mb-8">
        Habilidades
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {skills.map(skill => (

          <div
            key={skill.name}
            className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            {skill.icon}
            {skill.name}
          </div>

        ))}

      </div>

    </section>
  )
}