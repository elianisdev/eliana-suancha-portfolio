import type { TerminalLine as TerminalLineType, TerminalTone } from "@/types/terminal";

type TerminalLineProps = {
  line: TerminalLineType;
};

const toneClassNames: Record<TerminalTone, string> = {
  accent: "text-accent",
  secondary: "text-accent-2",
  comment: "text-syntax-comment",
  attribute: "text-syntax-attribute",
};

const isExternalLink = (href: string) => href.startsWith("http");

export function TerminalLine({ line }: TerminalLineProps) {
  return (
    <div className="whitespace-pre-wrap break-words">
      {line.map(({ text, tone, href }, index) =>
        href ? (
          <a
            key={index}
            href={href}
            {...(isExternalLink(href) && { target: "_blank", rel: "noopener noreferrer" })}
            className="text-accent-2 underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-accent"
          >
            {text}
          </a>
        ) : (
          <span key={index} className={tone && toneClassNames[tone]}>
            {text}
          </span>
        ),
      )}
    </div>
  );
}
