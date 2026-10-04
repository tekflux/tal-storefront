/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1F3D',
          mid: '#1A3A6B',
          soft: '#1E4080',
        },
        green: {
          DEFAULT: '#3A8C2F',
          bright: '#52C41A',
          light: '#7ED053',
        },
        gold: {
          DEFAULT: '#C8A04A',
          light: '#E2C070',
        },
        cream: '#F9F6F0',
        'off-white': '#F2EEE6',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
