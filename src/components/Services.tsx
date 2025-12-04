import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Figma, Code2, Bug, Zap, Palette, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Figma,
      title: "Figma to WordPress",
      description: "Turning clean, modern Figma designs into fully responsive websites.",
    },
    {
      icon: Code2,
      title: "Custom WordPress Development",
      description: "I turn clean Figma or XD designs into fully responsive, pixel-perfect, and easy-to-manage WordPress websites.",
    },
    {
      icon: Bug,
      title: "Bug Fixing & Troubleshooting",
      description: "Solving layout issues, plugin conflicts, database errors, and WordPress bugs with sharp attention to detail.",
    },
    {
      icon: Zap,
      title: "Website Speed Optimization",
      description: "Making websites load faster using best practices like caching, WebP, and minimal code.",
    },
    {
      icon: Palette,
      title: "UI/UX Layout Design",
      description: "Designing simple, intuitive, and conversion-focused interfaces that help brands stand out and users stay longer.",
    },
    {
      icon: Shield,
      title: "Website Maintenance & Security",
      description: "Regular updates, backups, and security monitoring to keep websites stable, safe, and up to date.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              What I Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              My Best <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A refined set of professional web solutions focused on clean design, high performance, and seamless user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-hover border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
