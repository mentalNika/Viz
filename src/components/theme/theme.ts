import { createTheme } from "@material-ui/core/styles";

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1239,
      lg: 1240,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#2E86BD",
    },

    secondary: {
      main: "#E52428",
    },

    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat",

    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,

      "@media (min-width:600px)": {
        fontSize: "2rem",
      },

      "@media (min-width: 959.95px)": {
        fontSize: "3rem",
      },
    },

    body1: {
      fontSize: "0.875rem",

      "@media (min-width:600px)": {
        fontSize: "1rem",
      },

      "@media (min-width: 959.95px)": {
        fontSize: "1.125rem",
      },
    },
  },
});

const { breakpoints } = defaultTheme;
