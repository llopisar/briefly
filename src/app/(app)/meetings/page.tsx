import { PlaceholderPanel } from "@/components/shared/placeholder-panel";

export default function MeetingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">Meetings</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <PlaceholderPanel
          title="Meetings Table Placeholder"
          description="List view with filters for date, team, participant, and status."
        />
        <PlaceholderPanel
          title="Meeting Cards Placeholder"
          description="Alternative card view for browsing session summaries."
        />
      </div>
    </div>
  );
}
