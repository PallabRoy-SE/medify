import { Button, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant="contained">
        Medify
      </Button>
    </ThemeProvider>
  );
}

export default App;
