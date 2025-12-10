import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "MSP Tows",
      description: "Car Towing Services Platform",
      category: "Service Industry",
      image: "/portfolio/msptows.webp", // UPDATED URL
      link: "https://msptows.com/", // Add your project link here
    },
    {
      title: "Cerberus Security",
      description: "Security Guard Services",
      category: "Security",
      image: "/portfolio/cerberus-security.webp", // UPDATED URL
      link: "https://cerberussec.co.uk",
    },
    {
      title: "Swift Guard Security",
      description: "Professional Security Services",
      category: "Security",
      image: "/portfolio/swift-guard-security.webp", // UPDATED URL
      link: "https://swiftguardsecurity.com",
    },
    {
      title: "World Boss Group",
      description: "Phone Accessories & Repair",
      category: "E-Commerce",
      image: "/portfolio/worldbossgroup.webp", // UPDATED URL
      link: "https://worldbossgroup.com",
    },
    {
      title: "Weaversha Accountants",
      description: "Professional Accounting Services",
      category: "Finance",
      image: "/portfolio/weaversha.webp", // UPDATED URL
      link: "https://weaversha.co.uk/",
    },
    {
      title: "Euro Mattress",
      description: "Premium Mattress Store",
      category: "E-Commerce",
      image: "/portfolio/euro-mattress.webp", // UPDATED URL
      link: "https://euromattress.co.uk",
    },
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Projects —{" "}
              <span className="gradient-text">That Deliver Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the websites I've designed and developed — clean
              interfaces, functional design, and real user experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link} // Use the link property here
                target="_blank" // Opens link in a new tab
                rel="noopener noreferrer" // Recommended for security when using target="_blank"
                className="group block"
              >
                <Card
                  className="card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in-up h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {/* Image from public folder */}
                    <img
                      src={project.image} // Path starts from the public folder (e.g., /images/portfolio-1.jpg refers to public/images/portfolio-1.jpg)
                      alt={`Screenshot of ${project.title} project`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    {/* Overlay for link icon */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <div className="text-xs text-primary font-semibold">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
