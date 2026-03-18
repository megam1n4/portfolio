import type { Config } from "tailwindcss";

const config: Config = {
  // If using Tailwind v3, or if you configure the v4 backward compatibility plugin
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "anti-gravity": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "anti-gravity-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "floating": "anti-gravity 4s ease-in-out infinite",
        "floating-subtle": "anti-gravity-subtle 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
