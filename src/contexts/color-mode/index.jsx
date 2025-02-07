import { createContext, useEffect, useMemo, useState } from "react";

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState(
    () => localStorage.getItem("mna-color-mode") || "light"
  );
  const toggleColorMode = () => {
    const newMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newMode);
    localStorage.setItem("mna-color-mode", newMode);
  };

  useEffect(() => {
    localStorage.setItem("mna-color-mode", colorMode);
  }, []);

  const colorModeContextValue = useMemo(
    () => ({
      colorMode,
      toggleColorMode,
    }),
    [colorMode, toggleColorMode]
  );

  return (
    <ColorModeContext.Provider value={colorModeContextValue}>
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeContext;
