
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Clock } from "lucide-react";

const Achievements = () => {
  const achievements = [
    { number: "15+", label: "Years of Experience", icon: <Clock className="h-5 w-5" /> },
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="h-5 w-5" /> },
    { number: "50+", label: "Major Clients", icon: <Users className="h-5 w-5" /> },
    { number: "100%", label: "Safety Record", icon: <Shield className="h-5 w-5" /> }
  ];

  return (
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
  );
};

export default Achievements;
