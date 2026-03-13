import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Meeting } from "@/lib/product-data";
import { StatusPill } from "@/components/product/status-pill";

type MeetingsTableProps = {
  meetings: Meeting[];
};

export function MeetingsTable({ meetings }: MeetingsTableProps) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead className="bg-[var(--color-surface-muted)] text-left text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            <tr>
              <th className="px-4 py-3 font-semibold">Meeting</th>
              <th className="px-4 py-3 font-semibold">Team</th>
              <th className="px-4 py-3 font-semibold">Time</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Actions</th>
              <th className="px-4 py-3 font-semibold text-right">Open</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting) => (
              <tr key={meeting.id} className="border-t border-[var(--color-border)] text-sm">
                <td className="px-4 py-4">
                  <p className="font-semibold text-[var(--color-text)]">{meeting.title}</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {meeting.attendees} attendees • {meeting.duration}
                  </p>
                </td>
                <td className="px-4 py-4 text-[var(--color-text-muted)]">{meeting.team}</td>
                <td className="px-4 py-4 text-[var(--color-text-muted)]">{meeting.start}</td>
                <td className="px-4 py-4">
                  <StatusPill status={meeting.status} />
                </td>
                <td className="px-4 py-4 text-[var(--color-text-muted)]">{meeting.actionCount}</td>
                <td className="px-4 py-4 text-right">
                  <Link
                    href={`/meetings/${meeting.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-500)]"
                  >
                    View
                    <ChevronRight size={14} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
