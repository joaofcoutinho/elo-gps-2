import { Hourglass, Crown, Scale, KeyRound, Award, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { metallicAngle } from "@/components/ui/MetallicBorder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { copy } from "@/lib/copy";
import { ANCHORS } from "@/lib/constants";

const itemIcons: readonly LucideIcon[] = [
  Hourglass,
  Crown,
  Scale,
  KeyRound,
  Award,
];

export function ParaQuemE() {
  const c = copy.paraQuem;
  return (
    <Section id={ANCHORS.paraQuem} className="bg-ambient-warm-1">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>{c.eyebrow}</SectionEyebrow>
        <h2 className="mt-6 text-3xl font-black leading-[1.15] tracking-tight text-ink-primary md:text-4xl">
          {c.headline}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink-secondary md:text-lg">
          {c.lead}
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
        {c.items.map((item, i) => {
          const Icon = itemIcons[i] ?? Award;
          // Last item in a 5-item, 2-col grid spans full width on its row
          const isLast = i === c.items.length - 1;
          return (
            <FadeInUp
              key={item.title}
              delay={i * 0.08}
              className={isLast ? "md:col-span-2" : ""}
            >
              <Card interactive className="flex h-full items-start gap-5">
                <IconBadge icon={Icon} size="md" angle={metallicAngle(i + 2)} />
                <div>
                  <h3 className="text-base font-black leading-tight tracking-tight text-ink-primary md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                    {item.description}
                  </p>
                </div>
              </Card>
            </FadeInUp>
          );
        })}
      </div>

    </Section>
  );
}
