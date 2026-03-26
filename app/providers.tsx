"use client";

import { createContext, useContext } from "react";
import { useTheme } from "@/hooks/use-theme";
import type { ThemeContextType } from "@/types";

// ThemeContext 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider 컴포넌트
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

// useThemeContext 훅 (하위 컴포넌트에서 테마 접근용)
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
}
