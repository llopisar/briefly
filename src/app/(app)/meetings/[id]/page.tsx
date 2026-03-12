import { PlaceholderPanel } from "@/components/shared/placeholder-panel";

type MeetingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MeetingDetailPage({ params }: MeetingDetailPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
        Meeting {id}
      </h1>
      <div className="grid gap-4 xl:grid-cols-3">
        <PlaceholderPanel
          className="xl:col-span-2"
          title="Summary + Transcript Tabs Placeholder"
          description="Primary content area for AI summary, transcript, and notes."
        />
        <PlaceholderPanel
          title="Action Items Placeholder"
          description="Extracted action list with owners and due dates."
        />
      </div>
    </div>
  );
}
