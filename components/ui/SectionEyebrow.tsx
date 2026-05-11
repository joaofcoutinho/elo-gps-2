import { cn } from "@/lib/utils";
import { MetallicBorder, type MetallicTone } from "@/components/ui/MetallicBorder";

type Props = {
  children: string;
  className?: string;
  tone?: MetallicTone;
};

/** Metallic gradient-border label used at the top of every section. */
export function SectionEyebrow({ children, className, tone = "default" }: Props) {
  return (
    <div
      className={cn(
        "relative inline-flex rounded-xl bg-transparent px-5 py-2.5",
        className,
      )}
    >
      <MetallicBorder tone={tone} angle={165} />
      <span className="relative text-[11px] font-black uppercase tracking-eyebrow text-white">
        {children}
      </span>
    </div>
  );
}
