import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GalaxyAmbient from "@/components/GalaxyAmbient";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <GalaxyAmbient />
      <Header />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
