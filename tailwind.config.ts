import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Gloock", "serif"],
      cursive: ["League Script", "cursive"],
    },
  },
  plugins: [],
};
export default config;
