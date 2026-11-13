type ProcessStepProps = {
  title: string;
  description: string;
};

export function ProcessStep({ title, description }: ProcessStepProps) {
  return (
    <li className="relative pb-7 pl-8 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-0 size-3 rounded-full border-2 border-accent bg-ink"
      />
      <h3 className="font-display leading-snug font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </li>
  );
}
