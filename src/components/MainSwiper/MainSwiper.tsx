"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import { mainSlides } from "@/common/mainSlides/mainSlides";
import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export const MainSwiper = () => {
  return (
    <Box position="relative" width="100%">
      <Box
        component="img"
        src="/mainSlider/lightLogo.png"
        alt="VibeViz"
        sx={{
          position: "absolute",
          top: "70px",
          left: "50%", // Сместить элемент на середину
          transform: "translateX(-50%)", // Сдвиг на половину ширины элемента
          width: "200px",
          zIndex: "1000",
        }}
      />

      <Swiper
        effect={"fade"}
        navigation={true}
        loop={true}
        onClick={(swiper) => swiper.slideNext()}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4200,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={0}
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
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={slide.img}
                  sx={{
                    objectFit: "cover",
                    maxHeight: "920px",
                    width: "100%",
                  }}
                />

                {/* Add the overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.15)",
                    zIndex: "2",
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
