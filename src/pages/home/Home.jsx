import React from "react";
import MedHeroSection from "../../components/hero-section/MedHeroSection";
import { Box, Container } from "@mui/material";
import MedCardContainer from "../../components/card-container/MedCardContainer";
import MedSearchCard from "../../components/search-card/MedSearchCard";
import useGeneric from "../../hooks/genericHook";
import MedOfferCarousel from "../../components/offer-carousel/MedOfferCarousel";
import { colors } from "../../theme/variables";

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
          position: "relative",
          paddingTop: "8rem",
          paddingBottom: "4rem",
          marginTop: "-6rem",
        }}
      >
        <MedOfferCarousel />
      </Box>
    </Box>
  );
}

export default Home;
