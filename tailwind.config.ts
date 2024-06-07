import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {fontFamily:{
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
      backgroundImage: {
        "hero-image": "url('/images/foto\ de\ piscina.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
