
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Shield, Zap, Drill, CheckCircle, Star, Users, Award, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Electrical Earthing",
      description: "Comprehensive electrical earthing services ensuring safety and operational integrity of electrical installations.",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Cathodic Protection",
      description: "Advanced cathodic protection systems to safeguard pipelines and structures from corrosion.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Drill className="h-5 w-5" />,
      title: "Geotechnical Investigation",
      description: "Deep insights into subsurface conditions through 2D resistivity, seismic analysis, and soil studies.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="h-4 w-4" /> },
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="h-4 w-4" /> },
    { number: "50+", label: "Major Clients", icon: <Users className="h-4 w-4" /> },
    { number: "100%", label: "Safety Record", icon: <Shield className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Home"
        description="Leading geotechnical engineering and environmental consulting services across West Africa. Specializing in electrical earthing, cathodic protection, geotechnical investigation, and environmental services."
        keywords="geotechnical engineering, environmental consulting, electrical earthing, cathodic protection, Nigeria, West Africa, oil and gas services"
      />
      
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Industrial Engineering Infrastructure" 
            className="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white mb-8 text-base sm:text-lg px-6 py-3 shadow-lg">
            Leading Geotechnical Engineering in West Africa
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
            The Link to Technical Excellence
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Providing reliable, professional, and innovative solutions across Nigeria's oil, energy, and infrastructure sectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/about" className="flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300">
              <a href="https://wa.me/2348034003089" className="flex items-center space-x-2">
                <span>Get Quote</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="bg-red-600 text-white p-4 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-3">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-700 mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="outline" className="group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-red-100 text-red-700 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose GGL?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by industry leaders for our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Integrity",
                description: "Committed to ethical practices and transparent operations in all our projects."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation",
                description: "Utilizing cutting-edge technology and advanced techniques for superior results."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Experience", 
                description: "Over 15 years of proven expertise in geotechnical and environmental services."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Safety",
                description: "100% safety record with stringent HSE policies and procedures."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-600 text-white p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Get expert consultation for your geotechnical and environmental engineering needs.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-8 shadow-2xl hover:shadow-red-600/25 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/2348034003089" className="flex items-center space-x-3">
              <span>Get Started Today</span>
              <ArrowRight className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
