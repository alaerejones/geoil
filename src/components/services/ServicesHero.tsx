
import OptimizedImage from "@/components/OptimizedImage";

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1920&q=80" 
          alt="Engineering Services" 
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
