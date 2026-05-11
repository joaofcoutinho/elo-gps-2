export const ANCHORS = {
  paraQuem: "para-quem",
  contexto: "contexto",
  mentor: "mentor",
  grade: "grade",
  investimento: "investimento",
} as const;

export type AnchorKey = keyof typeof ANCHORS;

export const CTA_DATA = {
  hero: "hero",
  qualificacao: "qualificacao",
  investimento: "investimento",
  final: "final",
  header: "header",
} as const;

export type CtaSource = keyof typeof CTA_DATA;
