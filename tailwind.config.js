/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F4F7FB",
          100: "#E5ECF5",
          200: "#C9D7E8",
          300: "#A2BBD5",
          400: "#7396BC",
          500: "#4F769F",
          600: "#385C82",
          700: "#274865",
          800: "#123050",
          900: "#071D36",
          950: "#031226",
        },
        gold: {
          50: "#FCF8EF",
          100: "#F7EED8",
          200: "#F0DDB0",
          300: "#E5C47D",
          400: "#D7AA50",
          500: "#C89B3C",
          600: "#AA7D2E",
          700: "#865E25",
          800: "#6F4C23",
          900: "#5D401F",
        },
      },
    },
  },
  plugins: [],
};