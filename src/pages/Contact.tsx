
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Contact = () => {
  const offices = [
    {
      city: "Port Harcourt (Headquarters)",
      address: "#4 Daba Avenue, Off Airforce Road, Eliozu, Port Harcourt",
      secondary: "Plot 24 Trans-Amadi Industrial Layout (Apex Eastern Yard)"
    },
    {
      city: "Lagos",
      address: "14 Talabi Street, Adeniyi Jones, Ikeja, Lagos State"
    },
    {
      city: "Abuja",
      address: "Suit 21, Cherry Plaza, Behind Eternal Filling Station, Utako, Abuja"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-20 pt-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-slate-200">
            Get in touch with our engineering experts for your next project.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <Input type="tel" placeholder="+234 800 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Interest</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600">
                      <option>Select a service</option>
                      <option>Electrical Earthing</option>
                      <option>Cathodic Protection</option>
                      <option>Geotechnical Investigation</option>
                      <option>Water Drilling & Solar</option>
                      <option>Environmental Services</option>
                      <option>Civil Construction</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea rows={4} placeholder="Tell us about your project requirements..." />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 text-white p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Phone Numbers</h4>
                        <div className="text-slate-600">
                          <a href="tel:+2348034003089" className="hover:text-red-600 transition-colors">08034003089</a>
                          <br />
                          <a href="tel:+2347051189594" className="hover:text-red-600 transition-colors">07051189594</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 text-white p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Email Addresses</h4>
                        <div className="text-slate-600">
                          <a href="mailto:geogreatotechnics@gmail.com" className="hover:text-red-600 transition-colors">
                            geogreatotechnics@gmail.com
                          </a>
                          <br />
                          <a href="mailto:geogreatotechnics@yahoo.com" className="hover:text-red-600 transition-colors">
                            geogreatotechnics@yahoo.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 text-white p-3 rounded-full">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Business Hours</h4>
                        <div className="text-slate-600">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: Emergency calls only
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <a href="https://wa.me/2348034003089" className="flex items-center justify-center space-x-2">
                        <span>WhatsApp Direct</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-slate-600">Find us across Nigeria's major business centers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-red-600 text-white p-2 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{office.city}</h3>
                  </div>
                  <p className="text-slate-600 mb-2">{office.address}</p>
                  {office.secondary && (
                    <p className="text-slate-500 text-sm">{office.secondary}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
