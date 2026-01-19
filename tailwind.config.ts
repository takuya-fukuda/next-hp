import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "\"Yu Gothic\"",
          "\"YuGothic\"",
          "\"Hiragino Kaku Gothic Pro\"",
          "Meiryo",
          "sans-serif",
        ],
        mincho: ["\"Zen Old Mincho\"", "serif"],
        oswald: ["\"Oswald\"", "sans-serif"],
      },
      boxShadow: {
        soft: "0 0 20px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
