/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      textColor: theme => ({
        ...theme("colors"),
        pri: "#05a081",
        sec: "#232a34",
        tet: "#0963e7",
        priWhite: "#ffffff"
      }),
      backgroundColor: theme => ({
        ...theme("colors"),
        pri: "#05a081",
        sec: "#232a34",
        tet: "#0963e7",
        priWhite: "#ffffff"
      }),
      height: {
        hero: "31.0rem",
        "42": "4.2rem",
        "53": "5.3rem",
        "138": "13.81rem",
        "153": "15.3rem",
        "212": "21.2rem",
        "335": "33.56rem",
        "624": "62.4rem"
      },
      width: {
        "19": "19rem",
        "222": "22.2rem",
        "144": "14.46rem",
        "351": "35.5rem",
        "448": "44.8rem",
        "483": "48.3rem"
      },
      placeholderColor: {
        pri: "#05a081",
        sec: "#232a34",
        tet: "#0963e7",
        priWhite: "#ffffff"
      },
      borderColor: theme => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        pri: "#05a081",
        sec: "#232a34",
        tet: "#0963e7",
        priWhite: "#ffffff"
      }),
      fontSize: {
        xs: ["1.4rem", "2.359rem"],
        sm: ["1.2rem", "1.5rem"],
        lg: ["2.4rem", "2.9rem"],
        lgmd: ["4.2rem", "5.143rem"],
        xl: ["5.6667rem;", "6.9rem"]
      },
      borderColor: theme => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        gray_dark: "rgba(51, 55, 88, 0.3)"
      })
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
