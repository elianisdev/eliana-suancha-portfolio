import { fullName } from "@/content/profile";
import type { Dictionary } from "@/types/dictionary";

type FooterProps = {
  content: Dictionary["footer"];
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-line font-mono text-xs text-muted">
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-3 px-4 py-5.5">
        <span>© 2026 {fullName}</span>
        <span>{content.builtWith}</span>
      </div>
    </footer>
  );
}
