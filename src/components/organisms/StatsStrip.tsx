import { Stat } from "@/components/molecules/Stat";
import type { Dictionary } from "@/types/dictionary";

type StatsStripProps = {
  stats: Dictionary["stats"];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="border-b border-line">
      <dl className="mx-auto grid max-w-page grid-cols-2 px-4 lg:grid-cols-4">
        {stats.map(({ value, label }) => (
          <Stat key={label} value={value} label={label} />
        ))}
      </dl>
    </section>
  );
}
