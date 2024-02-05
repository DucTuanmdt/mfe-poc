import { createTheme } from "@mui/material/styles";
import { blue, green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
