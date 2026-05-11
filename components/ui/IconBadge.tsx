import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MetallicBorder } from "@/components/ui/MetallicBorder";

type Size = "sm" | "md" | "lg";

type Props = {
  icon: LucideIcon;
  size?: Size;
  className?: string;
  label?: string;
  /** Gradient angle in degrees for the metallic border. */
  angle?: number;
};

const sizeWrap: Record<Size, string> = {
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const sizeIcon: Record<Size, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

/** Circular metallic-border badge containing a Lucide icon. */
export function IconBadge({
  icon: Icon,
  size = "md",
  className,
  label,
  angle,
}: Props) {
  return (
    <div
      className={cn(
        "relative grid shrink-0 place-items-center rounded-full",
        sizeWrap[size],
        className,
      )}
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
    >
      <MetallicBorder angle={angle} />
      <Icon className={cn("relative text-white", sizeIcon[size])} strokeWidth={1.75} />
    </div>
  );
}
