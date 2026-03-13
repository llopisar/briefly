import type { TranscriptLine } from "@/lib/product-data";
import { Card } from "@/components/ui/card";

type TranscriptPanelProps = {
  lines: TranscriptLine[];
};

export function TranscriptPanel({ lines }: TranscriptPanelProps) {
  return (
    <Card className="p-5">
      <h2 className="text-base font-semibold text-[var(--color-text)]">Transcript</h2>
      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
        Auto-generated transcript with speaker attribution.
      </p>
      <div className="mt-4 space-y-3">
        {lines.map((line) => (
          <div key={`${line.time}-${line.speaker}`} className="rounded-lg bg-[var(--color-surface-muted)] p-3">
            <p className="text-xs font-semibold text-[var(--color-brand-700)]">
              {line.time} • {line.speaker}
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">{line.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
