import { Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function AppTopbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 sm:px-6">
      <div className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text-muted)]">
        <Search size={16} />
        <span>Search meetings, notes, and actions</span>
      </div>
      <Badge className="bg-[var(--color-brand-100)] text-[var(--color-brand-700)]">Starter Workspace</Badge>
    </header>
  );
}
