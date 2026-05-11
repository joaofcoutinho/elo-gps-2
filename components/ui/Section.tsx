"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  noContainer?: boolean;
  noMotion?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  noContainer = false,
  noMotion = false,
}: Props) {
  const inner = noContainer ? (
    children
  ) : (
    <div
      className={cn(
        "mx-auto w-full max-w-container px-6 md:px-8",
        containerClassName,
      )}
    >
      {children}
    </div>
  );

  if (noMotion) {
    return (
      <section id={id} className={cn("py-24 md:py-32", className)}>
        {inner}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("py-24 md:py-32", className)}
    >
      {inner}
    </motion.section>
  );
}
