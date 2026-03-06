import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mister Connor",
    role: "MSP Towing Owner",
    image: "/male-avatar.svg",
    text: "We needed a website that looked different from the usual towing sites. Raza built our entire MSP Towing website from scratch, delivering a clean, modern design that perfectly matched our brand. The site loads fast and helps customers find the right service instantly.",
    rating: 5,
  },
  {
    name: "Sir Rizwan",
    role: "Operations Manager, Cerberus Security",
    image: "/male-avatar.svg",
    text: "We needed a security website that looked credible and straightforward. From real images to structured service sections and a professional team page, everything was designed to build trust. The final result feels reliable and exactly what our business needed.",
    rating: 5,
  },
  {
    name: "Mr. Ali Raza",
    role: "WBG Store Owner",
    image: "/male-avatar.svg",
    text: "Our project required phone repair bookings, product sales, and user listings. Raza built a structured platform that handles everything smoothly. Clean structure, logical flow, and powerful functionality without relying on paid plugins.",
    rating: 5,
  },
  {
    name: "Mr. Ijaz",
    role: "Store Owner",
    image: "/male-avatar.svg",
    text: "Our goal was to give customers a smooth shopping experience. Raza created a clean layout that highlights products and guides users straight to checkout. Simple, effective, and exactly what we needed.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else setItemsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
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

    const auto = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(auto);
  }, [isPaused, isAnimating]);

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleTestimonials.push(
      testimonials[(currentIndex + i) % testimonials.length]
    );
  }

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-card/30 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 space-y-14">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Clients  <span className="gradient-text">Say</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses worldwide, delivering high-performing
            websites and digital platforms.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`grid gap-6 transition-all duration-500 ${
              itemsPerView === 3 ? "grid-cols-3" : "grid-cols-1"
            } ${
              isAnimating
                ? "opacity-0 scale-[0.98]"
                : "opacity-100 scale-100"
            }`}
          >
            {visibleTestimonials.map((testimonial, i) => (
              <div
                key={`${currentIndex}-${i}`}
                className="relative bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 overflow-hidden transition duration-300 hover:border-primary/40 hover:bg-card/70"
              >
                {/* Quote decoration */}
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-primary opacity-20" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-base leading-relaxed text-foreground/90 mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/40">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-6 mt-10">

            {/* Premium dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => {
                const active = index === currentIndex;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setCurrentIndex(index);
                        setIsPaused(true);
                      }
                    }}
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

            {/* Arrow navigation */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button
                onClick={() => {
                  prev();
                  setIsPaused(true);
                }}
                className="flex items-center gap-1 hover:text-primary transition"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <span className="text-xs opacity-70">
                {currentIndex + 1} / {testimonials.length}
              </span>

              <button
                onClick={() => {
                  next();
                  setIsPaused(true);
                }}
                className="flex items-center gap-1 hover:text-primary transition"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;