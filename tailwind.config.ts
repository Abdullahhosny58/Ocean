import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem", // => 24px
      },
      transitionDuration: {
        DEFAULT: "300ms", // Defaults to 0.3s
      },
    },
  },
  plugins: [],
};
export default config;
