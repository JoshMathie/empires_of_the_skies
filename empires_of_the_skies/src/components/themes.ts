import { createTheme } from "@mui/material/styles";

export const generalTheme = createTheme({
  typography: {
    fontFamily: "dauphinn",
    fontSize: 20,
    button: {
      textTransform: "none",
      textAlign: "left",
      border: "1px solid black",
      color: "#000000",
      textOverflow: "ellipsis",
      // width: "100%",
      overflow: "auto",
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
    MuiButton: {
      styleOverrides: {
        textPrimary: "#000000",
      },
    },
  },
});
