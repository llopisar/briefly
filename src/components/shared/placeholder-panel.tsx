import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PlaceholderPanelProps = {
  title: string;
  description: string;
  className?: string;
};

export function PlaceholderPanel({ title, description, className }: PlaceholderPanelProps) {
  return (
    <Card className={cn("p-6", className)}>
      <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{description}</p>
    </Card>
  );
}
