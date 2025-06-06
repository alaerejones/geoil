
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <OptimizedImage 
          src="/lovable-uploads/d8f0512d-5eda-46c4-ac92-aae837249aad.png" 
          alt="GGL Engineering Team at Work" 
          className="w-full h-full"
          loading="eager"
          priority={true}
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
  );
};

export default AboutHero;
