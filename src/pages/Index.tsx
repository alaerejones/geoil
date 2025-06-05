import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Shield, Zap, Drill, CheckCircle, Star, Users, Award, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Electrical Earthing",
      description: "Comprehensive electrical earthing services ensuring safety and operational integrity of electrical installations.",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cathodic Protection",
      description: "Advanced cathodic protection systems to safeguard pipelines and structures from corrosion.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Drill className="h-8 w-8" />,
      title: "Geotechnical Investigation",
      description: "Deep insights into subsurface conditions through 2D resistivity, seismic analysis, and soil studies.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "50+", label: "Major Clients", icon: <Users className="h-6 w-6" /> },
    { number: "100%", label: "Safety Record", icon: <Shield className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section - Simplified */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Industrial Engineering Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white mb-6 text-lg px-6 py-2">
            Leading Geotechnical Engineering in West Africa
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The Link to Technical Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Providing reliable, professional, and innovative solutions across Nigeria's oil, energy, and infrastructure sectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-red-700 text-white text-lg px-8 py-6">
              <Link to="/about" className="flex items-center space-x-2">
                <span>Learn More About Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-red-600 text-white p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions for oil & gas, construction, and environmental sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose GGL?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-slate-600">Committed to ethical practices and transparent operations in all our projects.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-slate-600">Utilizing cutting-edge technology and advanced techniques for superior results.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-slate-600">Over 15 years of proven expertise in geotechnical and environmental services.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety</h3>
              <p className="text-slate-600">100% safety record with stringent HSE policies and procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get expert consultation for your geotechnical and environmental engineering needs.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
            <a href="https://wa.me/2348034003089" className="flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
