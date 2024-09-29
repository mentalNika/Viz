"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const pages = ["Главная", "Условия", "Портфолио"];

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        borderBottom: "1px solid rgba(255, 255, 255, .35)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" gap="10px">
            <TelegramIcon sx={{ fontSize: 20 }} />
            <WhatsAppIcon sx={{ fontSize: 20 }} />
            <InstagramIcon sx={{ fontSize: 20 }} />
          </Box>

          <Box display="flex" component="nav">
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: "10px", color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
