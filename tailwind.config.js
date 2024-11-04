/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22D45D',
          dark: '#1CB04D',
          light: '#23DB60',
        },
        secondary: {
          DEFAULT: '#3fb749',
          dark: '#126E30',
          deeper: '#0C4A21',
        },
        neutral: {
          light: '#F7FAFC',
          DEFAULT: '#EDF2F7',
          dark: '#CBD5E0',
          darker: '#2D3748',
        },
        accent: {
          pink: '#E53E3E',
          blue: '#3182CE',
        },
      },
    },
  },
  plugins: [],
};
