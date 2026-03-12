import { PlaceholderPanel } from "@/components/shared/placeholder-panel";

export default function NotesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">Notes Library</h1>
      <div className="grid gap-4 xl:grid-cols-3">
        <PlaceholderPanel
          className="xl:col-span-2"
          title="Search + Filters Placeholder"
          description="Semantic search with tags, participants, and date ranges."
        />
        <PlaceholderPanel
          title="Saved Views Placeholder"
          description="Reusable smart filters for recurring research and reporting."
        />
      </div>
    </div>
  );
}
