"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");
  const darkMode = "dark";
  const lightMode = "light";

  const handleThemeChange = () => {
    const newMode = mode === darkMode ? lightMode : darkMode;
    setMode(newMode);
    document.documentElement.classList.add(newMode);
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <div>
      <ThemeContext.Provider value={{ mode, setMode }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return context;
}
