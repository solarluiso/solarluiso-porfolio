/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkTeal: "#172725",
        darkGray: "#181a1b",
        darkBrown: "#291b00",
        darkRed: "#2e0909",
        darkBrownAlpha: "rgba(41, 27, 0, 0.41)",
      },
    },
  },
  plugins: [],
};
