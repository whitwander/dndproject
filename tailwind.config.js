/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'dragon': "url('dist/images/fundo.png')",
      }
    },
  },
  plugins: [],
}

