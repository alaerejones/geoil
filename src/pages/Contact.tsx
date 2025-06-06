
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import OptimizedImage from "@/components/OptimizedImage";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in your services.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.link/se6ial?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+234 803 400 3089"],
      action: "Call Us",
      link: "tel:+2348034003089"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["geogreatotechnics@gmail.com"],
      action: "Email Us",
      link: "mailto:geogreatotechnics@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["Port Harcourt Office:", "#4 Daba Avenue, Off Airforce Road, Eliozu"],
      action: "Get Directions",
      link: "https://maps.google.com/?q=4+Daba+Avenue,+Off+Airforce+Road,+Eliozu,+Port+Harcourt"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      action: "Schedule Meeting",
      link: "https://wa.link/se6ial"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Contact Us"
        description="Get in touch with GGL for your geotechnical engineering and environmental consulting needs. Contact us via phone, email, or visit our Port Harcourt office."
        keywords="contact GGL, geotechnical engineering contact Nigeria, environmental consulting contact, engineering services Port Harcourt"
      />
      
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
            alt="Contact GGL Engineering" 
            className="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="bg-red-600 text-white mb-8 text-sm font-medium px-4 py-2 shadow-lg">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your project? Get in touch with our expert team for professional consultation and competitive quotes.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-slate-100 text-slate-700 mb-4 text-sm font-medium px-4 py-2">Contact Information</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">How to Reach Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple ways to connect with our team for your engineering needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-red-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-900">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-base text-slate-600">{detail}</p>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="hover:bg-red-600 hover:text-white transition-all duration-300 text-sm"
                    onClick={() => window.open(info.link, '_blank')}
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-700 mb-4 text-sm font-medium px-4 py-2">Send Message</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get a Quote</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full text-base"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-base font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full text-base"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-base font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full text-base"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-base font-medium text-slate-700 mb-2">
                    Service Required
                  </label>
                  <Input
                    id="service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full text-base"
                    placeholder="e.g., Electrical Earthing, Cathodic Protection, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full text-base resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-4 flex-1"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send via WhatsApp
                  </Button>
                  <Button 
                    type="button" 
                    size="lg" 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-base px-8 py-4"
                    onClick={() => window.open('https://wa.link/se6ial', '_blank')}
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Quick Chat
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Need Immediate Assistance?</h2>
          <p className="text-lg text-slate-300 mb-12 leading-relaxed">
            For urgent engineering support or emergency consultations, contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-4">
              <a href="tel:+2348034003089" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Emergency Line</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-slate-900 text-base px-8 py-4 backdrop-blur-sm">
              <a href="https://wa.link/se6ial" className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp Now</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
