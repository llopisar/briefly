import { CtaBand } from "@/components/marketing/cta-band";
import { FeaturesGrid } from "@/components/marketing/features-grid";
import { Hero } from "@/components/marketing/hero";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ProductPreview } from "@/components/marketing/product-preview";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Card } from "@/components/ui/card";

const metrics = [
  { label: "Meetings summarized every week", value: "28,000+" },
  { label: "Actions tracked each month", value: "210,000+" },
  { label: "Average reduction in follow-up lag", value: "43%" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <Section className="py-8">
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-4 text-center">
                <p className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{metric.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <ProductPreview />
      <FeaturesGrid />
      <TestimonialsSection />
      <PricingSection />
      <CtaBand />
    </>
  );
}
