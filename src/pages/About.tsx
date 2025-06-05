
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Target, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Engr. Segun Falodun",
      role: "Managing Director",
      credentials: "mnmgs, c.engr, comeg, MSc.",
      bio: "An astute engineer and geoscientist with over 23 years of experience, leading numerous large-scale projects across Nigeria and West Africa.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dave Adoye",
      role: "Geophysics & Water Resources Manager",
      bio: "Leads the Geophysics and Water Resources unit with over 17 years of field experience and expertise in solar water projects.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ochieze Kessington Obinna",
      role: "Head of Projects & Structural Engineering",
      bio: "Seasoned civil/structural engineer with over 25 years of experience in project management and construction.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Jones-Ere Alaere",
      role: "Business Development Manager",
      bio: "Technology strategist and entrepreneur bridging business and digital transformation in energy and engineering sectors.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9e0c213?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Incorporation",
      description: "Geogreatotechnics & Geodreels Ltd was officially incorporated."
    },
    {
      year: "2012",
      title: "WAGP Project Milestone",
      description: "Successfully completed major West African Gas Pipeline project."
    },
    {
      year: "2017",
      title: "World Bank Water Project",
      description: "Executed significant World Bank assisted water scheme project."
    },
    {
      year: "2023",
      title: "Prime Port Electrical Earthing",
      description: "Completed advanced electrical earthing system for Prime Port Logistics."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1920&q=80" 
            alt="Engineering Excellence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About GGL</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Leading the way in geotechnical engineering and environmental consulting services across West Africa since 2008.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Geogreatotechnics & Geodreels Ltd (GGL) is a growing indigenous company incorporated in 2008, 
                building on the successful foundation of Geodreels Engineering Services. We have been providing 
                comprehensive services to the Oil and Gas Industries, Construction, Power, Environmental, 
                Government, Telecommunication and Engineering companies.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                We have completed numerous direct and sub-contract projects for major clients including SHELL, 
                CHEVRON, TOTAL E&P, AGIP, SPDC, SAIPEM, DAEWOO, and many others. Our expertise extends to 
                World Bank assisted water schemes and community development projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-red-600 text-white px-4 py-2">15+ Years Experience</Badge>
                <Badge className="bg-slate-600 text-white px-4 py-2">200+ Projects</Badge>
                <Badge className="bg-green-600 text-white px-4 py-2">50+ Major Clients</Badge>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                alt="Engineering Team at Work" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 text-white p-3 rounded-full mr-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-lg text-slate-600">
                  To become one of the foremost companies of integrity in West African Sub region 
                  servicing oil and gas companies in our areas of specialization.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 text-white p-3 rounded-full mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                </div>
                <p className="text-lg text-slate-600">
                  To become one of the leading companies providing first class services, especially in 
                  Corrosion mitigation, electrical, geotechnical, geophysical, dredging, construction, 
                  environmental and subsurface engineering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600">Key milestones in our company's growth</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="bg-red-600 text-white text-xl font-bold w-20 h-20 rounded-full flex items-center justify-center">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-slate-600">Meet the experts driving our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  {member.credentials && (
                    <p className="text-sm text-red-600 mb-2">{member.credentials}</p>
                  )}
                  <p className="text-sm font-semibold text-slate-700 mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Industry Leaders</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our growing list of satisfied clients and experience the GGL difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="https://wa.me/2348034003089">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
