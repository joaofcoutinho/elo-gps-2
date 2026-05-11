import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { copy } from "@/lib/copy";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-navy-deep">
      <Image
        src="/palestra.png"
        alt=""
        role="presentation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_25%] opacity-90"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/30 to-navy-abyss/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep from-0% via-navy-deep/70 via-50% to-transparent to-95%" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-container px-6 pt-28 pb-20 md:px-8 md:pt-32 md:pb-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <FadeInUp delay={0}>
            <SectionEyebrow>{copy.hero.eyebrow}</SectionEyebrow>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight text-ink-primary md:text-4xl lg:text-5xl">
              {copy.hero.headline}
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-secondary md:text-base">
              {copy.hero.subhead}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.35} className="mt-8 flex flex-col items-center gap-5">
            {/* TODO: trocar href para URL do checkout (Hotmart/Eduzz/Stripe) quando definido */}
            <Button
              href="#investimento"
              size="lg"
              variant="primary"
              cta="hero"
              ariaLabel="Quero minha vaga — ir para investimento"
              className="group gap-0 transition-[gap,padding] duration-300 ease-out hover:gap-2"
            >
              {copy.hero.ctaLabel}
              <ArrowRight
                className="h-4 w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-4 group-hover:opacity-100"
                aria-hidden="true"
              />
            </Button>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
