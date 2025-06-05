import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Drill, ArrowRight, Droplets, Earth, FlaskConical, Database } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Industrial Water Drilling",
      description: "Professional water drilling services for industrial applications with advanced drilling techniques and equipment.",
      image: "/lovable-uploads/a621e485-0a37-44df-9d73-9e24b082bff4.png"
    },
    {
      icon: <Earth className="h-6 w-6" />,
      title: "Integrated Geoscience",
      description: "Comprehensive geoscience solutions combining geological, geophysical, and geochemical analysis for complete subsurface understanding.",
      image: "/assets/images/electrical-earthing.jpg"
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Hydrogeological Investigation",
      description: "Detailed hydrogeological studies to understand groundwater systems, flow patterns, and aquifer characteristics.",
      image: "/assets/images/cathodic-protection.jpg"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Reservoir Study and Management",
      description: "Comprehensive reservoir analysis and management solutions for optimal resource extraction and sustainability.",
      image: "/assets/images/geotechnical-investigation.jpg"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Electrical Earthing",
      description: "Comprehensive electrical earthing services ensuring safety and operational integrity of electrical installations.",
      image: "/assets/images/electrical-earthing.jpg"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cathodic Protection",
      description: "Advanced cathodic protection systems to safeguard pipelines and structures from corrosion.",
      image: "/assets/images/cathodic-protection.jpg"
    },
    {
      icon: <Drill className="h-6 w-6" />,
      title: "Geotechnical Investigation",
      description: "Deep insights into subsurface conditions through 2D resistivity, seismic analysis, and soil studies.",
      image: "/assets/images/geotechnical-investigation.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-slate-100 text-slate-700 mb-4 text-sm font-medium px-4 py-2">Our Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Core Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions for oil & gas, construction, and environmental sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <OptimizedImage src={service.image} alt={service.title} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-red-600 p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Button variant="outline" className="group-hover:bg-red-600 group-hover:text-white transition-all duration-300 text-sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-4">
            <Link to="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
