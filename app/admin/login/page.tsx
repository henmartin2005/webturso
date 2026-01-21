"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "admin123";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
      router.push("/admin");
      return;
    }

    setError("Usuario o contraseña incorrectos.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-pink-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-xl shadow-indigo-100/50">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
            Administrador
          </p>
          <h1 className="text-2xl font-semibold">Acceso seguro</h1>
          <p className="text-sm text-zinc-600">
            Ingresa tus credenciales para revisar los mensajes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Usuario
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="rounded-xl border border-indigo-100 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="admin"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-zinc-700">
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="rounded-xl border border-indigo-100 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="admin123"
              required
            />
          </label>
          {error ? (
            <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/60 transition hover:brightness-110"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-xs text-zinc-500">
          Demo: usuario <span className="font-semibold">admin</span> · contraseña{" "}
          <span className="font-semibold">admin123</span>
        </p>
      </div>
    </div>
  );
}
