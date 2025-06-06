
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
        <p className="text-lg text-slate-300 mb-8">
          Get expert consultation tailored to your specific engineering needs.
        </p>
        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-4">
          <a href="https://wa.link/se6ial">Request Consultation</a>
        </Button>
      </div>
    </section>
  );
};

export default ServicesCTA;
