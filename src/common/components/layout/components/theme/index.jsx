/** @format */

import React from "react";
import { Button } from "@/common/components";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme } = useTheme()
  const handleTheme = () => {
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark")
    }, 200)

  }
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-muted transition-colors"
        onClick={() => handleTheme()}
        aria-label="Toggle theme">
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};

export default DarkMode;
