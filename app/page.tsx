import Link from "next/link";
import { ContactForm } from "@/app/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14">
        <header className="flex flex-col gap-8 rounded-3xl bg-white px-8 py-12 shadow-sm">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
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
            <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-zinc-800">
              Solicitar propuesta
            </button>
            <Link
              href="#contacto"
              className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400"
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
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
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
          <div className="flex flex-col justify-center gap-4 rounded-3xl bg-white px-8 py-10 shadow-sm">
            <h2 className="text-2xl font-semibold">Servicios integrales</h2>
            <p className="text-sm text-zinc-600">
              Desde la planeación hasta el lanzamiento, te acompañamos con un equipo
              multidisciplinario que entiende tu mercado.
            </p>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Branding y narrativa de marca.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Diseño web optimizado para conversión.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Integraciones y automatización de procesos.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white px-8 py-10 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Disponible para nuevos proyectos
            </p>
            <h3 className="text-2xl font-semibold">¿Listo para destacar?</h3>
            <p className="text-sm text-zinc-600">
              Cuéntanos sobre tu proyecto y nuestro equipo preparará una propuesta a tu
              medida en menos de 48 horas.
            </p>
            <div className="rounded-2xl bg-zinc-900 px-6 py-6 text-sm text-white">
              <p className="font-semibold">Respuesta rápida</p>
              <p className="mt-2 text-zinc-200">
                Recibirás una actualización por correo apenas revisemos tu solicitud.
              </p>
            </div>
            <Link
              href="/admin"
              className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-500"
            >
              Acceso administrador →
            </Link>
          </div>
        </section>

        <section
          id="contacto"
          className="grid gap-8 rounded-3xl bg-white px-8 py-12 shadow-sm md:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Contacto
            </p>
            <h2 className="text-3xl font-semibold">Hablemos de tu próximo proyecto</h2>
            <p className="text-sm text-zinc-600">
              Completa el formulario y guardaremos tu solicitud en nuestra base de datos
              para darle seguimiento inmediato.
            </p>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-600">
              <p className="font-semibold text-zinc-900">Horarios</p>
              <p className="mt-2">Lunes a viernes · 9:00 a 18:00</p>
              <p>contacto@tuagencia.com</p>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
