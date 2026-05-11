"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-navy-deep/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid h-16 max-w-container grid-cols-[1fr_auto_1fr] items-center px-6 md:h-20 md:px-8">
        <Link
          href="/"
          aria-label="Imersão Elo · página inicial"
          className="inline-flex items-center overflow-visible justify-self-start"
        >
          <Image
            src="/Logo_%5BELOEDUCACION%5DLogo_brancoeamarelo01.png"
            alt="Elo Educación"
            width={320}
            height={96}
            priority
            className="h-8 w-auto origin-left scale-[4.5] md:h-10"
          />
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 justify-self-center lg:flex"
          aria-label="Navegação principal"
        >
          {copy.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-ink-secondary transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* TODO: trocar href para URL do checkout (Hotmart/Eduzz/Stripe) quando definido */}
        <Button
          href="#investimento"
          size="default"
          variant="primary"
          cta="header"
          ariaLabel="Quero minha vaga — ir para investimento"
          className="hidden justify-self-end sm:inline-flex"
        >
          {copy.header.ctaLabel}
        </Button>
      </div>
    </header>
  );
}
