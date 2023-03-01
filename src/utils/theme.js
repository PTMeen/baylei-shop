import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f59e0b",
      100: "#fdecce",
      200: "#fbd89d",
      300: "#f9c56d",
      400: "#f7b13c",
      500: "#f59e0b",
      600: "#c47e09",
      700: "#935f07",
      800: "#623f04",
      900: "#312002",
    },
    neutral: {
      100: "#e3e3e3",
      200: "#c7c7c7",
      300: "#ababab",
      400: "#8f8f8f",
      500: "#737373",
      600: "#5c5c5c",
      700: "#454545",
      800: "#2e2e2e",
      900: "#171717",
    },
    background: {
      default: "#e5e5e5",
      paper: "#f5f5f5",
    },
  },
  typography: {
    brand: {
      fontFamily: ["Pacifico", "cursive"].join(","),
    },
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f7b13c",
      900: "#fdecce",
      800: "#fbd89d",
      700: "#f9c56d",
      600: "#f7b13c",
      500: "#f59e0b",
      400: "#c47e09",
      300: "#935f07",
      200: "#623f04",
      100: "#312002",
    },
    neutral: {
      900: "#e3e3e3",
      800: "#c7c7c7",
      700: "#ababab",
      600: "#8f8f8f",
      500: "#737373",
      400: "#5c5c5c",
      300: "#454545",
      200: "#2e2e2e",
      100: "#171717",
    },
  },
  typography: {
    brand: {
      fontFamily: ["Pacifico", "cursive"].join(","),
    },
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
