import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className="flex rounded-full border border-line p-1 font-mono text-xs">
      {locales.map((locale) => {
        const isCurrent = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            aria-current={isCurrent ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
              isCurrent ? "bg-accent font-medium text-ink" : "text-muted hover:text-fg"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
