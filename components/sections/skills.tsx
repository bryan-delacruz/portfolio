import { Section } from "@/components/ui/section";
import { Tags } from "@/components/ui/tags";
import { skills } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";

export function Skills({ lang, index }: { lang: Locale; index: string }) {
  const t = ui[lang];
  return (
    <Section id="skills" index={index} title={t.skillsTitle}>
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group.en}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{group.group[lang]}</h3>
            <Tags items={group.items} className="mt-3" />
          </div>
        ))}
      </div>
    </Section>
  );
}
