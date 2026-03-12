import { Container } from "@/components/shared/container";
import { PlaceholderPanel } from "@/components/shared/placeholder-panel";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

const featureSections = [
  {
    title: "Automatic summaries",
    description:
      "Convert transcripts into concise structured notes so teams can review outcomes in seconds.",
  },
  {
    title: "Action extraction",
    description:
      "Identify owners, due dates, and follow-up tasks automatically to keep accountability visible.",
  },
  {
    title: "Searchable note library",
    description:
      "Find decisions, blockers, and discussions quickly with semantic search across all meetings.",
  },
];

export default function HomePage() {
  return (
    <>
      <Section className="pb-8 pt-14 sm:pt-20">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-700)]">
              AI Meeting Workspace
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl">
              Meeting notes that turn into team momentum.
            </h1>
            <p className="max-w-lg text-base text-[var(--color-text-muted)] sm:text-lg">
              MeetFlow captures meetings, generates summaries, and organizes action items so teams
              leave every call with clarity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Start free</Button>
              <Button size="lg" variant="secondary">
                Watch demo
              </Button>
            </div>
          </div>
          <PlaceholderPanel
            title="Product Preview Placeholder"
            description="Reserved for high-fidelity app mockups on the next implementation phase."
            className="min-h-72"
          />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Core value"
            title="Built to reduce meeting overhead"
            description="This scaffold keeps structure and spacing ready for portfolio-grade UI implementation."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {featureSections.map((section) => (
              <PlaceholderPanel
                key={section.title}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Landing structure"
            title="Pre-defined conversion sections"
            description="Each panel marks a planned section for final content and polished UI."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <PlaceholderPanel
              title="Social Proof + Metrics"
              description="Logo cloud, customer stats, and trust signals."
            />
            <PlaceholderPanel
              title="How It Works"
              description="Three-step flow: connect calendar, run meetings, execute follow-ups."
            />
            <PlaceholderPanel
              title="Use Cases + Pricing"
              description="Persona-focused outcomes and pricing comparison section."
            />
            <PlaceholderPanel
              title="Security + FAQ + Final CTA"
              description="Credibility and conversion-focused footer zone."
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
