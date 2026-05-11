import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "highlight";

type Props = HTMLAttributes<HTMLDivElement> & {
  tone?: Tone;
  /** Apply hover-lift effect (border + slight transform). */
  interactive?: boolean;
  /** Skip default padding — useful when the card hosts edge-to-edge media. */
  noPadding?: boolean;
};

const toneClasses: Record<Tone, string> = {
  default: "bg-navy-surface border border-white/[0.06] shadow-card",
  highlight:
    "bg-gradient-to-br from-navy-surface to-navy-deep border border-gold/40 shadow-card-gold",
};

/** Real card surface — solid bg, generous padding, subtle inner highlight. */
export const Card = forwardRef<HTMLDivElement, Props>(function Card(
  { className, tone = "default", interactive = false, noPadding = false, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      {...rest}
      className={cn(
        "rounded-2xl",
        !noPadding && "p-6 md:p-8",
        toneClasses[tone],
        interactive &&
          "transition-all duration-300 hover:border-gold/30 hover:-translate-y-0.5",
        className,
      )}
    />
  );
});
