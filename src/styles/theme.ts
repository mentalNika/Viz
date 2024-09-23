"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const commonSettings: ThemeOptions = {
  breakpoints: { values: { xs: 0, sm: 768, md: 992, lg: 1600, xl: 1920 } },
};

const lightTheme = createTheme({
  ...commonSettings,
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#333F48", // Кнопка
      light: "#FFFFFF", // Белый (может использоваться для светлых оттенков)
    },
    secondary: {
      main: "#61676F", // Серый
    },
    background: {
      default: "#EDEFF0", // Фон
      paper: "#FFFFFF", // Белый
    },
    text: {
      primary: "#283038", // Текст
    },
    success: {
      main: "#148F2B", // Зеленый
    },
    error: {
      main: "#FF0004", // Ошибка
    },
    divider: "#BEC9D1", // Линия
    info: {
      main: "#94A6B3", // Серый верх
    },
    grey: {
      100: "#CFCFCF", // Поле
    },
  },
});

export { lightTheme };
