import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GalaxyAmbient from "@/components/GalaxyAmbient";

const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Technologies = lazy(() => import("@/components/Technologies"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <GalaxyAmbient />
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
