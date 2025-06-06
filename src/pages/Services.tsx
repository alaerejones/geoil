import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Drill, Waves, Hammer, Leaf, Droplets, Earth, FlaskConical, Database } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import OptimizedImage from "@/components/OptimizedImage";

const Services = () => {
  const services = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Industrial Water Drilling",
      description: "Professional water drilling services for industrial applications with advanced drilling techniques and equipment.",
      details: [
        "Deep borehole drilling and development",
        "Industrial water supply solutions",
        "Water quality assessment and testing",
        "Drilling equipment and maintenance"
      ],
      image: "/lovable-uploads/a621e485-0a37-44df-9d73-9e24b082bff4.png"
    },
    {
      icon: <Earth className="h-6 w-6" />,
      title: "Integrated Geoscience",
      description: "Comprehensive geoscience solutions combining geological, geophysical, and geochemical analysis for complete subsurface understanding.",
      details: [
        "Geological mapping and analysis",
        "Geophysical surveys and interpretation",
        "Geochemical analysis and testing",
        "Integrated subsurface modeling"
      ],
      image: "/lovable-uploads/48389c9f-b7c2-49b3-b0ef-6b6043e66c7d.png"
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Hydrogeological Investigation",
      description: "Detailed hydrogeological studies to understand groundwater systems, flow patterns, and aquifer characteristics.",
      details: [
        "Groundwater exploration and mapping",
        "Aquifer testing and analysis",
        "Hydrogeological modeling",
        "Water resource assessment"
      ],
      image: "/lovable-uploads/fb6c55b7-e749-4289-bd8c-c9fae76017e8.png"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Reservoir Study and Management",
      description: "Comprehensive reservoir analysis and management solutions for optimal resource extraction and sustainability.",
      details: [
        "Reservoir characterization studies",
        "Production optimization strategies",
        "Enhanced recovery techniques",
        "Reservoir monitoring and management"
      ],
      image: "/lovable-uploads/cc0c297e-9eff-4ed8-a392-64efebc136b3.png"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Electrical Earthing",
      description: "Comprehensive electrical earthing services to ensure the safety and operational integrity of electrical installations.",
      details: [
        "Earthing system design and implementation",
        "Resistivity testing and analysis",
        "Lightning protection systems",
        "Industrial and commercial installations"
      ],
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Pipeline Cathodic Protection",
      description: "Advanced cathodic protection systems that safeguard pipelines and structures from corrosion.",
      details: [
        "Preliminary CP surveys and design",
        "Anode installation and testing",
        "Cable cad welding and pin brazing",
        "Close interval potential surveys (CIPS)"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Drill className="h-6 w-6" />,
      title: "Geophysical & Geotechnical Investigation",
      description: "Deep insights into subsurface conditions through advanced geophysical and geotechnical analysis.",
      details: [
        "2D resistivity and seismic analysis",
        "Soil thermal resistivity studies",
        "Borehole drilling and water schemes",
        "Solar power installations"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Water Drilling & Solar Systems",
      description: "Sustainable water supply solutions with solar-powered borehole systems.",
      details: [
        "Borehole drilling and development",
        "Solar power system installation",
        "Water quality testing and treatment",
        "Hydrogeological studies"
      ],
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Civil Construction & Piling",
      description: "Comprehensive civil engineering and foundation solutions for infrastructure projects.",
      details: [
        "Pile foundation design and installation",
        "Pile integrity testing (PIT)",
        "Load testing and monitoring",
        "Marine recovery and diving services"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Services",
      description: "Comprehensive environmental impact assessments and sustainable project development.",
      details: [
        "Environmental Impact Assessments (EIA)",
        "Environmental monitoring and compliance",
        "Sustainable project development strategies",
        "Community engagement and development"
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1920&q=80" 
            alt="Engineering Services" 
            className="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-slate-200">
            Comprehensive engineering solutions for oil & gas, construction, and environmental sectors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-red-600 text-white p-3 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-base text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="bg-red-600 rounded-full p-1 mt-1 flex-shrink-0">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <OptimizedImage 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Get expert consultation tailored to your specific engineering needs.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-4">
            <a href="https://wa.link/se6ial">Request Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
