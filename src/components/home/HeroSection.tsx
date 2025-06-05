
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <OptimizedImage 
          src="/assets/images/hero-bg.png" 
          alt="Geogreatotechnics Team at Work - Drilling Operations" 
          className="w-full h-full" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <Badge className="text-white mb-8 text-sm font-medium px-4 py-2 shadow-lg" style={{
        backgroundColor: 'hsl(var(--primary) / .8)'
      }}>
          Leading Geotechnical Engineering in West Africa
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Welcome to GEOGREATOTECHNICS &amp; GEODREELS LTD</h1>
        
        <p className="text-lg text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">Trusted Partner for Industrial Water Drilling, Integrated Geoscience, Hydrogeological Investigation, Sustainable Energy, Engineering, Pipeline Asset Management, Environmental and Consulting Solutions — Delivering Innovative and Sustainable Services, and More</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/about" className="flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-slate-900 text-base px-8 py-4 backdrop-blur-sm transition-all duration-300">
            <a href="https://wa.link/se6ial" className="flex items-center space-x-2">
              <span>Get Quote</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
