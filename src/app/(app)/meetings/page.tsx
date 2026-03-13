import Link from "next/link";

import { MeetingsTable } from "@/components/product/meetings-table";
import { PageHeader } from "@/components/product/page-header";
import { StatusPill } from "@/components/product/status-pill";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { meetings } from "@/lib/product-data";

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Meetings"
        description="Browse transcripts, summaries, and follow-up tasks from every team call."
        actions={
          <>
            <Button variant="secondary" size="sm">
              Filter: This week
            </Button>
            <Button size="sm">New meeting</Button>
          </>
        }
      />

      <MeetingsTable meetings={meetings} />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-base font-semibold text-[var(--color-text)]">Needs review</h2>
          <div className="mt-4 space-y-3">
            {meetings
              .filter((meeting) => meeting.status === "Needs review")
              .map((meeting) => (
                <div
                  key={meeting.id}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--color-text)]">{meeting.title}</p>
                    <StatusPill status={meeting.status} />
                  </div>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{meeting.summary}</p>
                  <Link
                    href={`/meetings/${meeting.id}`}
                    className="mt-2 inline-flex text-xs font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-500)]"
                  >
                    Open summary
                  </Link>
                </div>
              ))}
          </div>
        </Card>
        <Card className="p-5">
          <h2 className="text-base font-semibold text-[var(--color-text)]">Meeting templates</h2>
          <div className="mt-4 grid gap-2">
            {["Sprint planning", "Client status review", "1:1 manager sync", "Retro"].map(
              (template) => (
                <button
                  key={template}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-left text-sm text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-muted)]"
                  type="button"
                >
                  {template}
                </button>
              ),
            )}
          </div>
          <p className="mt-3 text-xs text-[var(--color-text-muted)]">
            Templates help Briefly structure summaries and action extraction for recurring calls.
          </p>
        </Card>
      </div>
    </div>
  );
}

