import Image from "next/image";
import { Compass, Trophy, Building2, BookOpen, Quote, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { copy } from "@/lib/copy";
import { ANCHORS } from "@/lib/constants";

const credentialIcons: readonly LucideIcon[] = [
  Compass,
  Trophy,
  Building2,
  BookOpen,
];

export function QuemEArthur() {
  const c = copy.quemEArthur;
  return (
    <Section id={ANCHORS.mentor} className="bg-ambient-copper">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Portrait com quote sobreposto — desktop: direita */}
        <FadeInUp delay={0.1} className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/20 bg-navy-surface shadow-card">
            <Image
              src="/arthur/Arthur.png"
              alt="Retrato de Arthur Galvão"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />

            {/* Vinheta para legibilidade da quote */}
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent" />

            {/* Quote */}
            <figure className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <Quote
                className="h-5 w-5 text-gold-soft md:h-6 md:w-6"
                aria-hidden="true"
                strokeWidth={2}
              />
              <blockquote className="mt-3 text-base italic leading-snug text-ink-primary md:text-lg">
                {c.quote.text}
              </blockquote>
              <figcaption className="mt-4 text-xs font-bold uppercase tracking-eyebrow text-gold-soft md:text-sm">
                — {c.quote.author}
              </figcaption>
            </figure>
          </div>
        </FadeInUp>

        {/* Texto + credenciais — desktop: esquerda */}
        <FadeInUp delay={0} className="order-2 lg:order-1 lg:col-span-7">
          <SectionEyebrow tone="onCopper">{c.eyebrow}</SectionEyebrow>

          <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-ink-primary md:text-5xl">
            {c.name}
          </h2>
          <p className="mt-3 text-sm font-bold text-ink-primary md:text-base">
            {c.subhead}
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-white/90 md:text-lg">
            {c.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/arthur_galvao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/[0.08] px-5 py-2.5 text-sm font-bold text-ink-primary backdrop-blur-sm transition-colors hover:bg-white/15"
              aria-label="Seguir Arthur Galvão no Instagram"
            >
              <Instagram className="h-4 w-4" strokeWidth={2} />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-galv%C3%A3o-vamos-em-frente/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/[0.08] px-5 py-2.5 text-sm font-bold text-ink-primary backdrop-blur-sm transition-colors hover:bg-white/15"
              aria-label="Conectar com Arthur Galvão no LinkedIn"
            >
              <Linkedin className="h-4 w-4" strokeWidth={2} />
              LinkedIn
            </a>
          </div>
        </FadeInUp>
      </div>

      {/* Faixa de credenciais — full-width abaixo do grid (textos + foto) */}
      <FadeInUp delay={0.2} className="mt-12 lg:mt-16">
        <ul className="grid grid-cols-1 divide-y divide-white/15 overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-card md:grid-cols-4 md:divide-x md:divide-y-0">
          {c.credentials.map((cred, i) => {
            const Icon = credentialIcons[i] ?? Compass;
            return (
              <li
                key={cred}
                className="flex items-center gap-4 px-6 py-5 md:flex-col md:items-center md:justify-center md:gap-3 md:px-5 md:py-6 md:text-center"
              >
                <Icon
                  className="h-6 w-6 shrink-0 text-white md:h-7 md:w-7"
                  aria-hidden="true"
                  strokeWidth={2}
                />
                <span className="text-sm font-bold leading-snug text-ink-primary md:text-base">
                  {cred}
                </span>
              </li>
            );
          })}
        </ul>
      </FadeInUp>
    </Section>
  );
}
