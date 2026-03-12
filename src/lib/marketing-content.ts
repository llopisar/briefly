export const trustLogos = [
  "Notion",
  "Slack",
  "Linear",
  "HubSpot",
  "Zapier",
  "Figma",
];

export const featureCards = [
  {
    title: "AI summaries built for decisions",
    description:
      "MeetFlow outputs concise summaries with context, blockers, and decisions so anyone can catch up without replaying a full call.",
    points: ["Structured recap", "Decision highlights", "Team-ready format"],
  },
  {
    title: "Action items with real ownership",
    description:
      "Extract next steps automatically with owner, due date, and priority fields that map directly to your team workflow.",
    points: ["Owner detection", "Due date suggestions", "Priority tags"],
  },
  {
    title: "Search that remembers meetings",
    description:
      "Find what was said across projects by keyword, participant, or topic and jump to the exact note or transcript moment.",
    points: ["Semantic lookup", "Cross-meeting filters", "Instant jump links"],
  },
  {
    title: "Follow-up visibility for managers",
    description:
      "Track unresolved items and stale follow-ups from one dashboard so meetings become execution checkpoints, not status theater.",
    points: ["Pending actions board", "Overdue alerts", "Weekly digest"],
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    description: "For small teams that need reliable meeting notes and follow-ups.",
    cta: "Start free",
    features: ["Up to 10 seats", "AI summaries", "Action extraction", "Searchable notes"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$49",
    description: "For product and operations teams running meetings every day.",
    cta: "Try Growth",
    features: [
      "Up to 50 seats",
      "All Starter features",
      "Team dashboards",
      "Integrations: Slack, Notion, Linear",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For larger organizations with security and admin requirements.",
    cta: "Talk to sales",
    features: [
      "Unlimited seats",
      "SSO + advanced roles",
      "Data retention controls",
      "Dedicated onboarding",
    ],
    highlighted: false,
  },
];

export const testimonials = [
  {
    quote:
      "MeetFlow cut our meeting follow-up time in half. We now leave planning calls with owners and due dates already assigned.",
    author: "Nina Patel",
    role: "Head of Product, Craftlane",
  },
  {
    quote:
      "The summaries are crisp enough to share directly in Slack. It has become our source of truth for client standups.",
    author: "Andre Mota",
    role: "Delivery Lead, North Axis Agency",
  },
  {
    quote:
      "Search is the killer feature. We can answer ‘when did we decide this?’ in seconds during roadmap discussions.",
    author: "Luis Romero",
    role: "Founder, VeroStack",
  },
];
