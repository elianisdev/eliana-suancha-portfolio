import { Logo } from "@/components/atoms/Logo";
import { LanguageSwitcher } from "@/components/molecules/LanguageSwitcher";
import { sectionIds } from "@/content/profile";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/dictionary";

type NavbarProps = {
  locale: Locale;
  navigation: Dictionary["navigation"];
  languageSwitcherLabel: string;
};

const navigationItems = [
  { id: sectionIds.experience, key: "experience" },
  { id: sectionIds.projects, key: "projects" },
  { id: sectionIds.architecture, key: "architecture" },
  { id: sectionIds.contact, key: "contact" },
] as const;

export function Navbar({ locale, navigation, languageSwitcherLabel }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4">
        <Logo href={`#${sectionIds.top}`} />
        <nav aria-label={navigation.label} className="hidden lg:block">
          <ul className="flex gap-6 text-sm text-muted">
            {navigationItems.map(({ id, key }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {navigation[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher currentLocale={locale} label={languageSwitcherLabel} />
      </div>
    </header>
  );
}
