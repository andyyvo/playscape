import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        black: "#3C3C3C",
        primary: "#FCA807",
        primary_alt: "#F27A84",
        secondary: "#7DB2AD",
        secondary_alt: "#6C99B0",
      },
      fontFamily: {
        dm_sans: ['DM Sans', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        open_sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
