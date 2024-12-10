/ @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public//*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundColor:{
        "header-color": "#9EAFC2",
      },
      textColor:{
        "text-grey": "#7f7f7f",
      }
    },
  },
  plugins: [],
}
