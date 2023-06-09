import { createTheme } from "@mui/material/styles";

export const generalTheme = createTheme({
  typography: {
    fontFamily: "dauphinn",
    fontSize: 20,
    button: {
      textTransform: "none",
      textAlign: "left",
      border: "1px solid black",
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          whiteSpace: "pre",
          fontSize: 18,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          whiteSpace: "pre",
        },
      },
    },
  },
});
