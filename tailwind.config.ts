import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        haven: {
          50: '#f4fbf7',
          100: '#dff4e8',
          500: '#4a9b6f',
          600: '#3b7f5a'
        },
        sun: {
          100: '#fff0dc',
          500: '#f59f42'
        }
      }
    }
  },
  plugins: []
};

export default config;
