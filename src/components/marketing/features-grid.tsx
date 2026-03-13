import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { featureCards } from "@/lib/marketing-content";

export function FeaturesGrid() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Core features"
          title="Everything between the meeting and the next deliverable"
          description="MeetFlow helps teams leave every call with a clear record of what was decided, who owns what, and what happens next."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {featureCards.map((feature) => (
            <Card key={feature.title} className="group p-6">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {feature.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-text-muted)] transition-colors duration-200 group-hover:bg-[var(--color-surface-elevated)]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
