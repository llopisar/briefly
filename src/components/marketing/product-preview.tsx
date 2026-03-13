import { CalendarCheck2, ListChecks, Search } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

const previewCards = [
  {
    icon: CalendarCheck2,
    title: "Meeting timeline",
    description: "Review weekly recaps and unresolved decisions in one chronological feed.",
  },
  {
    icon: ListChecks,
    title: "Action pipeline",
    description: "Track follow-ups by owner, due date, and priority across all meetings.",
  },
  {
    icon: Search,
    title: "Smart search",
    description: "Find exact decisions and transcript moments across the full workspace.",
  },
];

export function ProductPreview() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Product preview"
          title="A workspace built for post-meeting execution"
          description="The interface connects summary quality, task follow-through, and meeting history so teams always know what was agreed and what is pending."
        />
        <Card className="overflow-hidden p-4 sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-3 sm:p-4">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Weekly product sync - Summary
                </p>
                <span className="text-xs text-[var(--color-text-muted)]">42 min call</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-lg bg-[var(--color-surface)] p-3">
                  <p className="font-semibold text-[var(--color-text)]">Key outcomes</p>
                  <p className="mt-1 text-[var(--color-text-muted)]">
                    Team approved phased rollout for new onboarding templates and aligned final
                    copy changes before launch.
                  </p>
                </div>
                <div className="rounded-lg bg-[var(--color-surface)] p-3">
                  <p className="font-semibold text-[var(--color-text)]">Decisions</p>
                  <p className="mt-1 text-[var(--color-text-muted)]">
                    Rollout starts Tuesday for 20% of workspaces, with support monitoring enabled
                    from day one.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {previewCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand-300)]"
                >
                  <item.icon size={16} className="text-[var(--color-brand-700)]" />
                  <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
