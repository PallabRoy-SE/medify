import { Box } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variables";

function MedCardContainer({ children, ...attributes }) {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: "0.875rem",
        boxShadow: "6px 6px 35px 0px #1028511C",
      }}
      {...attributes}
    >
      {children}
    </Box>
  );
}

export default MedCardContainer;
