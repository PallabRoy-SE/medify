import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import doctor1 from "../../assets/doctors/doctor1.png";
import doctor2 from "../../assets/doctors/doctor2.png";
import doctor3 from "../../assets/doctors/doctor3.png";
import doctor4 from "../../assets/doctors/doctor4.png";
import doctor5 from "../../assets/doctors/doctor5.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { colors } from "../../theme/variables";

const specialist = [
  {
    image: doctor1,
    name: "Dr. Lesley Hull",
    proficiency: "Medicine",
  },
  {
    image: doctor2,
    name: "Dr. Ahmad Khan",
    proficiency: "Neurologist",
  },
  {
    image: doctor3,
    name: "Dr. Heena Sachdeva",
    proficiency: "Orthopedics",
  },
  {
    image: doctor4,
    name: "Dr. Ankur Sharma",
    proficiency: "Medicine",
  },
  {
    image: doctor5,
    name: "Dr. Ahmad Stevens",
    proficiency: "Neurologist",
  },
];

function MedSpecialistCarousel({ sx }) {
  return (
    <Box component="section" sx={{ ...sx }}>
      <Typography
        component="p"
        color={colors.secondary}
        fontWeight={600}
        fontSize="3rem"
        textAlign="center"
        mb={6}
      >
        Our Medical Specialist
      </Typography>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".swiper-pagination-specialist" }}
        slidesPerView={4}
        spaceBetween={20}
      >
        {specialist.map((doctor, index) => (
          <SwiperSlide key={`specialist-carousel-${index + 1}`}>
            <Box
              component="div"
              sx={{
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                borderTopLeftRadius: "15.6rem",
                borderTopRightRadius: "15.6rem",
                boxShadow: "0px 15px 55px -10px #00000017",
                width: "20rem",
              }}
              p={1}
            >
              <Box
                component="div"
                sx={{
                  background:
                    "linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)",
                  borderRadius: "0.5rem",
                  borderTopLeftRadius: "15.6rem",
                  borderTopRightRadius: "15.6rem",
                }}
                pt={3}
                px={2}
              >
                <Avatar
                  sx={{
                    width: "100%",
                    height: "21rem",
                    borderRadius: "1rem",
                    "& img": {
                      objectFit: "contain",
                      objectPosition: "bottom",
                    },
                  }}
                  src={doctor.image}
                  alt={`specialist-${doctor.name}`}
                />
              </Box>
            </Box>
            <Typography
              component="p"
              fontSize="1.2rem"
              color={colors.secondary}
              textAlign="center"
              mt={3}
            >
              {doctor.name}
            </Typography>
            <Typography
              fontSize="0.9rem"
              component="p"
              fontWeight={500}
              color={colors.blue}
              textAlign="center"
              mt={0.7}
            >
              {doctor.proficiency}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        component="div"
        className="swiper-pagination-specialist"
        display="flex"
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        sx={{
          position: "static",
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
          mt: 3,
        }}
      />
    </Box>
  );
}

export default MedSpecialistCarousel;
