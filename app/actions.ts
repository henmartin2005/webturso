"use server";

import { addContact } from "@/lib/contacts-db";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const submitContact = async (
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Completa todos los campos antes de enviar.",
    };
  }

  await addContact({ name, email, message });

  return {
    status: "success",
    message: "¡Gracias! Tu mensaje fue enviado correctamente.",
  };
};
