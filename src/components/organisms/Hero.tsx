import { ButtonLink } from "@/components/atoms/ButtonLink";
import { HighlightText } from "@/components/atoms/HighlightText";
import { StatusPill } from "@/components/atoms/StatusPill";
import { HeroBackdrop } from "@/components/organisms/HeroBackdrop";
import { Terminal } from "@/components/organisms/Terminal";
import { profileLinks, sectionIds } from "@/content/profile";
import type { Dictionary } from "@/types/dictionary";

type HeroProps = {
  content: Dictionary["hero"];
  terminal: Dictionary["terminal"];
};

export function Hero({ content, terminal }: HeroProps) {
  return (
    <section id={sectionIds.top} className="relative overflow-hidden border-b border-line">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-page items-center gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
        <div>
          <StatusPill>{content.status}</StatusPill>
          <p className="mt-6 text-lg text-muted">{content.greeting}</p>
          <h1 className="mt-2 font-display text-4xl leading-tight font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {content.titleStart} <HighlightText>{content.titleHighlight}</HighlightText>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{content.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={`#${sectionIds.experience}`} variant="primary">
              {content.primaryCta}
            </ButtonLink>
            <ButtonLink href={profileLinks.linkedin} external>
              LinkedIn ↗
            </ButtonLink>
          </div>
        </div>
        <Terminal content={terminal} />
      </div>
    </section>
  );
}
