import { Clock3 } from "lucide-react";

import { Card } from "@/components/ui/card";

type ActivityFeedPanelProps = {
  items: string[];
};

export function ActivityFeedPanel({ items }: ActivityFeedPanelProps) {
  return (
    <Card className="p-5">
      <h2 className="text-base font-semibold text-[var(--color-text)]">Recent activity</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
            <Clock3 size={14} className="mt-0.5 text-[var(--color-brand-700)]" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
