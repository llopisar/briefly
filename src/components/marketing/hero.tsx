import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";

const outcomes = [
  "Recaps generated in under a minute after each call",
  "Action items mapped to owner, due date, and priority",
  "Searchable meeting history across your whole workspace",
];

export function Hero() {
  return (
    <section className="section-spacing relative overflow-hidden pb-10 pt-10 sm:pb-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[var(--color-brand-100)]/55 to-transparent" />
      <Container className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div className="space-y-6 sm:space-y-8">
          <p className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-700)]">
            Briefly for teams
          </p>
          <div className="space-y-5">
            <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-7xl">
              Stop losing decisions in meeting notes.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              Briefly turns every meeting into a clear summary, assigned action list, and
              searchable record so teams can move from discussion to execution faster.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="w-full gap-2 sm:w-auto">
              Start free trial
              <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              See product tour
            </Button>
          </div>
          <ul className="space-y-2 pt-1">
            {outcomes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                <CheckCircle2 size={16} className="text-[var(--color-brand-700)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-[#d9f7fc] via-[#ffffff] to-[#ebf1ff] p-4 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="absolute -right-16 -top-16 h-40 w-40 animate-[subtle-float_8s_ease-in-out_infinite] rounded-full bg-[var(--color-brand-300)]/40 blur-3xl" />
          <div className="relative space-y-4">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-700)]">
                Latest meeting
              </p>
              <p className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                Sprint planning - Product and Engineering
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Team aligned on onboarding scope, approved phased rollout, and assigned remaining
                launch tasks before Friday.
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

