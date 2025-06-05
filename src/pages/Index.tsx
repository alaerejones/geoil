
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Home"
        description="Leading geotechnical engineering and environmental consulting services across West Africa. Specializing in electrical earthing, cathodic protection, geotechnical investigation, and environmental services."
        keywords="geotechnical engineering, environmental consulting, electrical earthing, cathodic protection, Nigeria, West Africa, oil and gas services"
      />
      
      <Navigation />
      <ScrollToTop />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
