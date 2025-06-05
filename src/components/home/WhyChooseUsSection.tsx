
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Users, Award } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "Committed to ethical practices and transparent operations in all our projects."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation",
      description: "Utilizing cutting-edge technology and advanced techniques for superior results."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experience", 
      description: "Over 15 years of proven expertise in geotechnical and environmental services."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Safety",
      description: "100% safety record with stringent HSE policies and procedures."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="bg-red-100 text-red-700 mb-4 text-sm font-medium px-4 py-2">Why Choose Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose GGL?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by industry leaders for our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-red-600 text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
