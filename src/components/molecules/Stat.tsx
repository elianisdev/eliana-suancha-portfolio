type StatProps = {
  value: string;
  label: string;
};

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col-reverse border-line py-6 pr-3 even:border-l even:pl-4 lg:border-l lg:px-5.5 lg:first:border-l-0 lg:first:pl-0">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="font-display text-3xl font-bold tabular-nums">{value}</dd>
    </div>
  );
}
