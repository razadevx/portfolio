import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const darkMode = savedTheme !== "light";
    
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light");
    }
    
    // Set favicon immediately on mount
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = darkMode ? "/favicon-dark.ico" : "/favicon-light.ico";
    }
  }, []);

  // Update favicon when theme changes
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      // Force browser to reload favicon by adding timestamp
      const newHref = isDark ? "/favicon-dark.ico" : "/favicon-light.ico";
      favicon.href = newHref + "?v=" + new Date().getTime();
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden group"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-5 w-5 transition-all duration-300 absolute ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`h-5 w-5 transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </Button>
  );
};

export default ThemeToggle;