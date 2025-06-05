
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Shield, Zap, Drill, CheckCircle, Star, Users, Award, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Electrical Earthing",
      description: "Protect your critical infrastructure with our advanced earthing systems designed for oil & gas facilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cathodic Protection",
      description: "Prevent costly pipeline corrosion with our proven CP systems that extend asset life by decades.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: <Drill className="h-8 w-8" />,
      title: "Geotechnical Investigation",
      description: "Make informed decisions with comprehensive soil analysis and foundation recommendations.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const projects = [
    {
      title: "Prime Port Electrical Earthing",
      client: "Prime Port Logistics",
      year: "2023",
      type: "Electrical Infrastructure",
      image: "https://images.unsplash.com/photo-1581091870621-fdfac2d8e0c1?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SPDC Pipeline Protection",
      client: "Shell Petroleum",
      year: "2022",
      type: "Cathodic Protection",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Solar Borehole Project",
      client: "Rivers State Govt",
      year: "2023",
      type: "Water Resources",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "50+", label: "Major Clients", icon: <Users className="h-6 w-6" /> },
    { number: "100%", label: "Safety Record", icon: <Shield className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      text: "Geogreatotechnics delivered exceptional results on our pipeline protection project. Their technical expertise saved us millions in potential corrosion damage.",
      author: "Project Manager",
      company: "Shell Petroleum Development Company",
      rating: 5
    },
    {
      text: "Outstanding professionalism and delivery. Their earthing system design exceeded our expectations and was completed ahead of schedule.",
      author: "Chief Engineer",
      company: "Nigerian Ports Authority",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/05e99988-5d95-4837-ada7-c15edb9f9ec1.png" alt="Geogreatotechnics Logo" className="h-8 w-8" />
              <span className="font-bold text-xl text-slate-900">Geogreatotechnics</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#services" className="text-slate-700 hover:text-red-600 transition-colors">Services</a>
              <a href="#projects" className="text-slate-700 hover:text-red-600 transition-colors">Projects</a>
              <a href="#about" className="text-slate-700 hover:text-red-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-700 hover:text-red-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+2348034003089" className="hidden sm:flex items-center space-x-2 text-slate-700 hover:text-red-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">08034003089</span>
              </a>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <a href="https://wa.me/2348034003089?text=I%20need%20urgent%20engineering%20solutions%20for%20my%20oil%20and%20gas%20project.%20Can%20we%20discuss%20immediately%3F" className="flex items-center space-x-2">
                  <span>Emergency Consultation</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Oil and Gas Pipeline Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 mb-6">
                <Badge variant="secondary" className="bg-red-600/20 text-red-200 border-red-400">
                  15+ Years Proven Track Record
                </Badge>
                <Badge variant="secondary" className="bg-green-600/20 text-green-200 border-green-400">
                  200+ Projects Delivered
                </Badge>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Stop Losing Millions to
                <span className="text-red-400 block">Pipeline Corrosion</span>
                & Infrastructure Failures
              </h1>

              {/* Value Proposition */}
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Nigeria's #1 engineering firm protecting oil & gas assets with advanced cathodic protection, 
                electrical earthing, and geotechnical solutions. Trusted by Shell, Chevron, Total, and 50+ major operators.
              </p>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Prevent 99% of corrosion damage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Extend asset life by 25+ years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">100% safety compliance record</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">24/7 emergency response</span>
                </div>
              </div>

              {/* Strong CTAs */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
                  <a href="https://wa.me/2348034003089?text=URGENT%3A%20I%20need%20immediate%20pipeline%20protection%20assessment.%20My%20project%20deadline%20is%20approaching%20fast.%20Can%20your%20team%20start%20this%20week%3F" className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Get Emergency Assessment Now</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                  <a href="https://wa.me/2348034003089?text=I%20want%20to%20see%20your%20project%20portfolio%20and%20discuss%20how%20you%20can%20protect%20my%20assets%20like%20you%20did%20for%20Shell%20and%20Chevron." className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>View Success Stories</span>
                  </a>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-400 mb-4">Trusted by industry leaders:</p>
                <div className="flex flex-wrap items-center space-x-6 text-slate-300">
                  <span className="font-semibold">SHELL</span>
                  <span className="font-semibold">CHEVRON</span>
                  <span className="font-semibold">TOTAL</span>
                  <span className="font-semibold">SPDC</span>
                  <span className="font-semibold">AGIP</span>
                  <span className="font-semibold">NLNG</span>
                </div>
              </div>
            </div>

            {/* Right Side - Key Stats & Urgency */}
            <div className="lg:pl-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Why Act Now?</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 rounded-full p-2 flex-shrink-0">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Pipeline Failures Cost $2.3M+ Per Incident</h4>
                        <p className="text-slate-300">Don't wait for catastrophic failure. Prevention costs 90% less than emergency repairs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 rounded-full p-2 flex-shrink-0">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Regulatory Compliance Deadlines</h4>
                        <p className="text-slate-300">New DPR requirements mandate upgraded protection systems by Q3 2024.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 rounded-full p-2 flex-shrink-0">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Limited Engineering Capacity</h4>
                        <p className="text-slate-300">Only 3 firms in Nigeria have our technical depth. Book now or wait 6+ months.</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="bg-red-600/20 border border-red-400 rounded-lg p-4 mb-6">
                      <p className="text-red-200 font-semibold">⚡ FREE Technical Assessment</p>
                      <p className="text-sm text-slate-300">Limited to 5 projects this month</p>
                    </div>
                    
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6">
                      <a href="https://wa.me/2348034003089?text=I%20want%20to%20claim%20my%20FREE%20technical%20assessment%20before%20the%205-project%20limit%20is%20reached.%20My%20project%20details%3A%20%5BDescribe%20your%20project%5D" className="flex items-center justify-center space-x-2 w-full">
                        <Zap className="h-5 w-5" />
                        <span>Claim Your FREE Assessment</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From pipeline protection to foundation engineering, we deliver the technical expertise 
              that keeps Nigeria's energy infrastructure running safely and efficiently.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveService(index)}>
                <div className="aspect-video relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Recent Project Successes</h2>
            <p className="text-xl text-slate-600">
              See how we've helped major operators protect billions in infrastructure assets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">{project.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-2">{project.client}</p>
                  <p className="text-sm text-slate-500">{project.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="https://wa.me/2348034003089?text=I%20want%20to%20see%20your%20complete%20project%20portfolio%20and%20client%20testimonials.%20I%27m%20particularly%20interested%20in%20%5Bspecify%20service%20area%5D.">
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Industry Leaders Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-600">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Assets?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Don't wait for equipment failure or regulatory penalties. 
                Get your free technical assessment today.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-red-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Emergency Hotline</div>
                    <div className="text-slate-300">08034003089, 07051189594</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">geogreatotechnics@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-slate-300">
                      #4 Daba Avenue, Off Airforce Road<br />
                      Eliozu, Port Harcourt, Nigeria
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white text-slate-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Assessment</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6">
                      <a href="https://wa.me/2348034003089?text=URGENT%20REQUEST%3A%20I%20need%20a%20comprehensive%20technical%20assessment%20for%20my%20project.%20Details%3A%0A%0AProject%20Type%3A%20%0ALocation%3A%20%0ATimeline%3A%20%0ABudget%20Range%3A%20%0A%0APlease%20call%20me%20immediately%20to%20discuss." className="flex items-center justify-center space-x-2 w-full">
                        <Zap className="h-5 w-5" />
                        <span>Start WhatsApp Consultation</span>
                      </a>
                    </Button>

                    <div className="text-center pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-600 mb-2">⚡ Immediate Response Guaranteed</p>
                      <p className="text-xs text-slate-500">We typically respond within 15 minutes during business hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/05e99988-5d95-4837-ada7-c15edb9f9ec1.png" alt="Logo" className="h-8 w-8" />
                <span className="font-bold text-xl">Geogreatotechnics</span>
              </div>
              <p className="text-slate-400">
                Nigeria's leading engineering consultancy for oil & gas infrastructure protection and development.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Electrical Earthing</li>
                <li>Cathodic Protection</li>
                <li>Geotechnical Investigation</li>
                <li>Pipeline Integrity</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-slate-400">
                <p>08034003089, 07051189594</p>
                <p>geogreatotechnics@gmail.com</p>
                <p>#4 Daba Avenue, Eliozu<br />Port Harcourt, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Geogreatotechnics & Geodreels Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
