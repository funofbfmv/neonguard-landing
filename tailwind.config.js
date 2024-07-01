/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'app-bg': '#f0f0f0', // Цвет фона приложения
      },
    },
  },
  plugins: [],
}