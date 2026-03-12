import { PlaceholderPanel } from "@/components/shared/placeholder-panel";

export default function ActionsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">Action Items</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <PlaceholderPanel
          title="Kanban Placeholder"
          description="Task board grouped by status with drag-and-drop support."
        />
        <PlaceholderPanel
          title="List View Placeholder"
          description="Sortable view with owner, priority, due date, and linked meeting."
        />
      </div>
    </div>
  );
}
