import { motion } from "framer-motion"

export default function About(){

return(

<motion.section
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="py-16"
>

<h2 className="text-2xl font-bold mb-6">
Sobre mí
</h2>

<p className="text-gray-600 dark:text-gray-300">
Técnico de Soporte TI con experiencia en mesa de ayuda,
gestión de incidentes y mantenimiento de sistemas.
También desarrollo soluciones web utilizando React,
Node.js y bases de datos modernas.
</p>

</motion.section>

)
}