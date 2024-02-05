import { createTheme } from "@mui/material/styles";
import { blueGrey, indigo, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
    secondary: {
      main: indigo[500],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
