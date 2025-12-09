import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("light");
      setTheme(isDark ? "dark" : "light");
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Work", id: "work" },
    // { label: "Contact", id: "contact" },
  ];

  const logoSrc = theme === "dark" 
    ? "/portfolio/razadevx-logo-dark.webp" 
    : "/portfolio/razadevx-logo-light.webp";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/portfolio/">
          <img
            src={logoSrc}
            alt="DevX Logo"
            className="h-10 w-auto transition-opacity duration-300"
          />
        </a>
        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("contact")}
            className="hover-glow"
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
            {/* <Button onClick={() => scrollToSection("contact")} className="mt-4 w-full">
              Let's Talk
            </Button> */}
            <div className="flex items-center gap-4 mt-4">
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection("contact")}
                className="flex-1"
              >
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;