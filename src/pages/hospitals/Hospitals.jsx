import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MedHeader from "../../components/header/MedHeader";
import MedCardContainer from "../../components/card-container/MedCardContainer";
import MedSearch from "../../components/search/MedSearch";
import useGeneric from "../../hooks/genericHook";
import { useSearchParams } from "react-router-dom";
import { CheckCircleOutlineOutlined, ThumbUp } from "@mui/icons-material";
import { colors } from "../../theme/variables";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import leftBanner from "../../assets/left_banner.png";
import hospitalLogo from "../../assets/hospital.png";
import MedButton from "../../components/button/MedButton";
import { getHospitals } from "../../services/searchService";

function Hospitals() {
  const { states } = useGeneric();
  const [searchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));

  const loadHospitals = async (state, city) => {
    try {
      const resHospitals = await getHospitals(state, city);
      setHospitals(() => [...resHospitals]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = ({ state: selectedState, city: selectedCity }) => {
    setState(selectedState);
    setCity(selectedCity);
    loadHospitals(selectedState, selectedCity);
  };

  useEffect(() => {
    if (state && city) loadHospitals(state, city);
  }, []);

  return (
    <Box component="section">
      <MedHeader />
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "-3rem",
        }}
      >
        <MedCardContainer>
          <MedSearch
            sx={{
              padding: "1.5rem",
            }}
            states={states}
            state={state}
            city={city}
            getValue={handleSearch}
          />
        </MedCardContainer>
      </Container>
      <Container
        maxWidth="lg"
        sx={{
          marginBlock: "5rem",
        }}
      >
        <Box
          component="div"
          sx={{
            paddingInline: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontWeight: 500,
              fontSize: "1.5rem",
            }}
          >
            {hospitals.length} medical centers available in {city}
          </Typography>
          <Typography
            component="p"
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <CheckCircleOutlineOutlined
              sx={{
                color: colors.textGrey,
                marginRight: "1.5rem",
              }}
            />
            <Typography
              component="span"
              sx={{
                color: colors.textGrey,
              }}
            >
              Book appointments with minimum wait-time & verified doctor details
            </Typography>
          </Typography>
        </Box>
        <Grid2 container spacing={3}>
          <Grid2 md={8}>
            {hospitals.map((hospital) => (
              <Box
                key={hospital["Provider ID"]}
                component="div"
                sx={{
                  "&:not(last-child)": {
                    marginBottom: "1.5rem",
                  },
                }}
              >
                <MedCardContainer
                  elevate={false}
                  sx={{
                    padding: "1.5rem",
                  }}
                >
                  <Grid2 container spacing={2} mt={2}>
                    <Grid2
                      md={2.5}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: "translate(0, -2.5rem)",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          width: "7rem",
                          height: "7rem",
                        }}
                      >
                        <img
                          src={hospitalLogo}
                          alt="hospital"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Grid2>
                    <Grid2 md={5.5}>
                      <Typography
                        component="p"
                        fontWeight={600}
                        fontSize="1.25rem"
                        color={colors.skyBlue}
                      >
                        {hospital["Hospital Name"]}
                      </Typography>
                      <Typography
                        component="p"
                        fontWeight={700}
                        fontSize="0.875rem"
                        color={colors.smokeDark}
                        mt={1}
                      >
                        {hospital.City}, {hospital.State},{" "}
                        {hospital["ZIP Code"]}
                      </Typography>
                      <Typography
                        component="p"
                        fontSize="0.875rem"
                        color={colors.smokeDark}
                      >
                        {hospital["Hospital Type"]}
                      </Typography>
                      <Typography
                        component="p"
                        fontSize="0.875rem"
                        color={colors.smokeDark}
                        mt={0.5}
                        pb={1.5}
                        borderBottom="1px dashed"
                        borderColor={colors.borderGrey}
                      >
                        <Typography
                          component="span"
                          color={colors.textDeepGreen}
                          fontWeight={700}
                        >
                          FREE
                        </Typography>{" "}
                        <Typography
                          component="span"
                          color={colors.textGrey}
                          sx={{
                            textDecoration: "line-through",
                          }}
                        >
                          ₹500
                        </Typography>{" "}
                        Consultation fee at clinic
                      </Typography>
                      <Box component="div" mt={2}>
                        <MedButton
                          sx={{
                            backgroundColor: colors.green,
                            padding: 0,
                            minWidth: "40px",
                            borderRadius: "3.5px",
                          }}
                          size="small"
                        >
                          <ThumbUp
                            sx={{ marginRight: "0.2rem", fontSize: "1rem" }}
                          />{" "}
                          {hospital["Hospital overall rating"] !==
                          "Not Available"
                            ? hospital["Hospital overall rating"]
                            : 0}
                        </MedButton>
                      </Box>
                    </Grid2>
                    <Grid2
                      md={4}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                          flexDirection: "row",
                          height: "1rem",
                          gap: "4%",
                          width: "100%",
                        }}
                      >
                        <Button variant="outlined" size="small" color="primary">
                          10:30 AM
                        </Button>
                        <Button variant="outlined" size="small" color="success">
                          20 April 2024
                        </Button>
                      </Box>
                      <Box component="div" width="100%">
                        <Typography
                          component="p"
                          align="center"
                          color={colors.textGreen}
                          fontSize="0.875rem"
                          mb={1}
                        >
                          Available Today
                        </Typography>
                        <MedButton
                          sx={{
                            width: "100%",
                          }}
                        >
                          Book FREE Center Visit
                        </MedButton>
                      </Box>
                    </Grid2>
                  </Grid2>
                </MedCardContainer>
              </Box>
            ))}
          </Grid2>
          <Grid2 md={4}>
            <Box
              component="div"
              sx={{
                height: "15rem",
              }}
            >
              <MedCardContainer
                elevate={false}
                sx={{
                  backgroundColor: "transparent",
                  background: `url(${leftBanner}) no-repeat 1.5% center`,
                  backgroundSize: "225%",
                }}
              ></MedCardContainer>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Hospitals;
