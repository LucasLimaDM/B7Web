import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {opacity: '0', transform: 'translateY(-2px)'},
          '100%': {opacity: '1', transform: 'translateY(0px)'},
        }
      },

      animation: {
        appear: 'appear 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
};
export default config;
