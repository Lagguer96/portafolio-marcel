import { useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Marcel Medina</h1>
          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
            IT Support | Help Desk | IT Operations
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-full border border-slate-300 bg-white p-2.5 text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          aria-label="Cambiar tema"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  )
}
