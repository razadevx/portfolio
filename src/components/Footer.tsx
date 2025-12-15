import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc =
    theme === "dark"
      ? "/portfolio/razadevx-logo-dark.webp"
      : "/portfolio/razadevx-logo-light.webp";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="/portfolio/" className="inline-block mb-2">
              <img
                src={logoSrc}
                alt="RazaDevX Logo"
                className="h-10 w-auto transition-opacity duration-300"
              />
            </a>

            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              Made with{" "}
              <Heart className="h-4 w-4 text-destructive fill-destructive" /> by
              RazaDevX
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Raza-DevX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors group"
            >
              <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
