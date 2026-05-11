"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { copy } from "@/lib/copy";

export function CTAFinal() {
  const c = copy.ctaFinal;
  return (
    <section
      className="relative isolate overflow-hidden bg-ambient-final py-24 md:py-32"
      aria-labelledby="cta-final-heading"
    >

      <div className="relative mx-auto flex max-w-container flex-col items-center px-6 text-center md:px-8">
        {/* Closing — emerges from small scale, the metallic line shines as it lands */}
        <motion.h2
          id="cta-final-heading"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "center" }}
          className="max-w-3xl text-3xl font-black leading-[1.1] tracking-tight md:text-5xl"
        >
          <span className="block text-ink-primary">{c.closingLine1}</span>
          <motion.span
            initial={{ backgroundPosition: "100% 50%" }}
            whileInView={{ backgroundPosition: "0% 50%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.45, ease: "easeOut" }}
            className="mt-2 block bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(189,101,52,0.35)]"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #FFFFFF 0%, #FFFFFF 38%, #BD6534 46%, #F0C28A 50%, #BD6534 54%, #FFFFFF 62%, #FFFFFF 100%)",
              backgroundSize: "300% 100%",
            }}
          >
            {c.closingLine2}
          </motion.span>
        </motion.h2>

        <FadeInUp delay={0.2} className="mt-10">
          {/* TODO: trocar href para URL do checkout (Hotmart/Eduzz/Stripe) quando definido */}
          <Button
            href="#investimento"
            size="lg"
            variant="primary"
            cta="final"
            ariaLabel="Quero minha vaga na imersão"
            className="group gap-0 transition-[gap] duration-300 ease-out hover:gap-2"
          >
            {c.ctaLabel}
            <ArrowRight
              className="h-4 w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-4 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Button>
        </FadeInUp>

        <FadeInUp delay={0.35}>
          <p className="mt-8 max-w-xl text-sm text-ink-muted">{c.microcopy}</p>
        </FadeInUp>
      </div>
    </section>
  );
}
