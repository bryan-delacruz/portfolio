import { Lock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Tags } from "@/components/ui/tags";
import { TextLink } from "@/components/ui/text-link";
import { Thumbnail } from "@/components/ui/thumbnail";
import { featuredProjects, moreProjects, type Project } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";

export function Projects({ lang, index }: { lang: Locale; index: string }) {
  const t = ui[lang];
  return (
    <Section id="projects" index={index} title={t.projectsTitle} lead={t.projectsLead}>
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
            className="group flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex min-w-0 items-center gap-4">
              <Thumbnail
                src={project.image}
                alt={`${t.previewAlt} ${project.name}`}
                href={project.demo}
                sizes="112px"
                className="w-24 shrink-0 rounded-md sm:w-28"
              />
              <div className="min-w-0">
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-muted-foreground">{project.description[lang]}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:w-60 sm:items-end">
              <Tags items={project.stack} className="sm:justify-end" />
              <div className="flex items-center gap-4 font-mono text-xs">
                {project.demo && <TextLink href={project.demo}>{t.demo}</TextLink>}
                {project.repo && <TextLink href={project.repo}>{t.code}</TextLink>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project, lang }: { project: Project; lang: Locale }) {
  const t = ui[lang];
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card/40 transition-colors hover:border-brand/50">
      <div className="border-b border-border bg-secondary/40 px-4 pt-4">
        {/* Marco de ventana de navegador alrededor de la captura del demo */}
        <div className="overflow-hidden rounded-t-md border border-b-0 border-border bg-background shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2" aria-hidden>
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
            {project.demo && (
              <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">
                {new URL(project.demo).host}
              </span>
            )}
          </div>
          <Thumbnail
            src={project.image}
            alt={`${t.previewAlt} ${project.name}`}
            href={project.demo}
            sizes="(min-width: 768px) 480px, 100vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
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
      </div>
    </article>
  );
}
