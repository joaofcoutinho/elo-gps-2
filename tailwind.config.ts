import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#0A1628",
          abyss: "#050B1A",
          surface: "#0F1E33",
          elevated: "#142840",
        },
        gold: {
          DEFAULT: "#994F24",
          soft: "#BD6534",
          dim: "#5C2F15",
        },
        ink: {
          primary: "#FFFFFF",
          secondary: "#C7CDD9",
          muted: "#7B8497",
        },
      },
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      maxWidth: {
        container: "72rem",
      },
      boxShadow: {
        card: "0 4px 24px -12px rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.04)",
        "card-gold":
          "0 8px 32px -12px rgba(153,79,36,0.35), inset 0 1px 0 0 rgba(189,101,52,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
