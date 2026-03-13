import { AlertCircle, CheckCircle2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ActionItem } from "@/lib/product-data";

type ActionItemsPanelProps = {
  title?: string;
  items: ActionItem[];
};

export function ActionItemsPanel({ title = "Action items", items }: ActionItemsPanelProps) {
  return (
    <Card className="p-5">
      <h2 className="text-base font-semibold text-[var(--color-text)]">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3"
          >
            <div className="flex gap-2">
              {item.done ? (
                <CheckCircle2 size={16} className="mt-0.5 text-emerald-600" />
              ) : (
                <AlertCircle size={16} className="mt-0.5 text-[var(--color-brand-700)]" />
              )}
              <p className="text-sm text-[var(--color-text)]">{item.task}</p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <span>{item.owner}</span>
              <span>•</span>
              <span>Due {item.due}</span>
              <span
                className={cn(
                  "ml-auto rounded-full px-2 py-1 font-semibold",
                  item.priority === "High"
                    ? "bg-rose-100 text-rose-700"
                    : item.priority === "Medium"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-700",
                )}
              >
                {item.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
