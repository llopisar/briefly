import { PlaceholderPanel } from "@/components/shared/placeholder-panel";

export default function TeamPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">Team</h1>
      <div className="grid gap-4 lg:grid-cols-2">
        <PlaceholderPanel
          title="Members & Roles Placeholder"
          description="Workspace roles, invite flow, and permissions."
        />
        <PlaceholderPanel
          title="Integrations Placeholder"
          description="Calendar, conferencing, and task management integrations."
        />
      </div>
    </div>
  );
}
