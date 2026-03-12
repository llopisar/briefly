import { Container } from "@/components/shared/container";
import { PlaceholderPanel } from "@/components/shared/placeholder-panel";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";

export default function SolutionsPage() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Solutions"
          title="Persona-specific pages"
          description="Placeholder sections for startups, product teams, managers, agencies, and founders."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <PlaceholderPanel
            title="Startup Teams"
            description="Move quickly with instant notes and clear owners after each call."
          />
          <PlaceholderPanel
            title="Agencies & Client Teams"
            description="Track decisions and deliverables across multiple client meeting streams."
          />
        </div>
      </Container>
    </Section>
  );
}
