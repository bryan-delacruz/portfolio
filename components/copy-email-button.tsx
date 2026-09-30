"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

// Fallback del mailto: si el visitante no tiene una app de correo configurada, puede copiar la dirección.
export function CopyEmailButton({ email, label, copiedLabel }: { email: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(email).then(() => setCopied(true))}
      className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-accent"
      aria-live="polite"
    >
      {copied ? <Check className="size-4 text-brand" /> : <Copy className="size-4" />}
      {copied ? copiedLabel : label}
    </button>
  );
}
