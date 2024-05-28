import { Avatar, Box } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/carousel/image1.png";
import image2 from "../../assets/carousel/image2.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { colors } from "../../theme/variables";

function MedOfferCarousel({ sx }) {
  return (
    <Box component="section" sx={{ ...sx }}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        slidesPerView={3}
        spaceBetween={20}
      >
        {Array(6)
          .fill(0)
          .map((i, index) => (
            <SwiperSlide key={`offer-carousel-${index + 1}`}>
              <Avatar
                sx={{
                  width: "100%",
                  height: "15rem",
                  borderRadius: "1rem",
                }}
                src={(index + 1) % 2 === 0 ? image2 : image1}
                alt={`slide-${index + 1}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Box
        component="div"
        className="swiper-pagination"
        sx={{
          "& .swiper-pagination-bullet-active": {
            position: "relative",
            background: colors.blue,
            "&:after": {
              content: "''",
              border: `1px solid ${colors.blue}`,
              position: "absolute",
              width: "1rem",
              height: "1rem",
              borderRadius: "50%",
              right: "-4px",
              top: "-4px",
            },
          },
        }}
      />
    </Box>
  );
}

export default MedOfferCarousel;
