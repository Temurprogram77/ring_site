/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./public//*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "header-color": "#eceef3",
        "img-color": "#fafafc",
      },
      textColor: {
        "hover-text": "#000000",
        "text-grey": "#7f7f7f",
      },
      borderColor: {
        "input-border": "#dedcdc",
      }
    },
  },
  plugins: [],
};
