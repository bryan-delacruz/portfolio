import { ArrowUpRight } from "lucide-react";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 text-foreground underline-offset-4 hover:text-brand hover:underline"
    >
      {children}
      <ArrowUpRight className="size-3" />
    </a>
  );
}
