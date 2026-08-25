import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ios: {
          blue: "#007AFF",
          blueText: "#0066CC",
          bg: "#FBFBFD",
          label: "#1D1D1F",
          secondary: "#6E6E73",
          tertiary: "#8E8E93",
        },
      },
      fontFamily: {
        display: ["var(--font-body)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        ios: "16px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
