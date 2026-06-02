import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const filters = ["All", "WordPress", "Shopify", "Web Apps"];

const projects = [
  {
    title: "MSP Tows",
    description:
      "Service website designed for quick emergency towing requests and clear service navigation.",
    category: "WordPress",
    tech: ["WordPress"],
    image: "/msptows.webp",
    link: "https://msptows.com/",
  },
  {
    title: "Cerberus Security",
    description:
      "Corporate website presenting security services with credibility and strong branding.",
    category: "WordPress",
    tech: ["WordPress"],
    image: "/cerberus-security.webp",
    link: "https://cerberussec.co.uk",
  },
  {
    title: "Swift Guard Security",
    description:
      "Professional services website focused on trust and clear service presentation.",
    category: "WordPress",
    tech: ["WordPress"],
    image: "/swift-guard-security.webp",
    link: "https://swiftguardsecurity.com",
  },
  {
    title: "World Boss Group",
    description:
      "WooCommerce store combining phone accessory sales and repair services.",
    category: "WordPress",
    tech: ["WordPress", "WooCommerce"],
    image: "/worldbossgroup.webp",
    link: "https://worldbossgroup.com",
  },
  {
    title: "Weaversha Accountants",
    description:
      "Professional accounting website designed for trust and clear client communication.",
    category: "WordPress",
    tech: ["WordPress"],
    image: "/weaversha.webp",
    link: "https://weaversha.co.uk/",
  },
  {
    title: "Euro Mattress",
    description:
      "E-commerce store showcasing premium mattresses with clean product browsing.",
    category: "WordPress",
    tech: ["WordPress", "WooCommerce"],
    image: "/euro-mattress.webp",
    link: "https://euromattress.co.uk",
  },

  {
    title: "Daily Maison",
    description:
      "Store designed to showcase premium home and lifestyle products with a smooth shopping experience and optimized product discovery.",
    category: "Shopify",
    tech: ["Shopify", "Liquid"],
    image: "/hero-daily-maison.webp",
    link: "https://dailymaison.com",
  },
  {
    title: "Direct Drop",
    description:
      "Shopify dropshipping store optimized for product visibility, fast navigation, and seamless checkout performance.",
    category: "Shopify",
    tech: ["Shopify", "Liquid"],
    image: "/hero-direct-drop.webp",
    link: "https://directdrop.net",
  },

  {
    title: "ERP Management System",
    description:
      "Full MERN stack ERP system to manage inventory, accounting and production workflows.",
    category: "Web Apps",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/store-admin-panel.webp",
    // link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Business analytics dashboard built with React to visualize data and track performance.",
    category: "Web Apps",
    tech: ["React", "Node.js"],
    image: "/custom-store-admin-panel.webp",
    // link: "#",
  },
];

const ITEMS_PER_PAGE = 6;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);

  const paginatedProjects = useMemo(
    () =>
      filtered.slice(
        (safePage - 1) * ITEMS_PER_PAGE,
        safePage * ITEMS_PER_PAGE,
      ),
    [filtered, safePage],
  );

  return (
    <section id="work" className="perf-section section-glow relative py-24 md:py-28">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="liquid-pill mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold text-primary">
            Portfolio
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            Selected Work{" "}
            <span className="gradient-text">Built for Real Businesses</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of websites and platforms I designed and developed.
            Focused on performance, usability, and real business needs.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm border transition-all duration-200
      ${
        activeFilter === filter
          ? "liquid-pill text-primary border-primary/50 shadow-[0_0_24px_rgba(0,206,229,0.14)]"
          : "liquid-panel-soft text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-[1px]"
      }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Card className="liquid-panel-soft overflow-hidden rounded-[26px]">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="flex items-center gap-2 text-white text-sm font-medium">
                      View Project <ExternalLink size={16} />
                    </span>
                  </div>
                </div>

                <CardContent className="p-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* PREMIUM PAGINATION */}
        <div className="flex flex-col items-center gap-6 mt-16">
          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              const active = safePage === pageNumber;

              return (
                <button
                  key={i}
                  onClick={() => setPage(pageNumber)}
                  className={`relative h-3 rounded-full transition-all duration-300
                  ${
                    active
                      ? "w-10 bg-primary shadow-lg shadow-primary/40"
                      : "w-3 bg-border hover:bg-primary/50"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={safePage === 1}
              className="transition hover:text-primary disabled:opacity-30"
            >
              ← Previous
            </button>

            <span className="text-xs opacity-70">
              {page} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={safePage === totalPages}
              className="transition hover:text-primary disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
