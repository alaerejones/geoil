
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

const CompanyOverview = () => {
  return (
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
              src="/lovable-uploads/a4406bf3-416a-4114-8b57-3d91a1989e62.png" 
              alt="GGL Field Team with Drilling Equipment" 
              className="w-full h-96 rounded-lg shadow-lg"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
