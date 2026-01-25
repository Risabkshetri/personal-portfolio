/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#475569", // slate-600
        tertiary: "#f1f5f9", // slate-100
        "black-100": "#1e293b", // slate-800
        "black-200": "#0f172a", // slate-900
        "white-100": "#f1f5f9", // slate-100 (used for backgrounds now)
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
