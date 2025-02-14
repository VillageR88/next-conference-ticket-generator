import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        screen1024: '1024px',
      },
      fontFamily: {
        dmSans: ['var(--font-dm-sans)'],
      },
      colors: {},
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
