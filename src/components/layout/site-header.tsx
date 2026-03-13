"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { marketingNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/92 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Briefly
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-[var(--color-text)]",
                isActive(item.href) ? "text-[var(--color-text)]" : "",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm">Start free</Button>
        </div>
      </Container>

      <Container className="pb-2 md:hidden">
        <nav className="flex gap-2 overflow-x-auto">
          {marketingNav.map((item) => (
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
      </Container>
    </header>
  );
}

