import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mister Connor",
    role: "MSP Towing Owner",
    image: "/male-avatar.svg",
    text: "We needed a website that looked different from the usual towing sites, Raza built our entire MSP Towing website from scratch, and the results were exactly what we needed. He turned our service list into a clear, easy-to-navigate layout and delivered a clean, modern design that matched our brand. The site looks professional, loads fast, and helps customers find the right service instantly.",
    rating: 5,
  },
  {
    name: "Sir Rizwan",
    role: "Operations Manager, Cerberus Security",
    image: "/male-avatar.svg",
    text: "We needed a security website that looked credible and straightforward. From real images to clean service sections and a proper team page, everything was designed to build trust. Smooth experience and great results. The overall look feels reliable and credible, exactly what a security business needs.",
    rating: 5,
  },
  {
    name: "Mr. Ali Raza",
    role: "WBG Store Owner",
    image: "/male-avatar.svg",
    text: "We needed a platform that could handle phone repairs, product sales, and even let users sell their own phones. Raza pulled it off with custom-built solutions that work smoothly. The structure is clean, the flow makes sense, and the site does everything we asked for. Solid work on a very complex project, all without paid plugins.",
    rating: 5,
  },
  {
    name: "Mr. Ijaz",
    role: "Store Owner",
    image: "/male-avatar.svg",
    text: "Our main goal was to give customers a smooth, hurdle-free shopping experience. Raza created a clean, simple layout that highlights our products and guides users directly to checkout. No complexity, just a practical and effective grocery site.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setSlideDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setSlideDirection('right');
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused) return;
    
    const autoPlay = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(autoPlay);
  }, [isAnimating, isPaused]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-card/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Clients —{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who trusted me with their digital
            presence.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Testimonial Grid */}
            <div
              className={`grid gap-6 transition-all duration-500 ${
                itemsPerView === 3 ? "grid-cols-3" : "grid-cols-1"
              } ${
                isAnimating
                  ? slideDirection === 'left' 
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <div
                  key={`${currentIndex}-${idx}`}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-2 -right-2 opacity-10">
                    <Quote className="w-20 h-20 text-primary" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-base text-foreground/90 leading-relaxed mb-6 font-light">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 ring-2 ring-primary/10 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => {
                  prevTestimonial();
                  setIsPaused(true);
                }}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setSlideDirection(index > currentIndex ? 'left' : 'right');
                        setIsAnimating(true);
                        setCurrentIndex(index);
                        setIsPaused(true);
                      }
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "w-8 h-2 bg-primary"
                        : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  nextTestimonial();
                  setIsPaused(true);
                }}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;