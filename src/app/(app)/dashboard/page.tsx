import Link from "next/link";

import { ActionItemsPanel } from "@/components/product/action-items-panel";
import { ActivityFeedPanel } from "@/components/product/activity-feed-panel";
import { MeetingsTable } from "@/components/product/meetings-table";
import { PageHeader } from "@/components/product/page-header";
import { StatsGrid } from "@/components/product/stats-grid";
import { Button } from "@/components/ui/button";
import { activityFeed, dashboardActions, dashboardStats, meetings } from "@/lib/product-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Team dashboard"
        description="Track weekly meeting output, pending follow-ups, and summary quality across your workspace."
        actions={
          <>
            <Button variant="secondary" size="sm">
              Export weekly recap
            </Button>
            <Link href="/meetings">
              <Button size="sm">View all meetings</Button>
            </Link>
          </>
        }
      />

      <StatsGrid items={dashboardStats} />

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">Latest meetings</h2>
        <MeetingsTable meetings={meetings.slice(0, 3)} />
      </section>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ActionItemsPanel title="Open action items" items={dashboardActions} />
        </div>
        <ActivityFeedPanel items={activityFeed} />
      </div>
    </div>
  );
}
