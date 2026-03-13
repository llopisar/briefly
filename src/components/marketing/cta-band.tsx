import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <Section className="pb-12 pt-6 sm:pb-14 sm:pt-8">
      <Container>
        <div className="rounded-3xl border border-[var(--color-brand-300)] bg-gradient-to-r from-[#dff9fb] to-[#ebf1ff] p-6 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Make every meeting end with a clear plan.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
              Connect your calendar, record your next team call, and let MeetFlow generate a
              summary and action list your team can execute immediately.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button className="w-full gap-2 sm:w-auto" size="lg">
                Start 14-day free trial
                <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Talk to product specialist
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
