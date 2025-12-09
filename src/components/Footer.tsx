import { useState, useEffect } from "react";

const Footer = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "dark" : "light");
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc = theme === "dark" 
    ? "/portfolio/razadevx-logo-dark.webp" 
    : "/portfolio/razadevx-logo-light.webp";

  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="/portfolio/">
              <img
                src={logoSrc}
                alt="RazaDevX Logo"
                className="h-10 w-auto transition-opacity duration-300"
              />
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Portfolio made in React, Still Growing⚡
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
