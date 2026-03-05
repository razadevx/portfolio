import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                Bit About Me
              </div>

              <h2 className="text-4xl md:text-5xl pb-2 font-bold gradient-text">
                From Idea to Impactful Websites
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into web development started with curiosity
                  breaking down websites, experimenting with code, and learning
                  how digital products truly work. What began with WordPress
                  quickly grew into a deeper focus on performance, usability,
                  and clean design.
                </p>

                <p>
                  Today I build everything from conversion-focused WordPress and
                  Shopify websites to custom dashboards and web applications
                  using the MERN stack. My goal is simple: create fast, reliable
                  digital experiences that not only look great, but actually
                  help businesses grow.
                </p>
              </div>

              <a
                href="/RazaDevX_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 mt-6"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </a>
            </div>

            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-secondary border border-border hover-glow">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="col-span-2 space-y-2 pt-4 border-t border-border">
                    <div className="text-4xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Core Technologies Mastered & Expanding
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
