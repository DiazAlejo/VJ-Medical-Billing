import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Green: #71c15b (dominant color 1)
          50: '#f0faf1',
          100: '#d4f2d9',
          200: '#a9e5b3',
          300: '#7ed88d',
          400: '#71c15b',
          500: '#5fa04b',
          600: '#4d803c',
          700: '#3a602d',
          800: '#27401e',
          900: '#14200f',
        },
        secondary: {
          // Yellow: #f4c01d (dominant color 2)
          50: '#fefbf0',
          100: '#fdf5d8',
          200: '#fbebb1',
          300: '#f9e18a',
          400: '#f4c01d',
          500: '#c39a17',
          600: '#927412',
          700: '#614e0c',
          800: '#312706',
          900: '#181303',
        },
        accent: {
          // Pink: #da1871
          pink: '#da1871',
          'pink-light': '#e84d8f',
          'pink-dark': '#ae135a',
          // Violet: #995fa3
          violet: '#995fa3',
          'violet-light': '#b37fb9',
          'violet-dark': '#7a4c82',
          // Blue: #05a3de
          blue: '#05a3de',
          'blue-light': '#37b5e5',
          'blue-dark': '#0482b1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

