import { PlaceholderPanel } from "@/components/shared/placeholder-panel";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">Dashboard</h1>
      <div className="grid gap-4 xl:grid-cols-3">
        <PlaceholderPanel title="Today&apos;s Meetings" description="Upcoming and recent meetings list." />
        <PlaceholderPanel title="Open Action Items" description="Assigned tasks by due date and priority." />
        <PlaceholderPanel title="Team Activity" description="Recent summaries, edits, and comments." />
      </div>
    </div>
  );
}
