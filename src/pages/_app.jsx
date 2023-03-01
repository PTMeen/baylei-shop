import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";
import theme from "@/utils/theme";
import { persistor, store } from "@/app/store";
import { SessionProvider } from "next-auth/react";
import ProtectedPage from "@/components/ProtectedPage";

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
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme[activeTheme]}>
            <CssBaseline />
            {Component?.requiredAuth ? (
              <ProtectedPage>
                <Component
                  {...pageProps}
                  activeTheme={activeTheme}
                  toggleTheme={toggleTheme}
                />
              </ProtectedPage>
            ) : (
              <Component
                {...pageProps}
                activeTheme={activeTheme}
                toggleTheme={toggleTheme}
              />
            )}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
