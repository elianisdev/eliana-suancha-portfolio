import type { CertificationArea } from "@/types/certification";

type CertificationCardProps = {
  title: string;
  issuer: string;
  issuerInitials: string;
  description: string;
  issuedAt: string;
  area: CertificationArea;
  credentialUrl?: string;
  viewCredentialLabel: string;
};

const badgeClassNames: Record<CertificationArea, string> = {
  development: "bg-accent-2/12 text-accent-2",
  ai: "bg-accent/12 text-accent",
};

export function CertificationCard({
  title,
  issuer,
  issuerInitials,
  description,
  issuedAt,
  area,
  credentialUrl,
  viewCredentialLabel,
}: CertificationCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-panel p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex items-center gap-2.5 text-sm text-muted">
        <span
          aria-hidden="true"
          className={`grid size-9 shrink-0 place-items-center rounded-lg font-mono text-xs ${badgeClassNames[area]}`}
        >
          {issuerInitials}
        </span>
        {issuer}
      </div>
      <h3 className="mt-4 font-display leading-snug font-bold">{title}</h3>
      <p className="mt-1.5 mb-4 text-sm text-muted">{description}</p>
      <div className="mt-auto flex items-center justify-between gap-2.5 border-t border-line pt-3 font-mono text-xs text-muted">
        <span>{issuedAt}</span>
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {viewCredentialLabel}
          </a>
        )}
      </div>
    </article>
  );
}
