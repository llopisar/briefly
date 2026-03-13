import { ActionItemsPanel } from "@/components/product/action-items-panel";
import { PageHeader } from "@/components/product/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dashboardActions, meetingActions } from "@/lib/product-data";

export default function ActionsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Action items"
        description="Track owners and due dates generated from meeting discussions."
        actions={
          <>
            <Button variant="secondary" size="sm">
              Group by owner
            </Button>
            <Button size="sm">Export tasks</Button>
          </>
        }
      />
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ActionItemsPanel title="All open tasks" items={[...dashboardActions, ...meetingActions]} />
        </div>
        <Card className="p-5">
          <h2 className="text-base font-semibold text-[var(--color-text)]">Queue health</h2>
          <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
            <p className="rounded-lg bg-[var(--color-surface-muted)] p-3">
              4 tasks due today, including 2 high-priority blockers.
            </p>
            <p className="rounded-lg bg-[var(--color-surface-muted)] p-3">
              7 tasks completed this week from meeting-generated actions.
            </p>
            <p className="rounded-lg bg-[var(--color-surface-muted)] p-3">
              Average completion time: 2.1 days.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
