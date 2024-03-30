/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#533420",
        cream: "#F5E8D3",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
