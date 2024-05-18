import React from "react";
import MedHeroSection from "../../components/hero-section/MedHeroSection";
import { Box, Container } from "@mui/material";
import MedCardContainer from "../../components/card-container/MedCardContainer";
import MedSearchCard from "../../components/search-card/MedSearchCard";

function Home() {
  return (
    <Box component="section">
      <MedHeroSection />
      <Container
        component="section"
        maxWidth="lg"
        sx={{
          position: "relative",
          marginTop: "-6rem",
        }}
      >
        <MedCardContainer>
          <MedSearchCard />
        </MedCardContainer>
      </Container>
    </Box>
  );
}

export default Home;
