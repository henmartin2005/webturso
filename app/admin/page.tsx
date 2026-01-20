import { getContacts } from "@/lib/contacts-db";

export const metadata = {
  title: "Administrador | Contactos",
};

export default async function AdminPage() {
  const contacts = await getContacts();

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Panel administrador
          </p>
          <h1 className="text-3xl font-semibold">Solicitudes de contacto</h1>
          <p className="max-w-2xl text-base text-zinc-600">
            Aquí puedes revisar los mensajes enviados desde el formulario.
          </p>
        </header>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          {contacts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 px-6 py-10 text-center text-sm text-zinc-500">
              Aún no hay mensajes. Cuando alguien contacte, aparecerá aquí.
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-zinc-100 text-xs uppercase tracking-wide text-zinc-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Nombre</th>
                    <th className="px-4 py-3 font-semibold">Correo</th>
                    <th className="px-4 py-3 font-semibold">Mensaje</th>
                    <th className="px-4 py-3 font-semibold">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-t border-zinc-200 align-top"
                    >
                      <td className="px-4 py-4 font-medium text-zinc-900">
                        {contact.name}
                      </td>
                      <td className="px-4 py-4 text-zinc-600">
                        {contact.email}
                      </td>
                      <td className="px-4 py-4 text-zinc-600">
                        {contact.message}
                      </td>
                      <td className="px-4 py-4 text-zinc-500">
                        {new Date(contact.createdAt).toLocaleString("es-ES")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
