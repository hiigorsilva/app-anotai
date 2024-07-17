/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          '"Archivo", sans-serif'
        ],
      },
      backgroundImage: {
        'logo': "url('/images/logo.svg')",
        'favicon': "url('/images/favicon.svg')",
      },
    },
  },
  plugins: [],
}