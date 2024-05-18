import { LocationOnOutlined, Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import MedAutocomplete from "../autocomplete/MedAutocomplete";
import MedButton from "../button/MedButton";
import { colors } from "../../theme/variables";

function MedSearch() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "2rem",
        flexDirection: "row",
        gap: "2%",
      }}
    >
      <MedAutocomplete
        options={[]}
        placeholder="State"
        startIcon={
          <LocationOnOutlined
            sx={{
              color: colors.bgGrey,
              fontSize: "1.8rem",
            }}
          />
        }
        onChange={(e, c) => console.log(c)}
        sx={{
          width: "30%",
        }}
      />
      <MedAutocomplete
        options={[]}
        placeholder="City"
        startIcon={
          <LocationOnOutlined
            sx={{
              color: colors.bgGrey,
              fontSize: "1.8rem",
            }}
          />
        }
        onChange={(e, c) => console.log(c)}
        sx={{
          width: "50%",
        }}
      />
      <MedButton
        startIcon={
          <Search
            sx={{
              fontSize: "1.8rem !important",
            }}
          />
        }
      >
        Search
      </MedButton>
    </Box>
  );
}

export default MedSearch;
