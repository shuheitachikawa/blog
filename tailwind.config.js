module.exports = {
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      main: "#1D1E36",
    }),
    textColor: {
      lightBlue: "#C5CAE9",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
