export default function Skills() {
  const skills = [
    "IT Support",
    "Help Desk",
    "Active Directory",
    "Windows",
    "Networking",
    "React",
    "Node.js",
    "TypeScript",
    "Supabase"
  ]

  return (
    <section>
      <h2>Habilidades</h2>

      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}