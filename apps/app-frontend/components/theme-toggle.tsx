"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@repo/ui/button";
import { useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.className = "dark";
    }
}, []);

const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  document.documentElement.className = newTheme;
  window.localStorage.setItem("theme", newTheme);
}

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
