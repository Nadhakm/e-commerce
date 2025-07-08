/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fancy: ['"Comic Neue"', 'cursive'],
      },
      colors: {
        pastelPink: '#FFD1DC',
        pastelBlue: '#D1E8FF',
        pastelGreen: '#DFFFD6',
        pastelYellow: '#FFFACD',
        pastelPurple: '#EFD6FF',
      },
    },
  },
  plugins: [],
}
