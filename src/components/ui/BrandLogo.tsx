import { Sandwich } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
}

export function BrandLogo({ inverse = false, compact = false, className }: BrandLogoProps) {
  return (
    <a
      className={cn("brand-logo focus-ring", inverse && "brand-logo--inverse", className)}
      href="#home"
      aria-label="Burger House — home"
    >
      <Sandwich aria-hidden="true" className="brand-logo__icon" strokeWidth={2.6} />
      <span className={cn("brand-logo__words", compact && "brand-logo__words--compact")}>
        <strong>BURGER</strong>
        <strong>HOUSE</strong>
      </span>
    </a>
  );
}
