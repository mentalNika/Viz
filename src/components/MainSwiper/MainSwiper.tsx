"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import { mainSlides } from "@/common/mainSlides/mainSlides";

// Import Swiper styles
import "swiper/css";
import { Typography } from "@mui/material";

export const MainSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {mainSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Box maxWidth="1920px" maxHeight="920px">
            <Box
              sx={{
                position: "relative", // Add relative positioning
                height: "920px",
                width: "1920px",
              }}
            >
              <Box
                component="img"
                src={slide.img}
                height="920px"
                width="1920px"
                sx={{ objectFit: "cover" }}
              />
              {/* Add the overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.35)",
                }}
              />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
