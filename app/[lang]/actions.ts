"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { profile } from "@/lib/content";
import { allowSend, checkFormToken, issueFormToken } from "@/lib/contact-guard";

export type ContactState = {
  status: "idle" | "success" | "error";
  /** Clave del mensaje de error en ui[lang].contactForm.errors */
  error?: "invalid" | "unavailable" | "failed" | "rateLimited";
  /** Lo que escribió el visitante, para no perderlo si hay error (React resetea el form tras el action). */
  values?: { name: string; email: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function getFormToken() {
  return issueFormToken();
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Una sola línea: sin saltos que rompan el asunto del correo.
  const name = String(formData.get("name") ?? "").replace(/\s+/g, " ").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const values = { name, email, message };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "error", error: "unavailable", values };

  // Honeypot o envío demasiado rápido: a un bot se le responde "enviado" para que no reintente.
  const token = checkFormToken(String(formData.get("token") ?? ""));
  if (formData.get("company") || token === "too-fast") return { status: "success" };
  if (token === "invalid") return { status: "error", error: "failed", values };

  if (!name || name.length > 100 || !EMAIL_RE.test(email) || email.length > 200 || message.length < 10 || message.length > 5000) {
    return { status: "error", error: "invalid", values };
  }

  const forwardedFor = (await headers()).get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  if (!allowSend(ip)) return { status: "error", error: "rateLimited", values };

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
    return { status: "error", error: "failed", values };
  }
  return { status: "success" };
}
