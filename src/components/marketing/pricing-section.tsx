import { Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/lib/marketing-content";

export function PricingSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Plans that match team maturity"
          description="Start with a free trial, then scale with workspace controls and integrations as your meeting volume grows."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col p-6",
                plan.highlighted
                  ? "border-[var(--color-brand-500)] shadow-[var(--shadow-soft)]"
                  : "border-[var(--color-border)]",
              )}
            >
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[var(--color-text)]">{plan.name}</p>
                <p className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                  {plan.price}
                  {plan.price.startsWith("$") ? (
                    <span className="text-base font-medium text-[var(--color-text-muted)]">/seat</span>
                  ) : null}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">{plan.description}</p>
              </div>
              <Button
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-5 w-full"
              >
                {plan.cta}
              </Button>
              <ul className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                    <Check size={16} className="mt-0.5 text-[var(--color-brand-700)]" />
                    {feature}
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
