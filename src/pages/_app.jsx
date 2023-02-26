import "@/styles/globals.css";
import theme from "@/utils/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [activeTheme, setActiveTheme] = useState("dark");

  useEffect(() => {
    const preferredTheme = localStorage.getItem("preferredTheme") || "light";
    setActiveTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    setActiveTheme((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem(
      "preferredTheme",
      activeTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <CssBaseline />
      <Component
        {...pageProps}
        activeTheme={activeTheme}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
}
