import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShoppingCart, PenTool, Zap, Layers, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom WordPress Development",
      description: "High-performance WordPress websites built with clean architecture, optimized performance, and scalable structure for businesses that want reliable and easy-to-manage platforms.",
    },
    {
      icon: ShoppingCart,
      title: "Shopify Store Development",
      description: "Modern Shopify stores designed for conversions, smooth product management, and a seamless shopping experience that helps brands grow online.",
    },
    {
      icon: PenTool,
      title: "Figma / UI to Website",
      description: "Transforming clean Figma or UI designs into fully responsive, pixel-perfect websites using modern development practices.",
    },
    {
      icon: Zap,
      title: "Site Performance Optimization",
      description: "Speed optimization, performance tuning, and technical improvements to ensure fast loading, better SEO rankings, and smooth user experience.",
    },
    {
      icon: Layers,
      title: "Custom Web Applications (MERN)",
      description: "Building scalable dashboards, tools, and systems using the MERN stack (MongoDB, Express, React, Node.js) for businesses that need more than just a website.",
    },
    {
      icon: Wrench,
      title: "Website Support & Improvements",
      description: "Ongoing improvements, feature additions, and technical support to keep your website evolving as your business grows.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              How I Help Businesses <span className="gradient-text">Online</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional web solutions. From high-performing CMS websites to custom web applications.
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
