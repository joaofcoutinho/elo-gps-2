"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
  className?: string;
};

/**
 * Reusable scroll-triggered fade-in + slight Y offset.
 * Drop around any element to animate it into view once.
 */
export function FadeInUp({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  amount = 0.3,
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
