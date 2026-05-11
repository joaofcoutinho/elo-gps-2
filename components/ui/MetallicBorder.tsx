import type { CSSProperties } from "react";

export type MetallicTone = "default" | "onCopper";

const stops: Record<MetallicTone, string> = {
  default: "#BD6534 0%, #994F24 50%, #5C2F15 100%",
  onCopper:
    "rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.4) 50%, rgba(0,0,0,0.5) 100%",
};

const baseMask: CSSProperties = {
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude",
  borderRadius: "inherit",
};

type Props = {
  tone?: MetallicTone;
  thickness?: number;
  /** Gradient direction in degrees. 180 = top→bottom (default). */
  angle?: number;
};

/**
 * Metallic gradient border overlay. Drop into any element with
 * `position: relative` and a defined border-radius — the border inherits the
 * parent's shape and leaves the interior transparent. Vary `angle` across
 * instances to avoid a static, repetitive feel.
 */
export function MetallicBorder({
  tone = "default",
  thickness = 1,
  angle = 180,
}: Props) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        ...baseMask,
        padding: thickness,
        background: `linear-gradient(${angle}deg, ${stops[tone]})`,
      }}
    />
  );
}

/** Cycle through a set of angles based on an index — useful inside lists. */
export function metallicAngle(index: number): number {
  const ANGLES = [180, 135, 45, 225, 90, 315, 270, 0];
  return ANGLES[index % ANGLES.length];
}
