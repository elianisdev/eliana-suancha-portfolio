import { ButtonLink } from "@/components/atoms/ButtonLink";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { profileLinks, sectionIds } from "@/content/profile";
import type { Dictionary } from "@/types/dictionary";

type ContactProps = {
  content: Dictionary["contact"];
};

export function Contact({ content }: ContactProps) {
  return (
    <section
      id={sectionIds.contact}
      className="border-t border-line bg-radial-[at_50%_120%] from-accent/14 to-transparent to-60% py-18 lg:py-24"
    >
      <div className="mx-auto flex max-w-page flex-col items-center px-4 text-center">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleStart={content.title}
          description={content.description}
          align="center"
        />
        <a
          href={`mailto:${profileLinks.email}`}
          className="mt-6 max-w-full rounded-lg border border-line bg-panel px-3.5 py-2.5 font-mono text-sm break-all select-all transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {profileLinks.email}
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href={profileLinks.linkedin} variant="primary" external>
            LinkedIn ↗
          </ButtonLink>
          <ButtonLink href={profileLinks.github} external>
            GitHub ↗
          </ButtonLink>
          <ButtonLink href={profileLinks.cv} download>
            {content.downloadCv}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
