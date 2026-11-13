type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export function TestimonialCard({ quote, name, role, initials }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6">
      <blockquote className="flex-1 leading-relaxed">“{quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/12 text-sm font-semibold text-accent"
        >
          {initials}
        </span>
        <span className="text-sm">
          <strong className="block font-semibold">{name}</strong>
          <span className="text-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
