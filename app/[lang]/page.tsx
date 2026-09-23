import { notFound } from "next/navigation";
import { ArrowUpRight, Lock, Mail, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { isLocale, ui, type Locale } from "@/lib/i18n";
import {
  experience,
  featuredProjects,
  moreProjects,
  profile,
  skills,
  type Project,
} from "@/lib/content";

export const dynamicParams = false;

function formatMonth(value: string, lang: Locale) {
  const [year, month] = value.split("-").map(Number);
  const label = new Date(Date.UTC(year, month - 1)).toLocaleDateString(
    lang === "es" ? "es-PE" : "en-US",
    { month: "short", year: "numeric", timeZone: "UTC" },
  );
  return label.replace(".", "");
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = ui[lang];

  return (
    <>
      <SiteHeader lang={lang} t={t} />

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            {t.available}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-brand sm:text-base">{t.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.intro}
          </p>

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

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
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

        {/* Experience */}
        <Section id="experience" index="01" title={t.experienceTitle} lead={t.experienceLead}>
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
                  {job.summary && (
                    <p className="mt-2 text-muted-foreground text-pretty">{job.summary[lang]}</p>
                  )}
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
          <p className="mt-12 font-mono text-xs text-muted-foreground">{profile.education[lang]}</p>
        </Section>

        {/* Projects */}
        <Section id="projects" index="02" title={t.projectsTitle} lead={t.projectsLead}>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} lang={lang} />
            ))}
          </div>

          <h3 className="mt-16 font-mono text-sm text-muted-foreground">{t.moreProjectsTitle}</h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {moreProjects.map((project) => (
              <li
                key={project.name}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="min-w-0">
                  <p className="font-medium">{project.name}</p>
                  <p className="text-sm text-muted-foreground">{project.description[lang]}</p>
                </div>
                <div className="flex shrink-0 items-center gap-4 font-mono text-xs">
                  <span className="text-muted-foreground">{project.stack.join(" · ")}</span>
                  {project.demo && <TextLink href={project.demo}>{t.demo}</TextLink>}
                  {project.repo && <TextLink href={project.repo}>{t.code}</TextLink>}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section id="skills" index="03" title={t.skillsTitle}>
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group.en}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {group.group[lang]}
                </h3>
                <Tags items={group.items} className="mt-3" />
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" index="04" title={t.contactTitle} lead={t.contactLead}>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {profile.location}
          </p>
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl border-t border-border px-4 py-8 font-mono text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {profile.name} · {t.footer}
      </footer>
    </>
  );
}

function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20">
      <div className="mb-10">
        <p className="font-mono text-xs text-brand">{index}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {lead && <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">{lead}</p>}
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project, lang }: { project: Project; lang: Locale }) {
  const t = ui[lang];
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card/40 p-6 transition-colors hover:border-brand/50">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium">{project.name}</h3>
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-brand">{project.tagline[lang]}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
        {project.description[lang]}
      </p>
      <Tags items={project.stack} className="mt-5" />
      <div className="mt-6 flex items-center gap-5 font-mono text-xs">
        {project.demo && <TextLink href={project.demo}>{t.demo}</TextLink>}
        {project.repo ? (
          <TextLink href={project.repo}>{t.code}</TextLink>
        ) : (
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Lock className="size-3" />
            {t.privateCode}
          </span>
        )}
      </div>
    </article>
  );
}

function Tags({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
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

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
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
