import { Box, Typography } from "@mui/material";
import React from "react";
import MedSearch from "../search/MedSearch";
import { useNavigate } from "react-router-dom";
import MedEntityCard from "../entity-card/MedEntityCard";
import { ReactComponent as CardService } from "../../assets/icons/card_service.svg";
import { ReactComponent as DrugStore } from "../../assets/icons/drag_store.svg";
import { ReactComponent as Hospital } from "../../assets/icons/hospital.svg";
import { ReactComponent as Capsule } from "../../assets/icons/capsule.svg";
import { ReactComponent as Ambulance } from "../../assets/icons/ambulance.svg";
import { colors } from "../../theme/variables";

const menuItems = [
  {
    title: "Doctors",
    Logo: CardService,
  },
  {
    title: "Labs",
    Logo: DrugStore,
  },
  {
    title: "Hospitals",
    active: true,
    Logo: Hospital,
  },
  {
    title: "Medical Store",
    Logo: Capsule,
  },
  {
    title: "Ambulance",
    Logo: Ambulance,
  },
];

function MedSearchCard({ states }) {
  const navigate = useNavigate();
  const handleSearch = ({ state, city }) => {
    const path = `/hospitals?state=${state}&city=${city}`;
    navigate(path);
  };
  return (
    <Box component="section">
      <MedSearch states={states} getValue={handleSearch} />

      <Typography
        component="p"
        fontWeight={500}
        fontSize="1.25rem"
        color={colors.dark}
        mt={4}
        mb={3}
        textAlign="center"
      >
        You may be looking for
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
            sx={{
              my: 1,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default MedSearchCard;
