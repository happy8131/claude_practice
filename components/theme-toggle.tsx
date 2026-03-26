"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/app/providers";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  // hydration 미스매치 방지
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10"
        disabled
        aria-label="테마 토글"
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`${resolvedTheme === "light" ? "다크" : "라이트"}모드로 변경`}
      title={`${resolvedTheme === "light" ? "다크" : "라이트"}모드`}
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
