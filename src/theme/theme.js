import { createTheme } from "@mui/material/styles";
import { colors, fonts } from "./variables";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.white,
    },
  },
  typography: {
    fontFamily: fonts.poppins,
  },
});

export default theme;
