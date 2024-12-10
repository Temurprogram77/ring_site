/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./public//*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "header-color": "#eceef3",
      },
      textColor: {
        "text-grey": "#7f7f7f",
      },
    },
  },
  plugins: [],
};
