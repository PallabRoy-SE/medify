import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA8FF",
    },
    secondary: {
      main: "#1B3C74",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
