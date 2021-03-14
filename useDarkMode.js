import React, { useState, useEffect, useCallback } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const GlobalTheme = ({ children }) => (
    <ThemeProvider theme={{ darkMode }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  return [darkMode, toggleDarkMode, useCallback(GlobalTheme, [darkMode])];
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
${'' /* body {
  max-width: 500px;
  margin: auto;
  overflow: hidden;
  background: ${({ theme }) => (theme.darkMode ? "black" : "white")};
} */}
`;
