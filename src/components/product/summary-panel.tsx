import { Card } from "@/components/ui/card";

type SummaryPanelProps = {
  title: string;
  summary: string;
};

export function SummaryPanel({ title, summary }: SummaryPanelProps) {
  return (
    <Card className="p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-700)]">
        AI summary
      </p>
      <h2 className="mt-2 text-lg font-semibold text-[var(--color-text)]">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{summary}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            Key decision
          </p>
          <p className="mt-1 text-sm text-[var(--color-text)]">
            Rollout begins Tuesday for 20% of workspaces.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            Risk to monitor
          </p>
          <p className="mt-1 text-sm text-[var(--color-text)]">
            API pagination regression may affect usage dashboards.
          </p>
        </div>
      </div>
    </Card>
  );
}
