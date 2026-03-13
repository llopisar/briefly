export type Meeting = {
  id: string;
  title: string;
  team: string;
  start: string;
  duration: string;
  attendees: number;
  status: "Ready" | "Needs review";
  summary: string;
  actionCount: number;
};

export type ActionItem = {
  id: string;
  task: string;
  owner: string;
  due: string;
  priority: "High" | "Medium" | "Low";
  done?: boolean;
};

export type TranscriptLine = {
  time: string;
  speaker: string;
  text: string;
};

export const dashboardStats = [
  { label: "Meetings this week", value: "26", trend: "+12% vs last week" },
  { label: "Action items open", value: "41", trend: "9 due in next 48h" },
  { label: "Summary approval rate", value: "92%", trend: "Across 4 teams" },
  { label: "Average recap time", value: "54s", trend: "From call end to draft" },
];

export const meetings: Meeting[] = [
  {
    id: "m-1024",
    title: "Weekly product sync",
    team: "Product",
    start: "Today, 10:00",
    duration: "42 min",
    attendees: 8,
    status: "Ready",
    summary:
      "Aligned onboarding launch scope and agreed rollout to 20% of users behind a feature flag.",
    actionCount: 5,
  },
  {
    id: "m-1023",
    title: "Client status review - North Axis",
    team: "Agency",
    start: "Yesterday, 15:30",
    duration: "38 min",
    attendees: 6,
    status: "Ready",
    summary:
      "Confirmed campaign timeline, resolved QA blockers, and approved creative revisions.",
    actionCount: 4,
  },
  {
    id: "m-1022",
    title: "Engineering standup recap",
    team: "Engineering",
    start: "Yesterday, 09:15",
    duration: "24 min",
    attendees: 11,
    status: "Needs review",
    summary:
      "Release candidate remains on track with one unresolved API pagination regression.",
    actionCount: 3,
  },
  {
    id: "m-1021",
    title: "Founders ops review",
    team: "Leadership",
    start: "Mar 10, 17:00",
    duration: "51 min",
    attendees: 4,
    status: "Ready",
    summary:
      "Budget split updated for Q2 hiring and support tooling; cashflow assumptions validated.",
    actionCount: 6,
  },
];

export const dashboardActions: ActionItem[] = [
  {
    id: "a-301",
    task: "Finalize onboarding checklist copy before beta rollout",
    owner: "Nina",
    due: "Mar 13",
    priority: "High",
  },
  {
    id: "a-302",
    task: "Patch API pagination issue affecting activity feed",
    owner: "Rafael",
    due: "Mar 14",
    priority: "High",
  },
  {
    id: "a-303",
    task: "Send client recap and revised timeline",
    owner: "Andre",
    due: "Mar 14",
    priority: "Medium",
    done: true,
  },
  {
    id: "a-304",
    task: "Prepare dashboard metrics for Monday all-hands",
    owner: "Lena",
    due: "Mar 15",
    priority: "Low",
  },
];

export const activityFeed = [
  "Product summary approved by Nina",
  "3 new action items from Engineering standup",
  "Client status review exported to Slack channel #north-axis",
  "Weekly digest delivered to leadership workspace",
];

export const meetingActions: ActionItem[] = [
  {
    id: "a-410",
    task: "Ship onboarding copy updates behind beta flag",
    owner: "Marta",
    due: "Mar 13",
    priority: "High",
  },
  {
    id: "a-411",
    task: "Add analytics event for template usage",
    owner: "Jules",
    due: "Mar 15",
    priority: "Medium",
  },
  {
    id: "a-412",
    task: "Prepare enablement notes for support team",
    owner: "Iris",
    due: "Mar 16",
    priority: "Low",
  },
];

export const meetingTranscript: TranscriptLine[] = [
  {
    time: "00:02",
    speaker: "Nina",
    text: "Main objective today is confirming scope for onboarding improvements before beta.",
  },
  {
    time: "05:41",
    speaker: "Jules",
    text: "We can ship the guided checklist and progress tracker this week if analytics is deferred.",
  },
  {
    time: "14:07",
    speaker: "Marta",
    text: "Let us keep rollout at 20% first and monitor completion and drop-off metrics daily.",
  },
  {
    time: "25:32",
    speaker: "Nina",
    text: "Decision recorded: launch Tuesday with support brief ready before noon.",
  },
];

export const notesLibrary = [
  {
    id: "n-100",
    title: "Weekly product sync - rollout decision",
    snippet: "Agreed to launch to 20% of workspaces with support brief before noon.",
    tags: ["Product", "Launch"],
    updatedAt: "Updated 2h ago",
  },
  {
    id: "n-101",
    title: "Client status review - campaign QA",
    snippet: "Client approved revised timeline after resolving tracking discrepancy.",
    tags: ["Client", "Agency"],
    updatedAt: "Updated yesterday",
  },
  {
    id: "n-102",
    title: "Engineering standup - API regression",
    snippet: "Pagination bug tracked under ticket ENG-319 with patch ETA Friday.",
    tags: ["Engineering", "Bug"],
    updatedAt: "Updated yesterday",
  },
];

export function getMeetingById(id: string) {
  return meetings.find((meeting) => meeting.id === id) ?? meetings[0];
}
