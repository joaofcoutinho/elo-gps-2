"use client";

import { motion } from "framer-motion";
import { Sun, Sunset, Moon, Clock, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

type Block = { label: string; text: string };

type Props = {
  index: number;
  title: string;
  subtitle: string;
  hours: string;
  blocks: readonly Block[];
};

const blockIcons: readonly LucideIcon[] = [Sun, Sunset, Moon];

export function DayCard({ index, title, subtitle, hours, blocks }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col gap-8">
        <header>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-eyebrow text-gold">
              {title}
            </span>
            <span className="h-px flex-1 bg-white/[0.06]" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-2xl font-black leading-tight text-ink-primary md:text-3xl">
            {subtitle}
          </h3>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-navy-deep px-3 py-1.5 text-xs text-ink-secondary">
            <Clock className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
            {hours}
          </div>
        </header>

        <ul className="flex flex-1 flex-col gap-6">
          {blocks.map((block, i) => {
            const Icon = blockIcons[i] ?? Sun;
            return (
              <li
                key={block.label}
                className="rounded-xl border border-white/[0.05] bg-navy-deep/50 p-5"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-4 w-4 text-gold"
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-eyebrow text-gold">
                    {block.label}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink-secondary">
                  {block.text}
                </p>
              </li>
            );
          })}
        </ul>
      </Card>
    </motion.div>
  );
}
