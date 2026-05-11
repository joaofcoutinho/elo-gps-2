import {
  Users,
  Notebook,
  FileText,
  Coffee,
  Camera,
  Bot,
  MessageCircle,
  Sparkles,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { metallicAngle } from "@/components/ui/MetallicBorder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { DayCard } from "@/components/ui/DayCard";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { copy } from "@/lib/copy";
import { ANCHORS } from "@/lib/constants";

const includeIcons: readonly LucideIcon[] = [
  Users,
  Notebook,
  FileText,
  Coffee,
  Camera,
  Bot,
  MessageCircle,
];

export function GradeDosDias() {
  const c = copy.gradeDosDias;
  return (
    <Section id={ANCHORS.grade} className="bg-ambient-warm-3">
      <div className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>{c.eyebrow}</SectionEyebrow>
        <h2 className="mt-6 text-3xl font-black leading-[1.15] tracking-tight text-ink-primary md:text-4xl">
          {c.headline}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-ink-secondary md:text-lg">
          {c.subhead}
        </p>
      </div>

      {/* Two day cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {c.days.map((day, i) => (
          <FadeInUp key={day.title} delay={i * 0.12}>
            <DayCard
              index={i}
              title={day.title}
              subtitle={day.subtitle}
              hours={day.hours}
              blocks={day.blocks}
            />
          </FadeInUp>
        ))}
      </div>

      {/* Includes — single card with checklist */}
      <FadeInUp delay={0.1} className="mx-auto mt-10 max-w-5xl">
      <Card>
        <h3 className="text-xl font-black text-ink-primary md:text-2xl">
          {c.includesTitle}
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {c.includes.map((item, i) => {
            const Icon = includeIcons[i] ?? Check;
            return (
              <li key={item} className="flex items-start gap-4">
                <IconBadge icon={Icon} size="sm" angle={metallicAngle(i + 3)} />
                <span className="pt-1 text-base leading-snug text-ink-secondary">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </Card>
      </FadeInUp>

      {/* Bonus card */}
      <FadeInUp delay={0.15} className="mx-auto mt-6 max-w-5xl">
      <Card tone="highlight">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
          <IconBadge icon={Sparkles} size="lg" angle={135} />
          <div className="flex-1">
            <p className="text-xs font-black uppercase tracking-eyebrow text-gold">
              {c.bonus.label}
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-primary md:text-lg">
              {c.bonus.text}
            </p>
          </div>
        </div>
      </Card>
      </FadeInUp>
    </Section>
  );
}
