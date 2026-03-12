"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { marketingNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          MeetFlow
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-[var(--color-text)]",
                pathname === item.href ? "text-[var(--color-text)]" : "",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">Start free</Button>
        </div>
      </Container>
    </header>
  );
}
