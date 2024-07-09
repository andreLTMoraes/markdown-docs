import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: "#e1eadc",
          dark: "#060e03"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
