import {
  Users,
  Notebook,
  Bot,
  MessageCircle,
  Video,
  UserPlus,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { MetallicBorder, metallicAngle } from "@/components/ui/MetallicBorder";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { copy } from "@/lib/copy";
import { ANCHORS } from "@/lib/constants";

const breakdownIcons: readonly LucideIcon[] = [
  Users,
  Notebook,
  Bot,
  MessageCircle,
  Video,
  UserPlus,
];

export function Investimento() {
  const c = copy.investimento;
  return (
    <Section id={ANCHORS.investimento} className="bg-ambient-deep">
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow>{c.eyebrow}</SectionEyebrow>
        <h2 className="mt-6 text-3xl font-black leading-[1.15] tracking-tight text-ink-primary md:text-4xl">
          O investimento.
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {/* The offer card — price + CTA */}
        <FadeInUp delay={0}>
        <Card
          tone="highlight"
          className="h-full text-center md:p-12"
        >
          <p className="text-xs font-black uppercase tracking-eyebrow text-gold">
            {c.label}
          </p>

          <p className="mt-5 text-6xl font-black tracking-tight text-ink-primary md:text-7xl">
            R$ <span className="text-gold">5.000</span>
          </p>

          <p className="mt-3 text-sm text-ink-muted">{c.microcopy}</p>

          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-navy-deep px-4 py-2 text-sm text-ink-secondary">
            <Check className="h-4 w-4 text-gold" strokeWidth={2.5} />
            {c.installment}
          </div>

          <div className="mt-10">
            {/* TODO: trocar href para URL do checkout (Hotmart/Eduzz/Stripe) quando definido */}
            <Button
              href="#investimento"
              size="lg"
              variant="primary"
              cta="investimento"
              ariaLabel="Garantir minha vaga"
              className="group w-full gap-0 transition-[gap] duration-300 ease-out hover:gap-2 sm:w-auto"
            >
              {c.ctaLabel}
              <ArrowRight
                className="h-4 w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-4 group-hover:opacity-100"
                aria-hidden="true"
              />
            </Button>
          </div>
        </Card>
        </FadeInUp>

        {/* Breakdown — what you're taking home */}
        <FadeInUp delay={0.12}>
        <Card className="h-full">
          <h3 className="text-base font-black uppercase tracking-eyebrow text-ink-primary">
            O que você está levando
          </h3>
          <ul className="mt-6 space-y-4">
            {c.breakdown.map((item, i) => {
              const Icon = breakdownIcons[i] ?? Users;
              return (
                <li key={item} className="flex items-start gap-4">
                  <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full">
                    <MetallicBorder angle={metallicAngle(i + 1)} />
                    <Icon className="relative h-4 w-4 text-white" strokeWidth={1.75} />
                  </span>
                  <span className="pt-1 text-base leading-snug text-ink-secondary">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </Card>
        </FadeInUp>
      </div>
    </Section>
  );
}
