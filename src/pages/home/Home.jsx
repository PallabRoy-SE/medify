import React from "react";
import MedHeroSection from "../../components/hero-section/MedHeroSection";
import { Box, Container, Typography } from "@mui/material";
import MedCardContainer from "../../components/card-container/MedCardContainer";
import MedSearchCard from "../../components/search-card/MedSearchCard";
import useGeneric from "../../hooks/genericHook";
import MedOfferCarousel from "../../components/offer-carousel/MedOfferCarousel";
import { colors } from "../../theme/variables";
import MedFindBySpecialization from "../../components/find-by-specialization/MedFindBySpecialization";
import MedSpecialistCarousel from "../../components/specialist-carousel/MedSpecialistCarousel";

function Home() {
  const { states } = useGeneric();
  return (
    <Box component="section">
      <MedHeroSection />
      <Container
        component="section"
        maxWidth="lg"
        sx={{
          position: "relative",
          marginTop: "-6rem",
          pb: 4,
          zIndex: 1,
        }}
      >
        <MedCardContainer sx={{ pb: 4 }}>
          <MedSearchCard states={states} />
        </MedCardContainer>
      </Container>
      <Box
        component="section"
        px={8}
        sx={{
          backgroundColor: colors.white,
          paddingTop: "8rem",
          paddingBottom: "2rem",
          marginTop: "-6rem",
        }}
      >
        <MedOfferCarousel />
      </Box>
      <Container
        component="section"
        maxWidth="lg"
        sx={{
          py: 4,
        }}
      >
        <MedFindBySpecialization />
      </Container>
      <Box
        component="section"
        px={8}
        sx={{
          backgroundColor: colors.white,
          paddingTop: "4rem",
          paddingBottom: "2rem",
        }}
      >
        <MedSpecialistCarousel />
      </Box>
    </Box>
  );
}

export default Home;
