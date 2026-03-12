import { PlaceholderPanel } from "@/components/shared/placeholder-panel";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">Settings</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        <PlaceholderPanel title="Profile Placeholder" description="User profile and personal preferences." />
        <PlaceholderPanel title="Billing Placeholder" description="Plan, usage, and invoices." />
        <PlaceholderPanel
          title="AI Preferences Placeholder"
          description="Summary style, output format, and automation defaults."
        />
      </div>
    </div>
  );
}
