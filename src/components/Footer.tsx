const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="/">
              <img
                src="/razadevx.webp"
                alt="RazaDevX Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Copyright © 2025 Raza_DeveloperX. Portfolio made in React, still
            Growing⚡
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
