
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Projects = () => {
  const projects = [
    {
      title: "Prime Port Electrical Earthing",
      client: "Prime Port Logistics",
      location: "Port Harcourt, Nigeria",
      year: "2023",
      category: "Electrical Engineering",
      description: "Advanced electrical earthing system installation for port infrastructure.",
      image: "https://images.unsplash.com/photo-1581091870621-fdfac2d8e0c1?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SPDC Pipeline Cathodic Protection",
      client: "Shell Petroleum Development Company",
      location: "Niger Delta, Nigeria",
      year: "2022",
      category: "Cathodic Protection",
      description: "Comprehensive cathodic protection system for crude oil pipeline infrastructure.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Solar Borehole Scheme",
      client: "Rivers State Water Agency",
      location: "Rivers State, Nigeria",
      year: "2023",
      category: "Water Resources",
      description: "Solar-powered water borehole system for rural community water supply.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Chevron Terminal Geotechnical Investigation",
      client: "Chevron Nigeria Limited",
      location: "Lagos, Nigeria",
      year: "2022",
      category: "Geotechnical",
      description: "Comprehensive soil investigation and foundation analysis for terminal expansion.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "NLNG Pipeline Integrity Assessment",
      client: "Nigeria LNG Limited",
      location: "Bonny Island, Nigeria",
      year: "2021",
      category: "Pipeline Integrity",
      description: "Advanced pipeline integrity testing and corrosion assessment.",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Total E&P Environmental Impact Assessment",
      client: "Total Energies E&P Nigeria",
      location: "Offshore Nigeria",
      year: "2021",
      category: "Environmental",
      description: "Comprehensive EIA for offshore drilling operations.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "AGIP Marine Terminal Piling",
      client: "Nigerian AGIP Oil Company",
      location: "Port Harcourt, Nigeria",
      year: "2020",
      category: "Marine Construction",
      description: "Pile foundation design and installation for marine terminal infrastructure.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "World Bank Water Project",
      client: "World Bank / Federal Ministry of Water Resources",
      location: "Multiple States, Nigeria",
      year: "2019",
      category: "Water Infrastructure",
      description: "Large-scale water infrastructure development across multiple Nigerian states.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "ExxonMobil Subsea Pipeline Protection",
      client: "ExxonMobil Nigeria",
      location: "Offshore Nigeria",
      year: "2020",
      category: "Subsea Engineering",
      description: "Cathodic protection system for subsea pipeline infrastructure.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = ["All", "Electrical Engineering", "Cathodic Protection", "Water Resources", "Geotechnical", "Environmental", "Marine Construction"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-20 pt-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Engineering Projects" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Showcasing our expertise through successful project deliveries across West Africa.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">
              Demonstrating our capability to deliver complex engineering solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Next Project</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our portfolio of successful projects with expert engineering solutions.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
            <a href="https://wa.me/2348034003089">Discuss Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
