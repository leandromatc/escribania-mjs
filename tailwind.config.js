/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#8fa07a",
        secondary: "#555e48",
        bgColor: "#e7eadf",
        emphasis: "#f2ffdc",
        textDark: "#353a2d",
      },
      backgroundImage: {
        hero: "url('assets/images/bg-hero.jpg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
