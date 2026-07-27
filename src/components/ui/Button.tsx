import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  showArrow?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = true,
  ...props
}: ButtonProps) {
  return (
    <a className={cn("button", `button--${variant}`, "focus-ring", className)} {...props}>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" className="button__arrow" size={19} /> : null}
    </a>
  );
}
