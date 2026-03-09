import { motion } from "framer-motion"

export default function Projects() {

  const projects = [

    {
      title:"E-commerce React",
      description:"Tienda online con carrito de compras y base de datos."
    },

    {
      title:"Sistema de devoluciones Excel",
      description:"Formulario automatizado con generación de PDF."
    },

    {
      title:"Backend Supabase",
      description:"API y base de datos PostgreSQL con autenticación."
    }

  ]

  return (

    <section className="py-16">

      <h2 className="text-2xl font-bold mb-8">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map(project => (

          <motion.div
            whileHover={{scale:1.05}}
            key={project.title}
            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800"
          >

            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            <p className="text-gray-500 mt-2">
              {project.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>

  )
}