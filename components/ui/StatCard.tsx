"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

type Props = {
  index: number;
  tag?: string;
  value: string;
  label: string;
  source: string;
  image: string;
};

export function StatCard({
  index,
  tag,
  value,
  label,
  source,
  image,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
    >
      <Card
        interactive
        noPadding
        className="relative flex h-full min-h-[380px] flex-col overflow-hidden isolate"
      >
        {/* Top — photo */}
        <div className="relative h-44 w-full shrink-0 overflow-hidden md:h-40 lg:h-44">
          <Image
            src={image}
            alt=""
            role="presentation"
            fill
            sizes="(min-width: 768px) 25vw, 100vw"
            className="object-cover"
          />
          {/* soft fade into the content panel below */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-navy-surface" />
        </div>

        {/* Bottom — solid content panel */}
        <div className="flex flex-1 flex-col gap-4 bg-navy-surface px-5 py-5 md:px-6">
          <div className="flex flex-col">
            {tag && (
              <span className="text-[10px] font-black uppercase tracking-eyebrow text-gold-soft">
                {tag}
              </span>
            )}
            <div className="mt-2 h-px w-10 bg-gradient-to-r from-gold-soft via-gold to-transparent" />
            <div
              className="mt-2.5 bg-clip-text text-2xl font-black leading-none tracking-tight text-transparent md:text-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #5C2F15 0%, #994F24 25%, #BD6534 45%, #F0C28A 55%, #BD6534 70%, #994F24 100%)",
              }}
            >
              {value}
            </div>
            <p className="mt-2.5 text-sm leading-snug text-ink-primary">
              {label}
            </p>
          </div>

          <div className="mt-auto border-t border-white/[0.08] pt-3">
            <p className="text-[10px] font-bold uppercase tracking-eyebrow text-ink-muted">
              Fonte
            </p>
            <p className="mt-1 text-xs leading-snug text-ink-muted">{source}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
