import { createHmac, timingSafeEqual } from "node:crypto";

/** Un humano tarda más que esto en llenar el formulario; los bots no. */
const MIN_FILL_MS = 3000;
/** Un token más viejo que esto se rechaza (pestaña abierta todo el día, token reusado por un script). */
const MAX_TOKEN_AGE_MS = 24 * 60 * 60 * 1000;

function secret() {
  return process.env.CONTACT_FORM_SECRET ?? process.env.RESEND_API_KEY ?? "";
}

function sign(issuedAt: string) {
  return createHmac("sha256", secret()).update(issuedAt).digest("base64url");
}

/** Token `<emitido>.<firma>` que el formulario pide al montar: el tiempo de llenado lo mide el servidor, no el cliente. */
export function issueFormToken() {
  const issuedAt = String(Date.now());
  return `${issuedAt}.${sign(issuedAt)}`;
}

export type TokenCheck = "ok" | "invalid" | "too-fast";

export function checkFormToken(token: string): TokenCheck {
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature || !secret()) return "invalid";
  const expected = Buffer.from(sign(issuedAt));
  const received = Buffer.from(signature);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return "invalid";
  const age = Date.now() - Number(issuedAt);
  if (age < MIN_FILL_MS) return "too-fast";
  return age > MAX_TOKEN_AGE_MS ? "invalid" : "ok";
}

/*
 * Límite de envíos en memoria: por IP y global, para no agotar la cuota diaria de Resend (plan gratis: 100/día).
 * Es por instancia de la función (Fluid Compute reutiliza instancias, pero puede haber varias):
 * frena el abuso casual. Para un límite estricto, una regla de rate limiting en el Firewall de Vercel sobre el POST.
 */
const PER_IP = { max: 3, windowMs: 10 * 60 * 1000 };
const GLOBAL = { max: 30, windowMs: 24 * 60 * 60 * 1000 };
const hits = new Map<string, number[]>();

function take(key: string, { max, windowMs }: { max: number; windowMs: number }, now: number) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export function allowSend(ip: string) {
  const now = Date.now();
  // Si la IP ya pasó su límite no consume cupo global.
  return take(`ip:${ip}`, PER_IP, now) && take("global", GLOBAL, now);
}
