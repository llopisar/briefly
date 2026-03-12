import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";

const outcomes = [
  "Summaries delivered in under 60 seconds",
  "Action items assigned with owners",
  "Searchable history across every call",
];

export function Hero() {
  return (
    <section className="section-spacing overflow-hidden pb-10 pt-12 sm:pt-20">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <p className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-700)]">
            MeetFlow for teams
          </p>
          <div className="space-y-4">
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl">
              Turn meeting conversations into shipped outcomes.
            </h1>
            <p className="max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg">
              MeetFlow captures every meeting, writes structured summaries, and auto-generates
              action items your team can execute immediately.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2">
              Start free
              <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="secondary">
              View live demo
            </Button>
          </div>
          <ul className="space-y-2">
            {outcomes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <CheckCircle2 size={16} className="text-[var(--color-brand-700)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-[#d9f7fc] via-[#ffffff] to-[#ebf1ff] p-5 shadow-[var(--shadow-soft)]">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-brand-300)]/40 blur-3xl" />
          <div className="relative space-y-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-700)]">
                Latest meeting
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                Sprint planning - Product and Engineering
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Scope finalized for onboarding revamp. Team agreed to ship behind a feature flag
                by Friday.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="text-xs text-[var(--color-text-muted)]">Action items</p>
                <p className="mt-1 text-2xl font-semibold text-[var(--color-text)]">12</p>
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="text-xs text-[var(--color-text-muted)]">Follow-ups due this week</p>
                <p className="mt-1 text-2xl font-semibold text-[var(--color-text)]">7</p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
