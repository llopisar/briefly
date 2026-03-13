import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-brand-500)] px-4 py-2 text-white shadow-[0_6px_18px_rgb(18_183_207_/_0.28)] hover:-translate-y-0.5 hover:bg-[var(--color-brand-700)] hover:shadow-[0_10px_22px_rgb(12_140_160_/_0.35)]",
        secondary:
          "border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-muted)]",
        ghost:
          "px-3 py-2 text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]",
      },
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
