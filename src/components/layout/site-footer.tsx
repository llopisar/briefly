import Link from "next/link";

import { Container } from "@/components/shared/container";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Product" },
      { href: "/actions", label: "Action Tracking" },
      { href: "/pricing", label: "Pricing" },
      { href: "/notes", label: "Notes Library" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions", label: "Startups" },
      { href: "/solutions", label: "Product Teams" },
      { href: "/solutions", label: "Agencies" },
      { href: "/solutions", label: "Managers" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "Security" },
      { href: "#", label: "API Docs" },
      { href: "#", label: "Changelog" },
      { href: "#", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="text-lg font-semibold tracking-tight">Briefly</p>
          <p className="max-w-sm text-sm text-[var(--color-text-muted)]">
            AI meeting notes, summaries, and follow-up tracking for teams that value execution
            clarity.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Built for product, operations, and client-facing teams.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title} className="space-y-1.5">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">{group.title}</h3>
            {group.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </Container>

      <Container className="flex flex-col gap-2 border-t border-[var(--color-border)] py-6 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Briefly, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-[var(--color-text)]">
            Privacy
          </Link>
          <Link href="#" className="hover:text-[var(--color-text)]">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}

