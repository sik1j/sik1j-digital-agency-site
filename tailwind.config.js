/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#E6E0FE",
      pink: "#F8DCE0",
      purple: "#F5D6FA",
      black: "#000",
      white: "#FFF",
      gray: "#E3E6E9",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
  },
};
