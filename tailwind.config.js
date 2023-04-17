/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roman: ["Source Serif Variable Roman", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
