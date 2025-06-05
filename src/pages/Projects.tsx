
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, ArrowRight, Building, Zap, Shield, Drill } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import OptimizedImage from "@/components/OptimizedImage";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Oil & Gas", "Infrastructure", "Environmental", "Marine"];

  const projects = [
    {
      id: 1,
      title: "Lagos Port Complex Cathodic Protection",
      category: "Marine",
      client: "Nigerian Ports Authority",
      location: "Lagos, Nigeria",
      year: "2023",
      description: "Comprehensive cathodic protection system design and installation for marine structures at Lagos Port Complex.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      features: ["Marine CP System", "Anode Installation", "24/7 Monitoring", "Corrosion Assessment"],
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Shell Nigeria Electrical Earthing Project",
      category: "Oil & Gas",
      client: "Shell Petroleum Development Company",
      location: "Port Harcourt, Nigeria",
      year: "2023",
      description: "Major electrical earthing system upgrade for oil production facilities ensuring operational safety and compliance.",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
      features: ["Earthing System Design", "Lightning Protection", "Soil Resistivity Testing", "Safety Compliance"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Abuja Metro Line Geotechnical Investigation",
      category: "Infrastructure",
      client: "Federal Capital Territory Administration",
      location: "Abuja, Nigeria",
      year: "2022",
      description: "Comprehensive geotechnical investigation for the proposed Abuja metro line extension project.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
      features: ["Soil Investigation", "Foundation Design", "Seismic Analysis", "Ground Improvement"],
      icon: <Drill className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Dangote Refinery Foundation Works",
      category: "Infrastructure",
      client: "Dangote Group",
      location: "Lagos, Nigeria",
      year: "2022",
      description: "Pile foundation design and testing for critical infrastructure at Africa's largest oil refinery.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      features: ["Pile Design", "Load Testing", "Quality Assurance", "Foundation Monitoring"],
      icon: <Building className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Cross River State Environmental Impact Assessment",
      category: "Environmental",
      client: "Cross River State Government",
      location: "Calabar, Nigeria",
      year: "2021",
      description: "Comprehensive environmental impact assessment for proposed industrial development zone.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
      features: ["Environmental Assessment", "Community Engagement", "Biodiversity Study", "Mitigation Planning"],
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 6,
      title: "NNPC Pipeline Integrity Assessment",
      category: "Oil & Gas",
      client: "Nigerian National Petroleum Corporation",
      location: "Multiple Locations, Nigeria",
      year: "2021",
      description: "Pipeline integrity assessment and cathodic protection system optimization across multiple locations.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      features: ["Pipeline Assessment", "CP Optimization", "Corrosion Monitoring", "Risk Analysis"],
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Our Projects"
        description="Explore GGL's portfolio of successful geotechnical engineering and environmental consulting projects across West Africa. From oil & gas to infrastructure development."
        keywords="GGL projects, geotechnical engineering projects Nigeria, environmental consulting projects, oil and gas engineering, infrastructure projects West Africa"
      />
      
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" 
            alt="GGL Engineering Projects" 
            className="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white mb-8 text-sm font-medium px-4 py-2 shadow-lg">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Discover our track record of successful engineering projects across West Africa's most challenging environments.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Project Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Filter our projects by category to see our expertise across different sectors
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`text-sm px-6 py-3 ${
                  selectedCategory === category 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "border-slate-300 text-slate-600 hover:bg-slate-50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                <div className="aspect-video relative">
                  <OptimizedImage src={project.image} alt={project.title} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-red-600 text-white text-sm px-3 py-1">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-red-600 p-3 rounded-full">
                      {project.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-base text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Client</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="bg-red-600 rounded-full p-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="group hover:bg-red-600 hover:text-white transition-all duration-300 text-sm">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready for Your Next Project?</h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Let us bring our proven expertise to your engineering challenges.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-10 py-6 shadow-2xl hover:shadow-red-600/25 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/2348034003089" className="flex items-center space-x-3">
              <span>Discuss Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
