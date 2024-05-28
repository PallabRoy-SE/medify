import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/variables";

function MedEntityCard({ Logo, title, backgroundColor, elevate, active, sx }) {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="12.68rem"
      height="9.56rem"
      sx={{
        backgroundColor: active ? colors.cardBgLightBlue : backgroundColor,
        borderRadius: "0.5rem",
        border: active ? `1px solid ${colors.blue}` : "none",
        ...sx,
      }}
    >
      <Logo width="2.6em" height="3.25em" />
      <Typography
        component="span"
        fontSize="1.125em"
        color={active ? colors.blue : colors.cardTextGrey}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default MedEntityCard;
