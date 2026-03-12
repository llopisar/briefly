export type NavItem = {
  href: string;
  label: string;
};

export const marketingNav: NavItem[] = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
];

export const appNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/meetings", label: "Meetings" },
  { href: "/actions", label: "Action Items" },
  { href: "/notes", label: "Notes" },
  { href: "/team", label: "Team" },
  { href: "/settings", label: "Settings" },
];
