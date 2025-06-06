
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Work With Us?</h2>
        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          Partner with GGL for your next engineering project and experience the difference that expertise makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-10 py-6 shadow-2xl hover:shadow-red-600/25 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.link/se6ial" className="flex items-center space-x-3">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-base px-10 py-6 shadow-2xl transition-all duration-300 transform hover:scale-105">
            <a href="#" className="flex items-center space-x-3">
              <FileText className="h-5 w-5" />
              <span>View Company Profile</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
