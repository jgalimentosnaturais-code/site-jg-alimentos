import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#854f1a',
        'primary-container': '#a26730',
        secondary: '#52652a',
        'secondary-container': '#d4eca2',
        surface: '#faf9f9',
        'on-surface': '#1a1c1c',
        'surface-container-low': '#f4f3f3',
        outline: '#847468',
        'inverse-surface': '#2e3131',
        'inverse-on-surface': '#f0f1f1',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        xl: '0.5rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        editorial: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
