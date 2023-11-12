"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeContextType } from "@/types";
import { darkMode, lightMode, systemMode } from "@/constants/constants";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState(systemMode);

  function removeMode(mode: string) {
    document.documentElement.classList.remove(mode);
  }

  function addMode(mode: string) {
    document.documentElement.classList.add(mode);
  }

  const handleThemeChange = () => {
    if (
      localStorage.theme === darkMode ||
      ((localStorage.theme === undefined ||
        localStorage.theme === systemMode) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      removeMode(lightMode);
      addMode(darkMode);
    } else {
      removeMode(darkMode);
      addMode(lightMode);
    }
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
