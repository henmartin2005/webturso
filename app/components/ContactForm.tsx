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
            className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-black focus:outline-none"
            placeholder="Tu nombre"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
          Correo
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-black focus:outline-none"
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
          className="resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-black focus:outline-none"
          placeholder="Cuéntanos en qué te podemos ayudar."
        />
      </label>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
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
