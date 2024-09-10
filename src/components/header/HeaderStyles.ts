// HeaderStyles.tsx
import { styled } from "@mui/material/styles";
import { Toolbar, Button, Typography, Link } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const LogoText = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: "none",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const MobileMenuButton = styled(Button)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const MenuButton = styled(Button)(({ theme }) => ({
  marginY: theme.spacing(2),
  color: "black",
  display: "block",
}));

export const MobileLogoText = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: "flex",
  flexGrow: 1,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
