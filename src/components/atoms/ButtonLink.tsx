import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkVariant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  external?: boolean;
  download?: boolean;
};

const baseClassName =
  "inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const variantClassNames: Record<ButtonLinkVariant, string> = {
  primary: "border-accent bg-accent text-ink hover:brightness-110",
  secondary: "border-line text-fg hover:border-accent",
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  download = false,
}: ButtonLinkProps) {
  const className = `${baseClassName} ${variantClassNames[variant]}`;

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
