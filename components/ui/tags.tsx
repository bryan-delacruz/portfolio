import { TechLogo } from "@/components/tech-logo";
import type { TechName } from "@/lib/tech";
import { cn } from "@/lib/utils";

export function Tags({ items, className }: { items: TechName[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-1.5 rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
        >
          <TechLogo name={item} className="size-3" />
          {item}
        </li>
      ))}
    </ul>
  );
}
