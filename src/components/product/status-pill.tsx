import { cn } from "@/lib/utils";

type StatusPillProps = {
  status: "Ready" | "Needs review";
};

export function StatusPill({ status }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
        status === "Ready"
          ? "bg-emerald-100 text-emerald-700"
          : "bg-amber-100 text-amber-700",
      )}
    >
      {status}
    </span>
  );
}
