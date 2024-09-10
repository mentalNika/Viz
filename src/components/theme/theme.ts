"use client";
import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (desktops)
      lg: 1280, // Large devices (larger desktops)
      xl: 1920, // Extra large devices (large desktops)
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
