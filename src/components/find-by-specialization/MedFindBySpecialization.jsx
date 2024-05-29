import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variables";
import { ReactComponent as Stethoscope } from "../../assets/icons/stethoscope.svg";
import { ReactComponent as HeartRate } from "../../assets/icons/heart_rate.svg";
import { ReactComponent as HeartRateMonitor } from "../../assets/icons/heart_rate_monitor.svg";
import { ReactComponent as Hospital } from "../../assets/icons/hospital.svg";
import { ReactComponent as BloodSamples } from "../../assets/icons/blood_samples.svg";
import { ReactComponent as Immune } from "../../assets/icons/immune.svg";
import { ReactComponent as XRey } from "../../assets/icons/xrey.svg";
import MedEntityCard from "../entity-card/MedEntityCard";
import MedButton from "../button/MedButton";

const menuItems = [
  {
    title: "Dentistry",
    Logo: Hospital,
  },
  {
    title: "Primary Care",
    Logo: Stethoscope,
  },
  {
    title: "Cardiology",
    Logo: HeartRate,
  },
  {
    title: "MRI Resonance",
    Logo: HeartRateMonitor,
  },
  {
    title: "Blood Test",
    Logo: BloodSamples,
  },
  {
    title: "Psychologist",
    Logo: Immune,
  },
  {
    title: "Laboratory",
    Logo: Hospital,
  },
  {
    title: "X-Ray",
    Logo: XRey,
  },
];
function MedFindBySpecialization() {
  return (
    <Box component="section">
      <Typography
        component="p"
        color={colors.secondary}
        fontWeight={600}
        fontSize="3rem"
        textAlign="center"
        mb={4}
      >
        Find by specialization
      </Typography>
      <Box
        component="section"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        gap="2%"
        mx={3}
      >
        {menuItems.map((item, index) => (
          <MedEntityCard
            key={`search-card-item-${index + 1}`}
            Logo={item.Logo}
            title={item.title}
            active={item.active}
            backgroundColor={colors.inputBgLight}
            elevate={true}
            sx={{
              my: 1,
            }}
          />
        ))}
      </Box>
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={3}
      >
        <MedButton sx={{ float: "center" }}>View All</MedButton>
      </Box>
    </Box>
  );
}

export default MedFindBySpecialization;
