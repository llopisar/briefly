"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { appNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] p-4 lg:flex">
      <Link href="/dashboard" className="px-3 py-2 text-lg font-semibold tracking-tight">
        MeetFlow
      </Link>
      <nav className="mt-6 space-y-1">
        {appNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === item.href
                ? "bg-[var(--color-surface-muted)] text-[var(--color-text)]"
                : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
