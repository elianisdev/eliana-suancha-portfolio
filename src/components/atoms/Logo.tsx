type LogoProps = {
  href: string;
};

export function Logo({ href }: LogoProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-2.5 whitespace-nowrap font-display font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-linear-135 from-accent to-accent-2 text-xs font-extrabold text-ink"
      >
        ESG
      </span>
      <span className="sr-only sm:not-sr-only">Eliana Suancha Guzmán</span>
    </a>
  );
}
