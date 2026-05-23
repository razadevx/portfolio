import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroVortexCanvas from "./HeroVortexCanvas";

const galaxyStars = [
  { top: "14%", left: "18%", size: 2, delay: "0s", duration: "6s" },
  { top: "24%", left: "72%", size: 3, delay: "1.2s", duration: "7s" },
  { top: "30%", left: "38%", size: 2, delay: "0.8s", duration: "5.8s" },
  { top: "36%", left: "84%", size: 2, delay: "2.1s", duration: "6.6s" },
  { top: "42%", left: "12%", size: 3, delay: "1.6s", duration: "7.4s" },
  { top: "52%", left: "65%", size: 2, delay: "0.4s", duration: "6.8s" },
  { top: "58%", left: "24%", size: 2, delay: "2.5s", duration: "5.6s" },
  { top: "68%", left: "79%", size: 3, delay: "1.1s", duration: "7.8s" },
  { top: "74%", left: "48%", size: 2, delay: "2.8s", duration: "6.2s" },
  { top: "80%", left: "16%", size: 2, delay: "0.7s", duration: "5.9s" },
  { top: "20%", left: "52%", size: 1.5, delay: "1.9s", duration: "5.4s" },
  { top: "62%", left: "90%", size: 1.5, delay: "2.3s", duration: "6.9s" },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-background pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div className="hero-galaxy-scene absolute inset-0" aria-hidden="true">
        <div className="hero-galaxy-vignette absolute inset-0" />

        <div className="hero-galaxy-mask absolute inset-[-8%]">
          <HeroVortexCanvas
            className="absolute -right-[18%] -top-[22%] aspect-square w-[78vw] min-w-[760px] max-w-[1280px] md:-right-[14%] md:-top-[26%] lg:-right-[10%] lg:-top-[28%]"
          />

          <div className="absolute inset-0">
            {galaxyStars.map((star, index) => (
              <span
                key={index}
                className="hero-star absolute rounded-full bg-white motion-reduce:animate-none"
                style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] items-center px-6 pb-12 md:min-h-[calc(100svh-8rem)] md:pb-14">
        <div className="w-full max-w-[54rem] text-left">
          <div className="liquid-pill inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm text-primary">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span>Available for New Projects</span>
          </div>

          <div className="mt-8 max-w-[46rem] space-y-6 md:mt-10">
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/75">
                Conversion-Focused Websites
              </p>

              <h1 className="animate-fade-in-up max-w-[13ch] text-[3.2rem] font-bold leading-[0.94] tracking-[-0.04em] sm:text-[4.1rem] md:text-[4.8rem] lg:text-[5.35rem]">
                <span className="block whitespace-nowrap text-foreground">
                  Building Modern
                </span>
                <span className="hero-title-glow mt-2 block whitespace-nowrap">
                  Web Experiences
                </span>
              </h1>
            </div>

            <p
              className="max-w-[36rem] text-lg leading-relaxed text-muted-foreground md:text-[1.16rem]"
              style={{ animationDelay: "0.2s" }}
            >
              I help businesses turn ideas into fast, scalable digital products
              from high-performing WordPress and Shopify websites to custom MERN
              stack applications built for real growth.
            </p>

            <div
              className="flex flex-col items-start gap-4 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="hover-glow h-14 rounded-full px-9 text-lg font-semibold group"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-primary/25 bg-background/20 px-9 text-lg backdrop-blur-sm hover:border-primary hover:bg-primary/10"
                onClick={() => scrollToSection("work")}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-b from-transparent via-background/55 to-background" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[18%] z-[1] h-56 w-56 rounded-full bg-primary/10 blur-[110px]" />
    </section>
  );
};

export default Hero;
