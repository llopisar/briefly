import { Card } from "@/components/ui/card";

type StatItem = {
  label: string;
  value: string;
  trend: string;
};

type StatsGridProps = {
  items: StatItem[];
};

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.label} className="p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            {item.label}
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
            {item.value}
          </p>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">{item.trend}</p>
        </Card>
      ))}
    </div>
  );
}
