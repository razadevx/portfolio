import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      alert("Message sent! Thank you for reaching out.");
      formRef.current?.reset();
      setIsLoading(false);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "razadeveloperx@gmail.com",
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
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">

      {/* Background glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/10 blur-[160px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-6xl mx-auto space-y-14">

          {/* Header */}

          <div className="text-center space-y-5">

            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Get In Touch
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Have a Project in Mind?{" "}
              <span className="gradient-text">Let's Talk.</span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tell me about your website or web app idea. I build fast,
              scalable digital products that help businesses grow.
            </p>

          </div>

          {/* Grid */}

          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}

            <div className="space-y-6">

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Contact Info
                </h3>

                <p className="text-muted-foreground">
                  Feel free to reach out through any channel.
                </p>
              </div>

              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-5 rounded-xl 
                  bg-card/60 backdrop-blur 
                  border border-border 
                  hover:border-primary/40 
                  transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>

                    <div className="font-semibold">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Availability */}

              <Card className="p-6 border border-primary/20 bg-card/70 backdrop-blur">

                <div className="flex items-center gap-4">

                  <div className="relative">

                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>

                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse" />

                  </div>

                  <div>

                    <h4 className="font-semibold text-lg">
                      Available for New Projects
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      Let's build something impactful together.
                    </p>

                  </div>

                </div>

              </Card>

            </div>

            {/* RIGHT SIDE FORM */}

            <Card className="p-8 bg-card/70 backdrop-blur border border-border shadow-xl">

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6"
              >

                <div>

                  <h3 className="text-2xl font-bold">
                    Send Me a Message
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    No spam. I'll personally reply within 24 hours.
                  </p>

                </div>

                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Start My Project
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