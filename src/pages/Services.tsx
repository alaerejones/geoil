
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
