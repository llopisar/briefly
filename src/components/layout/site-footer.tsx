import Link from "next/link";

import { Container } from "@/components/shared/container";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/solutions", label: "Solutions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "Security" },
      { href: "#", label: "API" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">MeetFlow</p>
          <p className="mt-2 max-w-sm text-sm text-[var(--color-text-muted)]">
            AI-powered meeting notes and follow-ups for high-velocity teams.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">{group.title}</h3>
            {group.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </Container>
    </footer>
  );
}
