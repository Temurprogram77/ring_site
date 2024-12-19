/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./public//*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "header-color": "#eceef3",
        "img-color": "#fafafc",
        "modal-color": "#F8F9FD",
      },
      textColor: {
        "hover-text": "#000000",
        "text-grey": "#7f7f7f",
      },
      borderColor: {
        "line-color": "#9EAFC2",
        "input-border": "#dedcdc",
      },
    },
  },
  plugins: [],
};
