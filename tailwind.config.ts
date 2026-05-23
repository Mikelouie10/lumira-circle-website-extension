import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FDFCF8",
          100: "#FAF8F2",
          200: "#F5F0E4",
          300: "#EDE5D0",
        },
        blush: {
          50: "#FDF5F3",
          100: "#FAEAE6",
          200: "#F4D0C8",
          300: "#EBB5A8",
          400: "#DE9080",
          500: "#C96A56",
          600: "#B05542",
        },
        sage: {
          50: "#F4F7F4",
          100: "#E5EDE4",
          200: "#C8D9C6",
          300: "#A2BFA0",
          400: "#759E72",
          500: "#547A52",
          600: "#3F5E3D",
        },
        gold: {
          300: "#E8D5A3",
          400: "#D4B97A",
          500: "#B8955A",
          600: "#9A7A3F",
        },
        charcoal: {
          800: "#2D2926",
          900: "#1A1714",
        },
        mauve: {
          100: "#F0EAF0",
          200: "#DDD0DD",
          300: "#C4AEC4",
          400: "#A689A6",
          500: "#856685",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
        accent: ["var(--font-dm-serif)", "serif"],
      },
      letterSpacing: {
        widest: "0.3em",
        "ultra-wide": "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grain-texture":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
