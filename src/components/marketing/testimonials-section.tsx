import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/marketing-content";

export function TestimonialsSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Customer proof"
          title="Teams use Briefly to improve follow-through"
          description="Practical feedback from product and delivery teams that rely on accurate recaps and accountable actions."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6">
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold tracking-tight text-[var(--color-text)]">
                  {testimonial.author}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

