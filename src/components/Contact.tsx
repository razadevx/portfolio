import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Talk <span className="gradient-text">With Me!</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, ideas, or
              collaborations. Whether you're looking to build a full WordPress
              website, optimize an existing one, or just talk tech — I'd love to
              hear from you.
            </p>
          </div>

          <Card
            className="p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur-sm hover-glow animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold">
                      razadeveloperx@gmail.com
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/923267688920"
                  target="_blank" // Recommended: Opens the WhatsApp link in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="whatsapp block" // Added 'block' to make the link fill the container for the hover effect
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Chat</div>
                      <div className="font-semibold">Let's Discuss</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <a
                  href="mailto:razadeveloperx@gmail.com?subject=Inquiry%20from%20Portfolio%20Website"
                  target="_blank" // This ensures the link is treated as an external destination
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                >
                  <Button
                    size="lg"
                    className="hover-glow text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </a>
                <a
                  href="https://wa.me/923267688920"
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Security best practice
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 w-full sm:w-auto"
                  >
                    Schedule a Call {/* Original text content remains */}
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6 border-t border-border">
                {/* GitHub Link */}
                <a
                  href="https://github.com/Raza-DevX" // ⬅️ GitHub URL added here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/razadeveloperx/" // ⬅️ LinkedIn URL added here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
