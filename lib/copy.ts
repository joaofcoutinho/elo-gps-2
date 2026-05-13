/**
 * SINGLE SOURCE OF TRUTH for all page copy.
 * Copy is final per brief — do not paraphrase or extend.
 */

export type Hero = {
  eyebrow: string;
  headline: string;
  subhead: string;
  ctaLabel: string;
};

export type ParaQuem = {
  eyebrow: string;
  headline: string;
  lead: string;
  items: readonly { title: string; description: string }[];
  naoEParaVoce: {
    title: string;
    items: readonly string[];
  };
};

export type StatItem = {
  tag: string;
  value: string;
  label: string;
  source: string;
};

export type PorQueAgora = {
  eyebrow: string;
  headline: string;
  stats: readonly StatItem[];
  closer: string;
};

export type QuemEArthur = {
  eyebrow: string;
  name: string;
  subhead: string;
  bio: readonly string[];
  credentials: readonly string[];
  quote: { text: string; author: string };
};

export type DaySchedule = {
  title: string;
  subtitle: string;
  hours: string;
  blocks: readonly { label: string; text: string }[];
};

export type GradeDosDias = {
  eyebrow: string;
  headline: string;
  subhead: string;
  days: readonly [DaySchedule, DaySchedule];
  includesTitle: string;
  includes: readonly string[];
  bonus: { label: string; text: string };
};

export type Investimento = {
  eyebrow: string;
  label: string;
  price: string;
  microcopy: string;
  installment: string;
  ctaLabel: string;
  breakdownTitle: string;
  breakdown: readonly string[];
};

export type CTAFinal = {
  quote: { text: string; author: string };
  closingLine1: string;
  closingLine2: string;
  ctaLabel: string;
  microcopy: string;
};

export type Header = {
  brand: string;
  social: string;
  ctaLabel: string;
  nav: readonly { label: string; href: string }[];
};

export type Footer = {
  copyright: string;
  brand: string;
};

