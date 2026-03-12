import { Container } from "@/components/shared/container";
import { PlaceholderPanel } from "@/components/shared/placeholder-panel";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";

export default function PricingPage() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Pricing structure placeholder"
          description="Reserved for starter, growth, and enterprise tiers with comparison matrix."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderPanel title="Starter" description="For early teams and pilots." />
          <PlaceholderPanel title="Growth" description="For scaling product organizations." />
          <PlaceholderPanel title="Enterprise" description="For security and admin controls." />
        </div>
      </Container>
    </Section>
  );
}
