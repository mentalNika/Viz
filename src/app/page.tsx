import { Header } from "@/components/Header/Header";
import { MainSwiper } from "@/components/MainSwiper/MainSwiper";
import { Box } from "@mui/material";

export const metadata = {
  title: "VibeViz",
  description: "Визуализация интерьера",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <Box maxWidth="xl" sx={{ padding: "0", margin: "0 auto" }}>
        <Header />
        <MainSwiper />
      </Box>
    </>
  );
}
