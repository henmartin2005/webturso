import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14">
        <header className="flex flex-col gap-8 rounded-3xl bg-white/80 px-8 py-12 shadow-lg shadow-indigo-100/50 ring-1 ring-white/60 backdrop-blur">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-500">
              Agencia creativa
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight">
              Impulsamos tu presencia digital con una web sólida, moderna y fácil de
              administrar.
            </h1>
            <p className="max-w-2xl text-base text-zinc-600">
              Diseñamos experiencias digitales que conectan con tus clientes desde el
              primer clic. Nuestro equipo combina estrategia, diseño y tecnología para
              contar tu historia y generar confianza.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/60 transition hover:brightness-110">
              Solicitar propuesta
            </button>
            <Link
              href="#contacto"
              className="rounded-full border border-indigo-200 bg-white/60 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-white"
            >
              Hablar con el equipo
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Estrategia clara",
                description:
                  "Definimos objetivos medibles y un plan de acción alineado con tu negocio.",
              },
              {
                title: "Diseño premium",
                description:
                  "Creamos una identidad visual coherente que se adapta a cualquier dispositivo.",
              },
              {
                title: "Resultados medibles",
                description:
                  "Implementamos herramientas de seguimiento para optimizar cada campaña.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/70 bg-gradient-to-br from-white via-indigo-50 to-pink-50 p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-white/80 px-8 py-10 shadow-lg shadow-indigo-100/50 ring-1 ring-white/70 backdrop-blur">
            <h2 className="text-2xl font-semibold">Servicios integrales</h2>
            <p className="text-sm text-zinc-600">
              Desde la planeación hasta el lanzamiento, te acompañamos con un equipo
              multidisciplinario que entiende tu mercado.
            </p>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Branding y narrativa de marca.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-500" />
                Diseño web optimizado para conversión.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Integraciones y automatización de procesos.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-gradient-to-br from-white via-amber-50 to-pink-50 px-8 py-10 shadow-lg shadow-pink-100/60">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
              Disponible para nuevos proyectos
            </p>
            <h3 className="text-2xl font-semibold">¿Listo para destacar?</h3>
            <p className="text-sm text-zinc-600">
              Cuéntanos sobre tu proyecto y nuestro equipo preparará una propuesta a tu
              medida en menos de 48 horas.
            </p>
            <div className="rounded-2xl bg-gradient-to-r from-zinc-900 via-indigo-900 to-purple-900 px-6 py-6 text-sm text-white">
              <p className="font-semibold">Respuesta rápida</p>
              <p className="mt-2 text-zinc-200">
                Recibirás una actualización por correo apenas revisemos tu solicitud.
              </p>
            </div>
            <Link
              href="/admin"
              className="text-sm font-semibold text-indigo-900 underline decoration-indigo-300 underline-offset-4 transition hover:decoration-indigo-500"
            >
              Acceso administrador →
            </Link>
          </div>
        </section>

        <section
          id="contacto"
          className="grid gap-8 rounded-3xl bg-white/85 px-8 py-12 shadow-lg shadow-indigo-100/40 ring-1 ring-white/70 backdrop-blur md:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Contacto
            </p>
            <h2 className="text-3xl font-semibold">Hablemos de tu próximo proyecto</h2>
            <p className="text-sm text-zinc-600">
              Completa el formulario y guardaremos tu solicitud en nuestra base de datos
              para darle seguimiento inmediato.
            </p>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 text-sm text-indigo-700">
              <p className="font-semibold text-zinc-900">Horarios</p>
              <p className="mt-2">Lunes a viernes · 9:00 a 18:00</p>
              <p>contacto@tuagencia.com</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-6">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
