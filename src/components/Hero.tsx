import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Available for Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up">
            Focused,
            <br />
            <span className="gradient-text">Design-Driven,</span>
            <br />
            WordPress Dev.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ahmad Raza is a self-taught Web Developer and UI Designer who crafts high-performing, clean, 
            and conversion-focused WordPress websites from concept to launch with precision and creativity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="hover-glow text-lg px-8 py-6 group"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => scrollToSection("work")}
            >
              View Work
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
