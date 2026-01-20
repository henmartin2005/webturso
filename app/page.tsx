import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <p className="text-xs font-semibold tracking-widest text-indigo-500">
            AGENCIA CREATIVA
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Impulsamos tu presencia digital con una web sólida, moderna y fácil de
            administrar.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600">
            Diseñamos experiencias digitales que conectan con tus clientes desde
            el primer clic. Combinamos estrategia, diseño y tecnología para
            generar resultados reales.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
              Solicitar propuesta
            </button>

            <button className="rounded-full border border-slate-200 px-5 py-2 text-slate-800 hover:bg-slate-50">
              Hablar con el equipo
            </button>

            {/* 🔐 ACCESO ADMINISTRADOR */}
            <Link
              href="/notes"
              className="rounded-full border border-slate-200 px-5 py-2 text-slate-800 hover:bg-slate-50"
            >
              Acceso administrador
            </Link>
          </div>

          {/* FEATURES */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">
                Estrategia clara
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Definimos objetivos medibles y un plan de acción alineado a tu
                negocio.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">
                Diseño premium
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Interfaces modernas, rápidas y adaptadas a cualquier
                dispositivo.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">
                Resultados medibles
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Analítica y optimización continua para mejorar conversiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Servicios integrales
            </h2>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Branding y narrativa de marca</li>
              <li>• Diseño web optimizado para conversión</li>
              <li>• Integraciones y automatización de procesos</li>
              <li>• Desarrollo con Next.js y bases de datos modernas</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-indigo-600 p-8 text-white shadow-sm">
            <p className="text-xs font-semibold tracking-widest text-indigo-200">
              DISPONIBLE PARA NUEVOS PROYECTOS
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              ¿Listo para destacar?
            </h2>

            <p className="mt-3 text-indigo-100">
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta a tu
              medida en menos de 48 horas.
            </p>

            <button className="mt-6 rounded-full bg-white px-5 py-2 font-medium text-indigo-600 hover:bg-indigo-50">
              Solicitar contacto
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} Agencia Creativa — Next.js + Turso
          </p>
        </div>
      </footer>
    </main>
  );
}

