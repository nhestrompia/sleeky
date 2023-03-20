/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // cal: ["Cal Sans", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
