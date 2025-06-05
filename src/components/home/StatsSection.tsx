
import React from "react";
import { Shield, CheckCircle, Users, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="h-5 w-5" /> },
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="h-5 w-5" /> },
    { number: "50+", label: "Major Clients", icon: <Users className="h-5 w-5" /> },
    { number: "100%", label: "Safety Record", icon: <Shield className="h-5 w-5" /> }
  ];

  return (
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
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
