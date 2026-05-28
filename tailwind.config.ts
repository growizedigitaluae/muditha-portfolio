import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#0B0C10",
          charcoal: "#1F2833",
          gray: "#C5C6C7",
          orange: "#FF5A09", // Premium Industrial Orange
          blue: "#45A29E"
        }
      }
    },
  },
  plugins: [],
};
export default config;