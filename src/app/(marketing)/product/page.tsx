import { Container } from "@/components/shared/container";
import { PlaceholderPanel } from "@/components/shared/placeholder-panel";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";

export default function ProductPage() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Product"
          title="Briefly feature architecture"
          description="Placeholder route for detailed feature storytelling and product visuals."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <PlaceholderPanel
            title="AI Summary Engine"
            description="Summary quality and meeting template coverage."
          />
          <PlaceholderPanel
            title="Action Item Pipeline"
            description="Task extraction, ownership rules, and follow-up automation."
          />
        </div>
      </Container>
    </Section>
  );
}

