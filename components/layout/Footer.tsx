import Image from "next/image";
import { Instagram } from "lucide-react";
import { copy } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy-abyss py-10">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:px-8 md:text-left">
        <span className="inline-flex items-center overflow-visible">
          <Image
            src="/Logo_%5BELOEDUCACION%5DLogo_brancoeamarelo01.png"
            alt="Elo Educación"
            width={320}
            height={96}
            className="h-8 w-auto origin-left scale-[4.5] md:h-10"
          />
        </span>
        <p className="text-xs text-ink-muted">{copy.footer.copyright}</p>
        <a
          href="https://www.instagram.com/elo_education/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-ink-muted transition-colors hover:text-gold"
          aria-label="Seguir Elo Education no Instagram"
        >
          <Instagram className="h-4 w-4" strokeWidth={2} />
          @elo_education
        </a>
      </div>
    </footer>
  );
}
