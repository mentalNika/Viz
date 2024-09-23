import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { lightTheme } from "../styles/theme";
import "@/styles/global.scss";

import { ThemeProvider } from "@mui/material/styles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          fontFamily: "Montserrat, sans-serif",
          backgroundColor: "ivory",
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightTheme}>{children} </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
