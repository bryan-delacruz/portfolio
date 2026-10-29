import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CopyEmailButton } from "@/components/copy-email-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Section } from "@/components/ui/section";
import { profile } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";

const outlineButton =
  "inline-flex h-11 items-center gap-2 rounded-md border border-border px-5 text-sm font-medium transition-colors hover:bg-accent";

export function Contact({ lang, index }: { lang: Locale; index: string }) {
  const t = ui[lang];
  return (
    <Section id="contact" index={index} title={t.contactTitle} lead={t.contactLead}>
      <div className="max-w-2xl">
        <ContactForm t={t.contactForm} />
      </div>

      <h3 className="mt-12 font-mono text-sm text-muted-foreground">{t.contactAlt}</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={outlineButton}>
          <Mail className="size-4" />
          {profile.email}
        </a>
        <CopyEmailButton email={profile.email} label={t.copyEmail} copiedLabel={t.copiedEmail} />
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={outlineButton}>
          <LinkedinIcon className="size-4" />
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={outlineButton}>
          <GithubIcon className="size-4" />
          GitHub
        </a>
      </div>
      <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-4" />
        {profile.location}
      </p>
    </Section>
  );
}
