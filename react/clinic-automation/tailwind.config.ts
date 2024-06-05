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
        'dark-blue': '#283593',
        'light-blue': '#748ffc',
        'light-gray': '#e9ecef',
        'dark-green': '#4caf50', 
      }
    },
  },
  plugins: [],
};
export default config;
