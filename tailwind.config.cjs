/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#828282",
        tertiary: "#F6F6EF",
        "black-100": "#222222",
        "black-200": "#000000",
        "white-100": "#F6F6EF",
        accent: "#FF6600",
        "accent-dark": "#cc5200",
      },
      screens: {
        xs: "450px",
      },
      maxWidth: {
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