export const copy = {
  meta: {
    title: "Imersão Elo High Ticket · com Arthur Galvão",
    description:
      "Imersão presencial de 2 dias com Arthur Galvão. Posicionamento premium para médicos, gestores e profissionais da saúde que querem ser reconhecidos como referência e cobrar pelo valor que entregam.",
    ogImage: "/og-image.jpg",
    locale: "pt-BR",
  },

  header: {
    brand: "IMERSÃO ELO",
    social: "@elo_education",
    ctaLabel: "Quero minha vaga",
    nav: [
      { label: "Para quem é", href: "#para-quem" },
      { label: "Contexto", href: "#contexto" },
      { label: "Mentor", href: "#mentor" },
      { label: "Grade", href: "#grade" },
      { label: "Investimento", href: "#investimento" },
    ],
  } satisfies Header,

  hero: {
    eyebrow: "IMERSÃO PRESENCIAL · 2 DIAS · VAGAS LIMITADAS",
    headline: "O mercado da saúde respeita quem sabe se posicionar.",
    subhead:
      "Imersão Elo High Ticket — o método de Arthur Galvão para médicos, gestores e profissionais da saúde que querem ser reconhecidos como referência premium e cobrar pelo valor que entregam.",
    ctaLabel: "QUERO MINHA VAGA",
  } satisfies Hero,

  paraQuem: {
    eyebrow: "PARA QUEM É",
    headline:
      "Esta imersão é para médicos que já são excelentes — e estão prontos para serem reconhecidos como tal.",
    lead: "Se você entrega resultados mas o mercado ainda te trata como mais um, o problema não é técnico. É de posicionamento.",
    items: [
      {
        title: "Você tem 5+ anos de carreira sólida",
        description:
          "Domina a técnica e entrega resultado — mas o mercado ainda te coloca no mesmo nível que profissionais com metade da sua bagagem.",
      },
      {
        title: "Quer clientes de alto ticket",
        description:
          "Quer encher a agenda com pacientes que pagam acima de R$ 1.000 na consulta e investem R$ 30K+ em tratamentos — sem precisar reduzir preço para conquistar.",
      },
      {
        title: "Cansou de competir por preço",
        description:
          "Está farto de ouvir “tá caro” e ser comparado com clínicas populares. Sabe que sua entrega vale mais — só falta o mercado enxergar.",
      },
      {
        title: "Quer crescer o número de clientes particulares",
        description:
          "Não quer mais depender de tabela de plano nem trocar finais de semana por receita. Quer um consultório que funciona pela autoridade, não pelo volume.",
      },
      {
        title: "Quer ser referência na sua especialidade",
        description:
          "Quer que pacientes te procurem pelo nome, indiquem sem comparar com mais ninguém — e que sua marca tenha peso assim que você entra na sala.",
      },
    ],
    naoEParaVoce: {
      title: "Não é para você se",
      items: [
        "Está começando a carreira e ainda não tem volume mínimo de atendimentos",
        "Procura fórmula mágica de tráfego pago ou marketing de curto prazo",
        "Não está disposto a defender e cobrar pelo próprio valor",
        "Quer copiar o que outros médicos fazem em vez de construir uma marca única",
      ],
    },
  } satisfies ParaQuem,

  porQueAgora: {
    eyebrow: "O CONTEXTO",
    headline:
      "O mercado da saúde no Brasil nunca esteve mais aquecido — nem mais competitivo.",
    stats: [
      {
        tag: "Mercado",
        value: "R$ 348,3 bi",
        label: "em volume de negócios na saúde",
        source: "IPC Maps · Índice de Potencial de Consumo, 2022",
      },
      {
        tag: "Posição",
        value: "2º lugar",
        label: "mundial em cirurgias plásticas",
        source: "Sociedade Internacional de Cirurgia Plástica (ISAPS)",
      },
      {
        tag: "Projeção",
        value: "+115%",
        label: "de aumento de milionários no Brasil até 2026",
        source: "Global Wealth Report, 2022",
      },
      {
        tag: "Consumo",
        value: "+51,74%",
        label: "de crescimento no mercado de luxo até 2030",
        source: "Associação Brasileira das Empresas de Luxo (Abrael)",
      },
    ],
    closer:
      "O dinheiro está na mesa. A pergunta é: você está posicionado para receber a parte que cabe a quem entrega excelência — ou continua dividindo o mesmo bolo de quem entrega o mínimo?",
  } satisfies PorQueAgora,

  quemEArthur: {
    eyebrow: "O MENTOR",
    name: "Arthur Galvão",
    subhead: "Especialista em posicionamento de marcas premium",
    bio: [
      "Há mais de 15 anos conduz empresários a se posicionarem como referências premium em seus mercados — escalando negócios e cobrando valores acima da média dos concorrentes.",
      "Criador do Perceptivismo no Brasil, premiado no Brasil Design Awards (a maior premiação de design do país), Conselheiro Mantenedor da Junior Achievement ES e autor de “O que acontece quando você se valoriza” — 365 lições sobre como quebrar o feitiço da invisibilidade de valor.",
      "Ao lado da sócia Licia Busatto, lidera um movimento de empreendedores focados no mercado de alto valor que defendem a excelência como caminho para o reconhecimento.",
    ],
    credentials: [
      "Criador do Perceptivismo no Brasil",
      "Premiado no Brasil Design Awards",
      "Conselheiro Mantenedor da Junior Achievement ES",
      "Autor de “O que acontece quando você se valoriza”",
    ],
    quote: {
      text: "Posicionamento não é sobre dizer às pessoas o que devem fazer. É sobre mostrar até onde elas podem chegar.",
      author: "Arthur Galvão",
    },
  } satisfies QuemEArthur,

  gradeDosDias: {
    eyebrow: "O QUE VOCÊ VAI CONSTRUIR",
    headline: "O que você vai construir em 2 dias de imersão.",
    subhead:
      "16 horas de mentoria presencial, com método aplicado e devolutivas em tempo real.",
    days: [
      {
        title: "DIA 01",
        subtitle: "DIAGNÓSTICO E POSICIONAMENTO",
        hours: "Das 09h às 18h",
        blocks: [
          {
            label: "MANHÃ",
            text: "Diagnóstico da percepção atual de valor — onde sua marca está sendo subvalorizada e por quê.",
          },
          {
            label: "TARDE",
            text: "Construção do seu posicionamento premium — método Perceptivismo aplicado ao mercado da saúde.",
          },
          {
            label: "ENCERRAMENTO",
            text: "Definição do seu cliente de alto valor: quem ele é, onde está, como pensa.",
          },
        ],
      },
      {
        title: "DIA 02",
        subtitle: "CONVERSÃO E ESCALA",
        hours: "Das 09h às 18h",
        blocks: [
          {
            label: "MANHÃ",
            text: "Comunicação de valor — como apresentar consultas, procedimentos e tratamentos High Ticket sem desconto e sem objeção.",
          },
          {
            label: "TARDE",
            text: "Captação e fechamento de pacientes premium — técnicas de facilitação aplicadas.",
          },
          {
            label: "ENCERRAMENTO",
            text: "Plano de 90 dias — seu mapa de execução pós-imersão.",
          },
        ],
      },
    ],
    includesTitle: "O que está incluído",
    includes: [
      "Mentoria presencial em grupo (16 horas)",
      "Workbook impresso exclusivo",
      "Todos os slides da imersão em PDF",
      "Coffee break premium nos dois dias",
      "Cobertura fotográfica profissional do evento",
      "Acesso a todos os agentes de I.A. proprietários por 30 dias",
      "Acesso ao grupo de suporte exclusivo no WhatsApp por 30 dias",
    ],
    bonus: {
      label: "BÔNUS ELO EDUCATION",
      text: "1 ano de hot seats via Zoom + treinamento estendido para até 4 pessoas da sua equipe.",
    },
  } satisfies GradeDosDias,

  investimento: {
    eyebrow: "VISÃO DE FUTURO",
    label: "INVESTIMENTO",
    price: "R$ 5.000",
    microcopy: "por pessoa · plano inicial de acesso",
    installment: "Em até 4x de R$ 1.250 sem juros no cartão",
    ctaLabel: "GARANTIR MINHA VAGA",
    breakdownTitle: "O que você está levando",
    breakdown: [
      "16h de mentoria presencial com Arthur Galvão",
      "Workbook + slides + cobertura fotográfica profissional",
      "30 dias de agentes de I.A. proprietários",
      "30 dias de suporte WhatsApp direto",
      "1 ano de hot seats mensais via Zoom (bônus exclusivo)",
      "Treinamento estendido para até 4 pessoas da sua equipe",
    ],
  } satisfies Investimento,

  ctaFinal: {
    quote: {
      text: "Excelentes vão exigir de você excelência. Medianos vão te pedir para dar jeitinho.",
      author: "Arthur Galvão",
    },
    closingLine1: "Pare de competir por preço.",
    closingLine2: "Comece a ser escolhido por valor.",
    ctaLabel: "QUERO MINHA VAGA NA IMERSÃO",
    microcopy:
      "Vagas limitadas · Próxima turma com data confirmada após inscrição · R$ 5.000 em até 4x",
  } satisfies CTAFinal,

  footer: {
    copyright: "© 2026 Elo Education. Todos os direitos reservados.",
    brand: "Imersão Elo High Ticket",
  } satisfies Footer,
} as const;
