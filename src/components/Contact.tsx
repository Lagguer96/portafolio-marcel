export default function Contact() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">Contacto</h2>

      <div className="space-y-2 text-slate-700 dark:text-slate-300">
        <p>
          <span className="font-medium text-slate-900 dark:text-slate-100">Email:</span> medina17796@gmail.com
        </p>
        <p>
          <span className="font-medium text-slate-900 dark:text-slate-100">Teléfono:</span> +56 9 7249 2884
        </p>
      </div>

      <a
        href="https://linkedin.com"
        className="mt-5 inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
      >
        LinkedIn
      </a>
    </section>
  )
}
