import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { profile } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";

export function Education({ lang, index }: { lang: Locale; index: string }) {
  const t = ui[lang];
  const { education } = profile;
  return (
    <Section id="education" index={index} title={t.educationTitle}>
      <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-8">
        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground sm:pt-1">{education.years}</p>
        <div>
          <h3 className="text-lg font-medium text-pretty">{education.degree[lang]}</h3>
          <p className="mt-1 text-muted-foreground">
            {education.school} · {education.location[lang]}
          </p>

          <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {education.ranking.stats.map((stat) => (
              <div key={stat.value} className="bg-background p-4 sm:p-5">
                <dt className="sr-only">{stat.label[lang]}</dt>
                <dd>
                  <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</span>
                  <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">{stat.label[lang]}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 font-mono text-xs">
            <TextLink href={education.ranking.source}>{t.rankingCaption}</TextLink>
          </p>

          <p className="mt-8 font-mono text-xs leading-relaxed text-muted-foreground">{profile.certifications[lang]}</p>
        </div>
      </div>
    </Section>
  );
}
