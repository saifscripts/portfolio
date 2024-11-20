import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'var(--font-jetbrains-mono)',
    },
    extend: {
      screens: {
        xs: '400px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
} satisfies Config;
