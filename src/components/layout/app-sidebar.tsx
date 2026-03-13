"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, CheckSquare, FileText, LayoutDashboard, Settings, Users } from "lucide-react";
import type { ComponentType } from "react";

import { appNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const navIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "/dashboard": LayoutDashboard,
  "/meetings": CalendarDays,
  "/actions": CheckSquare,
  "/notes": FileText,
  "/team": Users,
  "/settings": Settings,
};

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <aside className="hidden w-64 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]/95 p-4 backdrop-blur-sm lg:flex">
      <Link href="/dashboard" className="px-3 py-2 text-lg font-semibold tracking-tight">
        MeetFlow
      </Link>
      <nav className="mt-6 space-y-1">
        {appNav.map((item) => {
          const Icon = navIcons[item.href] ?? LayoutDashboard;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200",
                isActive(item.href)
                  ? "bg-[var(--color-surface-muted)] text-[var(--color-text)]"
                  : "text-[var(--color-text-muted)] hover:translate-x-0.5 hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]",
              )}
            >
              <Icon size={15} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
