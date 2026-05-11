import { HelpCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { StatCard } from "@/components/ui/StatCard";
import { Card } from "@/components/ui/Card";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { copy } from "@/lib/copy";
import { ANCHORS } from "@/lib/constants";

const statImages: readonly string[] = [
  "/card-1.png",
  "/card-2.png",
  "/card-3.png",
  "/card-4.png",
];

export function PorQueAgora() {
  const c = copy.porQueAgora;
  return (
    <Section id={ANCHORS.contexto} className="bg-ambient-warm-2">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>{c.eyebrow}</SectionEyebrow>
        <h2 className="mt-6 text-3xl font-black leading-[1.15] tracking-tight text-ink-primary md:text-4xl">
          {c.headline}
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4 lg:gap-6">
        {c.stats.map((stat, i) => (
          <StatCard
            key={stat.value + stat.label}
            index={i}
            tag={stat.tag}
            value={stat.value}
            label={stat.label}
            source={stat.source}
            image={statImages[i] ?? "/card-1.png"}
          />
        ))}
      </div>

      <FadeInUp delay={0.15} className="mx-auto mt-10 max-w-3xl">
        <Card className="border-gold/30 bg-gradient-to-br from-navy-surface to-navy-deep">
          <div className="flex items-start gap-4 text-left md:items-center">
            <HelpCircle
              className="h-6 w-6 shrink-0 text-gold-soft md:h-7 md:w-7"
              aria-hidden="true"
              strokeWidth={2}
            />
            <p className="text-base leading-relaxed text-ink-primary md:text-lg">
              {c.closer}
            </p>
          </div>
        </Card>
      </FadeInUp>
    </Section>
  );
}
