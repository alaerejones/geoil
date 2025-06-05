import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, CheckCircle, ArrowRight, Shield, Zap, Clock, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import OptimizedImage from "@/components/OptimizedImage";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all of our actions."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence",
      description: "We pursue excellence in every project, delivering superior quality solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Teamwork",
      description: "We collaborate effectively to achieve common goals and shared success."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "We embrace innovation to stay ahead in the rapidly evolving engineering landscape."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Experience", icon: <Clock className="h-5 w-5" /> },
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="h-5 w-5" /> },
    { number: "50+", label: "Major Clients", icon: <Users className="h-5 w-5" /> },
    { number: "100%", label: "Safety Record", icon: <Shield className="h-5 w-5" /> }
  ];

  const teamMembers = [
    {
      name: "Engr. Segun Falodun, mnmgs, c.engr, comeg, MSc.",
      role: "Managing Director",
      image: "/lovable-uploads/04cfb953-5171-4dcd-ae5d-0ccdb3f010fe.png",
      bio: "Segun Falodun is the Managing Director of Geogreatotechnics & Geodreels Ltd. An astute engineer and geoscientist with over 23 years of experience, he has led numerous large-scale projects across Nigeria and West Africa. He began his career at Wiss Engineering Ltd., executing over 20 cathodic protection and steel structure projects. With strong expertise in petroleum geoscience, geotechnical and corrosion engineering, and pipeline construction, Engr. Falodun has successfully completed over 2,500 Vertical Electrical Soundings and a wide range of seismic and NDT works. He holds multiple degrees including a Master's in Petroleum Geoscience (FUPRE), a Master's and PGD in Applied Geophysics (Rivers State University), and is currently pursuing a third M.Sc. in Oil and Gas Energy Management at the University of East London. He is a member of several professional bodies including the NMGS, SEG, and COREN."
    },
    {
      name: "Dave Adoye",
      role: "Geophysics & Water Resources Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Dave Adoye leads the Geophysics and Water Resources unit. With over 17 years of field experience and a B.Sc. in Geophysics from Edo State University, he has successfully executed more than 15 solar water projects across Nigeria. He is currently pursuing a Master's degree in Engineering Geology and Hydrology at the University of Port Harcourt. Mr. Adoye is widely respected for pioneering solar borehole solutions in the Niger Delta and is a corporate member of the Nigerian Mining and Geosciences Society (NMGS)."
    },
    {
      name: "Ochieze Kessington Obinna",
      role: "Head of Projects & Structural Engineering",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
      bio: "Kessington Ochieze is a seasoned civil/structural engineer and project management expert with over 25 years of professional experience. He has overseen the design and construction of major projects including residential estates, shopping malls, government facilities, and marine terminal structures across the Niger Delta. He holds a B.Eng. in Civil/Structural Engineering from the University of Port Harcourt and is currently pursuing an M.Eng. in Project Management & Construction at UNN. A corporate member of NSE, COREN, and MASE, Ochieze brings hands-on leadership in structural designs, foundation works, and engineering risk analysis."
    },
    {
      name: "Jones-Ere Alaere",
      role: "Business Development Manager / Independent Technology Consultant",
      image: "/lovable-uploads/2a017ab6-1e0b-40ee-9df5-c49397d70b9f.png",
      bio: "Jones-Ere Alaere is an innovative technology strategist, author, and entrepreneur who bridges business and digital transformation. With a background in software engineering and experience working across startups and enterprise consulting, she helps organizations in energy, engineering, and digital sectors identify technology gaps and implement scalable systems. As founder of Create Technologies and author of the Code & Contour book series, she brings deep expertise in digital strategy, user-focused innovation, and enterprise modernization. She consults independently for engineering and energy firms seeking future-forward business solutions, with a focus on customer-centric, efficient, and high-impact technology adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="About Us"
        description="Learn about GGL's 15+ years of expertise in geotechnical engineering and environmental consulting across West Africa. Our commitment to integrity, excellence, and innovation."
        keywords="about GGL, geotechnical engineering company, environmental consulting Nigeria, engineering expertise West Africa"
      />
      
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" 
            alt="About GGL Engineering Team" 
            className="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white mb-8 text-sm font-medium px-4 py-2 shadow-lg">
            About GGL
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Who We Are</h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            A leading geotechnical engineering and environmental consulting company with over 15 years of proven expertise across West Africa.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-slate-100 text-slate-700 mb-4 text-sm font-medium px-4 py-2">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Engineering Excellence Since 2009
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                GGL was founded with a vision to provide world-class geotechnical engineering and environmental consulting services across West Africa. Over the years, we have established ourselves as a trusted partner for major oil & gas companies, construction firms, and government agencies.
              </p>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Our commitment to technical excellence, safety, and environmental stewardship has earned us recognition as one of the region's premier engineering consultancies.
              </p>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-4">
                <a href="https://wa.me/2348034003089" className="flex items-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div>
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="GGL Engineering Projects" 
                className="w-full h-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-700 mb-4 text-sm font-medium px-4 py-2">Our Achievements</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Numbers That Speak</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A track record of excellence spanning over a decade of operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="bg-red-600 text-white p-4 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.number}</div>
                <div className="text-sm font-medium text-slate-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-700 mb-4 text-sm font-medium px-4 py-2">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced team of engineers and professionals brings decades of expertise to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="flex-shrink-0">
                      <OptimizedImage 
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full border-4 border-red-100"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm" className="text-slate-600 hover:text-red-600 hover:border-red-600">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-700 mb-4 text-sm font-medium px-4 py-2">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Drives Us</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our core values guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-red-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-900">{value.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-10">
                <div className="bg-red-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  To provide innovative, reliable, and sustainable geotechnical engineering and environmental consulting services that exceed client expectations while contributing to the development of West Africa's infrastructure and energy sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-10">
                <div className="bg-red-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Vision</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  To be the premier geotechnical engineering and environmental consulting firm in West Africa, recognized for our technical excellence, innovation, and commitment to sustainable development practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            Partner with GGL for your next engineering project and experience the difference that expertise makes.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-10 py-6 shadow-2xl hover:shadow-red-600/25 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/2348034003089" className="flex items-center space-x-3">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
