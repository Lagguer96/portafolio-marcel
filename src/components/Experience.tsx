export default function Experience() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <h2 className="mb-7 text-2xl font-semibold tracking-tight md:text-3xl">Experiencia Profesional</h2>

      <div className="space-y-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/70">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">CAP Minería</h3>
              <p className="font-medium text-slate-600 dark:text-slate-300">Soporte TI – Mesa de ayuda</p>
            </div>
            <p className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200">
              2023 – 2024
            </p>
          </div>

          <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
            <li>Soporte técnico remoto y presencial a usuarios.</li>
            <li>Resolución de más del 90% de incidentes en primer nivel.</li>
            <li>Gestión de documentación técnica y reportes IT.</li>
            <li>Implementación de políticas internas de TI.</li>
            <li>Cumplimiento de SLA en la resolución de tickets.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/70">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">DBTEK</h3>
              <p className="font-medium text-slate-600 dark:text-slate-300">Jefe de Bodega</p>
            </div>
            <p className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200">
              2024 – Actualidad
            </p>
          </div>

          <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
            <li>Gestión de proveedores y coordinación de abastecimiento.</li>
            <li>Control de inventario y organización de bodega.</li>
            <li>Análisis de mercado para reposición de productos.</li>
            <li>Supervisión de recepción y distribución de mercadería.</li>
            <li>Liderazgo del equipo de operaciones de bodega.</li>
            <li>Optimización de procesos internos mediante herramientas tecnológicas y análisis de datos.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
