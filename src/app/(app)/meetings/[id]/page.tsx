import Link from "next/link";

import { ActionItemsPanel } from "@/components/product/action-items-panel";
import { PageHeader } from "@/components/product/page-header";
import { SummaryPanel } from "@/components/product/summary-panel";
import { TranscriptPanel } from "@/components/product/transcript-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getMeetingById, meetingActions, meetingTranscript } from "@/lib/product-data";

type MeetingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MeetingDetailPage({ params }: MeetingDetailPageProps) {
  const { id } = await params;
  const meeting = getMeetingById(id);

  return (
    <div className="space-y-6">
      <PageHeader
        title={meeting.title}
        description={`${meeting.team} • ${meeting.start} • ${meeting.duration} • ${meeting.attendees} attendees`}
        actions={
          <>
            <Link href="/meetings">
              <Button variant="secondary" size="sm">
                Back to meetings
              </Button>
            </Link>
            <Button size="sm">Share summary</Button>
          </>
        }
      />

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <SummaryPanel title={meeting.title} summary={meeting.summary} />
          <TranscriptPanel lines={meetingTranscript} />
        </div>
        <div className="space-y-4">
          <ActionItemsPanel title="Action items extracted" items={meetingActions} />
          <Card className="p-5">
            <h2 className="text-base font-semibold text-[var(--color-text)]">Follow-up notes</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Support team needs enablement notes before Tuesday rollout. Product marketing requests
              final copy by Monday morning.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
