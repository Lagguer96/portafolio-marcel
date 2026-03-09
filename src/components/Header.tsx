import { useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function Header() {

  const [dark,setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (

    <header className="border-b border-gray-200 dark:border-gray-700">

      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Marcel Medina
          </h1>

          <p className="text-gray-500">
            IT Support | Help Desk | IT Operations
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
        >
          {dark ? <Sun size={18}/> : <Moon size={18}/>}
        </button>

      </div>

    </header>

  )
}