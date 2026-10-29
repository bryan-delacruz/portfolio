import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";

export function Hero({ lang }: { lang: Locale }) {
  const t = ui[lang];
  return (
    <section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
      <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-brand" />
        </span>
        {t.available}
      </p>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{profile.name}</h1>
      <p className="mt-4 text-2xl font-medium tracking-tight text-balance sm:text-4xl">
        {t.headline.lead} <span className="text-muted-foreground">{t.headline.tail}</span>
      </p>
      <p className="mt-5 font-mono text-sm text-brand sm:text-base">
        {t.role.split(" · ").map((part, i) => (
          <span key={part} className="whitespace-nowrap">
            {i > 0 && " · "}
            {part}
          </span>
        ))}
      </p>
      <p className="mt-2 font-mono text-xs text-muted-foreground sm:text-sm">
        <span className="inline-block">{t.stackLine.base}</span>{" "}
        <span className="inline-block text-foreground">{t.stackLine.ai}</span>
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{t.intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex h-10 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {t.ctaProjects}
        </a>
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-accent"
        >
          {t.ctaContact}
        </a>
        <div className="ml-1 flex items-center gap-1">
          <SocialLink href={profile.github} label="GitHub">
            <GithubIcon className="size-4" />
          </SocialLink>
          <SocialLink href={profile.linkedin} label="LinkedIn">
            <LinkedinIcon className="size-4" />
          </SocialLink>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
        {t.stats.map((stat) => (
          <div key={stat.label} className="bg-background p-5">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-3xl font-semibold tracking-tight">{stat.value}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {children}
    </a>
  );
}
