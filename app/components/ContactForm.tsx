"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";

const initialState = {
  status: "idle",
  message: "",
} as const;

export const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
          Nombre
          <input
            name="name"
            type="text"
            required
            className="rounded-xl border border-indigo-100 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Tu nombre"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
          Correo
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-indigo-100 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="tu@email.com"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
        Mensaje
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-indigo-100 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          placeholder="Cuéntanos en qué te podemos ayudar."
        />
      </label>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/60 transition hover:brightness-110 disabled:cursor-not-allowed disabled:from-zinc-400 disabled:to-zinc-400"
        >
          {isPending ? "Enviando..." : "Enviar mensaje"}
        </button>
        {state.status !== "idle" ? (
          <p
            className={`text-sm font-medium ${
              state.status === "success" ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
};
