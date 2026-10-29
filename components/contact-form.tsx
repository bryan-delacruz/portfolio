"use client";

import { useActionState, useEffect, useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { getFormToken, sendContact, type ContactState } from "@/app/[lang]/actions";
import type { UI } from "@/lib/i18n";

const field =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/30";

export function ContactForm({ t }: { t: UI["contactForm"] }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });
  // Token firmado por el servidor al montar: con él mide el tiempo de llenado y descarta bots.
  const [token, setToken] = useState("");

  useEffect(() => {
    getFormToken().then(setToken, () => {});
  }, []);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-lg border border-brand/40 bg-brand/5 p-5" role="status">
        <Check className="mt-0.5 size-5 shrink-0 text-brand" />
        <div>
          <p className="font-medium">{t.successTitle}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">{t.name}</span>
        <input name="name" defaultValue={state.values?.name} required maxLength={100} autoComplete="name" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">{t.email}</span>
        <input name="email" type="email" defaultValue={state.values?.email} required maxLength={200} autoComplete="email" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm sm:col-span-2">
        <span className="font-medium">{t.message}</span>
        <textarea
          name="message"
          defaultValue={state.values?.message}
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder={t.messagePlaceholder}
          className={`${field} resize-y`}
        />
      </label>

      {/* Honeypot: invisible para personas, los bots lo llenan. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <input type="hidden" name="token" value={token} />

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          {pending ? t.sending : t.submit}
        </button>
        {state.status === "error" && state.error && (
          <p className="text-sm text-destructive" role="alert">
            {t.errors[state.error]}
          </p>
        )}
      </div>
    </form>
  );
}
