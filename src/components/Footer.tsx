import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const logoSrc =
    theme === "dark"
      ? "/portfolio/razadevx-logo-dark.webp"
      : "/portfolio/razadevx-logo-light.webp";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <a href="/portfolio/">
            <img
              src={logoSrc}
              alt="RazaDevX Logo"
              className="h-10 w-auto transition-opacity duration-300"
            />
          </a>

          {/* Text */}
          <div className="text-sm text-muted-foreground text-center">
            Portfolio made in React · Still Growing ⚡  
            <div className="mt-1">© {currentYear} RazaDevX</div>
          </div>

          {/* Social + Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-primary" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
