
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Shield, Zap } from "lucide-react";

const CoreValues = () => {
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

  return (
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
  );
};

export default CoreValues;
