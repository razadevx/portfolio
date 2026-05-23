import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      setIsScrolled(window.scrollY > 18);

      let currentSection = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncTheme = () => {
      const isLightTheme = document.documentElement.classList.contains("light");
      setTheme(isLightTheme ? "light" : "dark");
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
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

  const logoSrc =
    theme === "light"
      ? "/razadevx-logo-dark.webp"
      : "/razadevx-logo-light.webp";

  const isLightTheme = theme === "light";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "relative overflow-hidden rounded-[32px] border backdrop-blur-2xl transition-all duration-500",
            isLightTheme
              ? isScrolled
                ? "border-black/10 bg-white/72 shadow-[0_20px_60px_rgba(110,129,148,0.24)]"
                : "border-white/70 bg-white/52 shadow-[0_18px_50px_rgba(110,129,148,0.20)]"
              : isScrolled
                ? "border-white/10 bg-background/78 shadow-[0_18px_60px_rgba(2,10,19,0.36)]"
                : "border-white/6 bg-background/48 shadow-[0_12px_40px_rgba(2,10,19,0.22)]",
          )}
        >
          <div
            className={cn(
              "absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent",
              isLightTheme && "via-primary/55",
            )}
          />
          <div
            className={cn(
              "absolute -left-10 top-0 h-20 w-20 rounded-full blur-3xl",
              isLightTheme ? "bg-primary/10" : "bg-primary/16",
            )}
          />
          <div
            className={cn(
              "absolute -right-8 bottom-0 h-16 w-16 rounded-full blur-3xl",
              isLightTheme ? "bg-blue-500/8" : "bg-blue-500/10",
            )}
          />

          <div className="relative flex items-center justify-between gap-3 px-4 py-3 md:px-5 lg:px-6">
            <a href="/" className="flex min-w-0 items-center gap-3">
              <img
                src={logoSrc}
                alt="RazaDevX"
                className="h-11 w-auto transition-opacity duration-300 md:h-12"
              />
            </a>

            <nav className="hidden lg:flex items-center justify-center">
              <div
                className={cn(
                  "flex items-center gap-1 rounded-full p-1.5",
                  isLightTheme
                    ? "border border-black/8 bg-white/38 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
                    : "border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
                )}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(6,182,212,0.22)]"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div
                className={cn(
                  "rounded-full p-1",
                  isLightTheme
                    ? "border border-black/8 bg-white/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]"
                    : "border border-white/10 bg-white/[0.03]",
                )}
              >
                <ThemeToggle />
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="h-11 rounded-full px-5 text-sm font-semibold shadow-[0_14px_34px_rgba(6,182,212,0.18)]"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <div className="rounded-full border border-white/10 bg-white/[0.03] p-1">
                <ThemeToggle />
              </div>

              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors",
                  isLightTheme
                    ? "border border-black/8 bg-white/42 hover:bg-white/70"
                    : "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]",
                )}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
              <div
                className={cn(
                  "rounded-[24px] border p-4 shadow-[0_20px_40px_rgba(2,10,19,0.28)]",
                  isLightTheme
                    ? "border-black/8 bg-white/72"
                    : "border-white/10 bg-black/20",
                )}
              >
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-300",
                        activeSection === item.id
                          ? "bg-primary text-primary-foreground"
                          : isLightTheme
                            ? "bg-black/[0.03] text-foreground/88 hover:bg-black/[0.05]"
                            : "bg-white/[0.03] text-foreground/88 hover:bg-white/[0.05]",
                      )}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  ))}
                </nav>

                <Button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 h-12 w-full rounded-2xl text-sm font-semibold"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
