/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7DC5CF',
        secondary: '#268C9E',
        tertiary: '#024158',
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
