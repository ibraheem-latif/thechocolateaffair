import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#2C1F1A',
        mocha: '#6B5148',
        'dusty-mocha': '#9B8574',
        'rose-gold': '#C9918A',
        'rose-gold-light': '#D4A89E',
        sand: '#E4D5C7',
        'rich-amber': '#8D6F57',
        vanilla: '#F8F0E6',
        champagne: '#F5E1D0',
        cream: '#FFFBF5',
        shell: '#F0DDD0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
