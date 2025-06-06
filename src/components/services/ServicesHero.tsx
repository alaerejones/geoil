
import OptimizedImage from "@/components/OptimizedImage";

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <OptimizedImage 
          src="/lovable-uploads/8da55bf8-bc15-4492-903d-05918a5fa0e9.png" 
          alt="Engineering Services - Drilling Equipment" 
          className="w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-slate-200">
          Comprehensive engineering solutions for oil & gas, construction, and environmental sectors.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
