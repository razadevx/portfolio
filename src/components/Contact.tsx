import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_xvlqulc",
        "template_2qowt8l",
        formRef.current!,
        "C5BDWDkOU-99tgJHs"
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Failed to send",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "@razadeveloperx",
      href: "mailto:razadeveloperx@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 326 7688920",
      href: "tel:+923267688920",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujrat, Pakistan",
      href: "www.google.com/maps/place/Gujrat/data=!4m2!3m1!1s0x391f1b031e43442d:0x870fd23543d684c?sa=X&ved=1t:242&ictx=111",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
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

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Contact Info */}
            <div
              className="space-y-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Info</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:block relative mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-2xl" />
                <Card className="relative p-6 border-primary/20 bg-card/30 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        Let's Build Something Amazing
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Available for freelance projects
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card
              className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover-glow animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Send Me a Message</h3>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="from_name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="from_name"
                      name="from_name"
                      placeholder="Jane Doe"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="from_email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="from_email"
                      name="from_email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      required
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full hover-glow text-lg py-6 group"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
