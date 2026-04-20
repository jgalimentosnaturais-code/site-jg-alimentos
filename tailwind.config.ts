import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F74AD',
        'primary-container': '#7A9FD4',
        secondary: '#3A6B50',
        'secondary-container': '#B8D9C6',
        surface: '#F5F8FC',
        'on-surface': '#1A2333',
        'surface-container-low': '#EBF0F8',
        outline: '#7A8FA8',
        'inverse-surface': '#1A2840',
        'inverse-on-surface': '#E2EAF5',
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
