import { useState } from "react";

const technologies = {
  row1: [
    { name: "WordPress", icon: "🌐" },
    { name: "WooCommerce", icon: "🛒" },
    { name: "Shopify", icon: "🛍️" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "💎" },
    { name: "Tailwind CSS", icon: "🎨" },
  ],
  row2: [
    { name: "Figma", icon: "🎯" },
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "REST API", icon: "🔗" },
    { name: "SEO", icon: "📈" },
    { name: "Vercel", icon: "▲" },
    { name: "Cloudflare", icon: "☁️" },
    { name: "Elementor", icon: "⚡" },
    { name: "PHP", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
  ],
};

const Technologies = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            Tech Stack
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern technologies I use to high-performance websites, eCommerce
            stores, and scalable web applications.
          </p>
          {/* <p className="text-sm text-muted-foreground/80 mt-2 italic">
  Always learning, always improving — staying updated with modern web technologies.
</p> */}
        </div>
      </div>

      <div
        className="space-y-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className={`flex gap-6`}
            style={{
              animation: "scroll-right 30s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...technologies.row1, ...technologies.row1].map((tech, index) => (
              <div key={`row1-${index}`} className="flex-shrink-0 group">
                <div className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>

                  <span className="font-medium text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className={`flex gap-6`}
            style={{
              animation: "scroll-left 30s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...technologies.row2, ...technologies.row2].map((tech, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 group">
                <div className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>

                  <span className="font-medium text-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground/80 mt-2 italic text-center max-w-2xl mx-auto">
          Always learning, always improving ._. staying updated with modern web
          technologies.
        </p>
      </div>
    </section>
  );
};

export default Technologies;
