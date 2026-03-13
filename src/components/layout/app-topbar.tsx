"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { appNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function AppTopbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-muted)]">
          <Search size={16} />
          <span className="truncate">Search meetings, notes, and actions</span>
        </div>
        <Badge className="hidden bg-[var(--color-brand-100)] text-[var(--color-brand-700)] sm:inline-flex">
          Starter Workspace
        </Badge>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-[var(--color-border)] px-4 py-2 lg:hidden">
        {appNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
              isActive(item.href)
                ? "border-[var(--color-brand-300)] bg-[var(--color-brand-100)] text-[var(--color-brand-700)]"
                : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)]",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
