type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 rounded-2xl border border-line bg-panel px-4.5 py-4">
      <span aria-hidden="true" className="row-span-2 pt-0.5 font-mono text-sm text-accent">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="font-display leading-snug font-bold">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </li>
  );
}
