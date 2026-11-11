import { Eyebrow } from "@/components/atoms/Eyebrow";
import { CertificationCard } from "@/components/molecules/CertificationCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { certifications } from "@/content/certifications";
import { profileLinks, sectionIds } from "@/content/profile";
import { formatMonthYear } from "@/lib/format-date";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";

type CertificationsProps = {
  content: Dictionary["certifications"];
  locale: Locale;
};

export function Certifications({ content, locale }: CertificationsProps) {
  return (
    <section id={sectionIds.certifications} className="border-t border-line py-18 lg:py-23">
      <div className="mx-auto max-w-page px-4">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleStart={content.title}
          description={content.description}
          align="center"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <li key={certification.id}>
              <CertificationCard
                title={certification.title}
                issuer={certification.issuer}
                issuerInitials={certification.issuerInitials}
                description={content.items[certification.id]}
                issuedAt={formatMonthYear(certification.issuedAt, locale)}
                area={certification.area}
                credentialUrl={certification.credentialUrl}
                viewCredentialLabel={content.viewCredential}
              />
            </li>
          ))}
        </ul>

        <a
          href={profileLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-6.5 block w-max max-w-full rounded-lg border border-dashed border-line px-3.5 py-2 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          {content.moreCourses}
        </a>

        <div className="mt-14 text-center">
          <Eyebrow>{content.educationTitle}</Eyebrow>
          <ul className="mt-4 flex flex-wrap justify-center gap-3.5">
            {content.education.map(({ degree, detail }) => (
              <li
                key={degree}
                className="rounded-xl border border-line bg-panel px-4 py-3 text-left text-sm"
              >
                <strong className="block font-semibold">{degree}</strong>
                <span className="text-xs text-muted">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
