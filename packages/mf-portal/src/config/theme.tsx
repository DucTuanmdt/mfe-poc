import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003366",
    },
    secondary: {
      main: "#00A5A5",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
