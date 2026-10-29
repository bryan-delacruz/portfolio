"use server";

import { Resend } from "resend";
import { profile } from "@/lib/content";

export type ContactState = {
  status: "idle" | "success" | "error";
  /** Clave del mensaje de error en ui[lang].contactForm.errors */
  error?: "invalid" | "unavailable" | "failed";
  /** Lo que escribió el visitante, para no perderlo si hay error (React resetea el form tras el action). */
  values?: { name: string; email: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Un humano tarda más que esto en llenar el formulario; los bots no. */
const MIN_FILL_MS = 3000;

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const startedAt = Number(formData.get("startedAt"));

  // Honeypot y tiempo mínimo: a un bot se le responde "enviado" para que no reintente.
  if (formData.get("company") || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "success" };
  }

  if (!name || name.length > 100 || !EMAIL_RE.test(email) || email.length > 200 || message.length < 10 || message.length > 5000) {
    return { status: "error", error: "invalid", values: { name, email, message } };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "error", error: "unavailable", values: { name, email, message } };

  // Sin dominio verificado en Resend solo se puede enviar desde onboarding@resend.dev y hacia el correo de la cuenta.
  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? profile.email,
    replyTo: email,
    subject: `Portfolio · ${name}`,
    text: `${message}\n\n— ${name} <${email}>`,
  });

  if (error) {
    console.error("Resend:", error);
    return { status: "error", error: "failed", values: { name, email, message } };
  }
  return { status: "success" };
}
