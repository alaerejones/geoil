
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award } from "lucide-react";

const MissionVision = () => {
  return (
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
  );
};

export default MissionVision;
