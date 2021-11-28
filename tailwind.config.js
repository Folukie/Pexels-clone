module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      max: "500px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "rgba(255, 255, 255, 1)",
        black: "#000",
        success: "#05a081",
        primary: "#0064f9",
        secondary: "#5e5e5e",
        grey: "#232a34",
      },
      backgroundImage: {
        hero: "url('/images/background.jpeg')",
      },
    },
    screens: {
      sm: { max: "700px" },
      md: { min: "701px", max: "1024px" },
      lg: { min: "1024px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
