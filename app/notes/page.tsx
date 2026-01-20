"use client";

import { useEffect, useState } from "react";

type Note = {
  id: number;
  title: string;
  created_at: string;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadNotes() {
    setError(null);
    const res = await fetch("/api/notes", { cache: "no-store" });
    if (!res.ok) {
      setError("No pude cargar las notas.");
      return;
    }
    const data = (await res.json()) as Note[];
    setNotes(data);
  }

  async function addNote(e: React.FormEvent) {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;

    setLoading(true);
    setError(null);

    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: t }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("No pude guardar la nota.");
      return;
    }

    setTitle("");
    await loadNotes();
  }

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Mi web con Next.js + Turso</h1>
      <p className="mt-2 text-sm text-gray-600">
        CRUD básico: crear y listar notas guardadas en Turso.
      </p>

      <form onSubmit={addNote} className="mt-6 flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe una nota..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          disabled={loading}
          className="border rounded px-4 py-2"
          type="submit"
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <section className="mt-8">
        <h2 className="font-semibold">Notas</h2>
        <ul className="mt-3 space-y-2">
          {notes.map((n) => (
            <li key={n.id} className="border rounded p-3">
              <div className="font-medium">{n.title}</div>
              <div className="text-xs text-gray-500">{n.created_at}</div>
            </li>
          ))}
          {notes.length === 0 && (
            <li className="text-sm text-gray-600">Aún no hay notas.</li>
          )}
        </ul>
      </section>
    </main>
  );
}
