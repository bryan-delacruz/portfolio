import { Section } from "@/components/ui/section";
import { Tags } from "@/components/ui/tags";
import { experience } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";

function formatMonth(value: string, lang: Locale) {
  const [year, month] = value.split("-").map(Number);
  const label = new Date(Date.UTC(year, month - 1)).toLocaleDateString(lang === "es" ? "es-PE" : "en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  return label.replace(".", "");
}

export function Experience({ lang, index }: { lang: Locale; index: string }) {
  const t = ui[lang];
  return (
    <Section id="experience" index={index} title={t.experienceTitle} lead={t.experienceLead}>
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-8">
            <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground sm:pt-1">
              {formatMonth(job.start, lang)} — {job.end ? formatMonth(job.end, lang) : t.present}
              <span className="mt-1 block normal-case tracking-normal">{job.mode[lang]}</span>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                {job.role[lang]} <span className="text-muted-foreground">· {job.company}</span>
              </h3>
              {job.summary && <p className="mt-2 text-muted-foreground text-pretty">{job.summary[lang]}</p>}
              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((item) => (
                  <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-pretty">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" aria-hidden />
                    {item[lang]}
                  </li>
                ))}
              </ul>
              {job.stack && <Tags items={job.stack} className="mt-4" />}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
