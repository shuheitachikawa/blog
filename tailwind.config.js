module.exports = {
  purge: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      main: ["Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      white: "#fff",
      main: "#1D1E36",
      sub: "#28294A",
      dev: "#ff844d",
      life: "#004D40",
      mainl: "#C5CAE9",
      devl: "#fff4ef",
      lifel: "#80CBC4",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      sub: "#28294A",
    }),
    textColor: {
      lightBlue: "#C5CAE9",
      white: "#fff",
      sub: "#28294A",
      black: "#333333",
      main: "#1D1E36",
      dev: "#ff844d",
      life: "#004D40",
    },
    maxWidth: {
      layout: "1052px",
      main: "722px",
      aside: "290px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
