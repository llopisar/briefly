export const trustLogos = ["Notion", "Slack", "Linear", "HubSpot", "Zapier", "Figma"];

export const featureCards = [
  {
    title: "Summaries that capture decisions, not just discussion",
    description:
      "Each recap is structured around outcomes, blockers, and agreed next steps so teammates can act without watching the full recording.",
    points: ["Outcome-first recap", "Decision log", "Share-ready format"],
  },
  {
    title: "Action items with clear ownership",
    description:
      "MeetFlow detects tasks discussed in the meeting and turns them into trackable items with owner, due date, and priority.",
    points: ["Owner assignment", "Due-date suggestions", "Priority labels"],
  },
  {
    title: "Search across every meeting in seconds",
    description:
      "Find what was decided, who agreed to it, and where it was discussed without digging through old docs or chat threads.",
    points: ["Topic + speaker search", "Cross-meeting filters", "Jump-to-moment links"],
  },
  {
    title: "Follow-up visibility for managers and leads",
    description:
      "Track unresolved items and overdue tasks from one dashboard so meetings become accountability checkpoints, not status theater.",
    points: ["Pending task board", "Overdue alerts", "Weekly follow-up digest"],
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    description: "For early teams that need dependable notes and clear follow-through.",
    cta: "Start free trial",
    features: [
      "Up to 10 seats",
      "Meeting summaries",
      "Action item extraction",
      "Searchable notes library",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49",
    description: "For teams running high meeting volume across product, ops, and client work.",
    cta: "Choose Growth",
    features: [
      "Up to 50 seats",
      "All Starter features",
      "Workspace dashboards",
      "Slack, Notion, and Linear integrations",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations that need advanced security, governance, and rollout support.",
    cta: "Contact sales",
    features: [
      "Unlimited seats",
      "SSO + advanced roles",
      "Data retention policies",
      "Security review support",
      "Dedicated onboarding",
    ],
    highlighted: false,
  },
];

export const testimonials = [
  {
    quote:
      "Before MeetFlow, our PMs spent hours rewriting notes after planning calls. Now the recap is ready before the team leaves Zoom, with owners already assigned.",
    author: "Nina Patel",
    role: "Head of Product, Craftlane",
  },
  {
    quote:
      "We run 30+ client calls a week. MeetFlow gave us a consistent summary format we can share directly with clients and internal teams without manual cleanup.",
    author: "Andre Mota",
    role: "Delivery Lead, North Axis Agency",
  },
  {
    quote:
      "The search experience changed our roadmap meetings. When someone asks 'when did we decide this?', we can pull the exact moment in seconds.",
    author: "Luis Romero",
    role: "Founder, VeroStack",
  },
];
