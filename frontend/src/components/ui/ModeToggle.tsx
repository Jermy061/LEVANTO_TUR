"use client"

import { Moon, Sun } from "lucide-react"

import { useTheme } from "../../context/ThemeContext"
import { Button } from "./button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}