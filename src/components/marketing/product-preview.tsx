import { CalendarCheck2, ListChecks, Search } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

const previewCards = [
  {
    icon: CalendarCheck2,
    title: "Meeting timeline",
    description: "See weekly summaries and unresolved decisions in one chronological view.",
  },
  {
    icon: ListChecks,
    title: "Action pipeline",
    description: "Track assigned tasks by owner, due date, and priority from each meeting.",
  },
  {
    icon: Search,
    title: "Smart search",
    description: "Find exact moments from transcripts and linked notes across the workspace.",
  },
];

export function ProductPreview() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Product preview"
          title="A workspace designed for clarity after every meeting"
          description="The product UI combines meeting recaps, action tracking, and searchable context so teams can move from discussion to execution quickly."
        />
        <Card className="overflow-hidden p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-4">
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
                    Team approved beta rollout for smart templates and aligned onboarding copy
                    changes before launch.
                  </p>
                </div>
                <div className="rounded-lg bg-[var(--color-surface)] p-3">
                  <p className="font-semibold text-[var(--color-text)]">Decisions</p>
                  <p className="mt-1 text-[var(--color-text-muted)]">
                    Rollout starts Tuesday for 20% of workspaces with support monitoring enabled.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {previewCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
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
