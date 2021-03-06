module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#EF476F",
          100: "#FBCBD7",
          200: "#F8AABD",
          300: "#F589A3",
          400: "#F26889",
          500: "#EF476F",
          600: "#C43A5B",
          700: "#992D47",
          800: "#6E2133",
          900: "#43141F",
        },
        yellow: {
          DEFAULT: "#FFD166",
          100: "#FFF2D4",
          200: "#FFEAB9",
          300: "#FFE29D",
          400: "#FFD982",
          500: "#FFD166",
          600: "#D1AB54",
          700: "#A38641",
          800: "#75602F",
          900: "#473B1D",
        },
        green: {
          DEFAULT: "#06D6A0",
          100: "#B9F4E4",
          200: "#8CECD3",
          300: "#60E5C2",
          400: "#33DDB1",
          500: "#06D6A0",
          600: "#05AF83",
          700: "#048966",
          800: "#03624A",
          900: "#023C2D",
        },
        blue: {
          DEFAULT: "#118AB2",
          100: "#BCDEE9",
          200: "#92C9DC",
          300: "#67B4CE",
          400: "#3C9FC0",
          500: "#118AB2",
          600: "#0E7192",
          700: "#0B5872",
          800: "#083F52",
          900: "#052732",
        },
        grey: {
          DEFAULT: "#698996",
          100: "#E1E7EA",
          200: "#C3D0D5",
          300: "#A5B8C0",
          400: "#87A1AB",
          500: "#698996",
          600: "#546E78",
          700: "#3F525A",
          800: "#2A373C",
          900: "#151B1E",
        },
        pink: {
          DEFAULT: "#EDD2E0",
          100: "#FBF6F9",
          200: "#F8EDF3",
          300: "#F4E4EC",
          400: "#F1DBE6",
          500: "#EDD2E0",
          600: "#BEA8B3",
          700: "#8E7E86",
          800: "#5F545A",
          900: "#2F2A2D",
        },
        black: {
          DEFAULT: "#333333",
          100: "#D6D6D6",
          200: "#ADADAD",
          300: "#858585",
          400: "#5C5C5C",
          500: "#333333",
          600: "#292929",
          700: "#1F1F1F",
          800: "#141414",
          900: "#0A0A0A",
        },
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
