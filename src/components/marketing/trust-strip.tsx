import { Container } from "@/components/shared/container";
import { trustLogos } from "@/lib/marketing-content";

export function TrustStrip() {
  return (
    <section className="py-8">
      <Container className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          Trusted by fast-moving teams
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2 text-center sm:grid-cols-3 md:grid-cols-6">
          {trustLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-2 text-sm font-semibold text-[var(--color-text-muted)]"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
