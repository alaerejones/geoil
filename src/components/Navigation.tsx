
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/lovable-uploads/05e99988-5d95-4837-ada7-c15edb9f9ec1.png" alt="Geogreatotechnics Logo" className="h-16 w-16" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-red-600 transition-colors">Home</Link>
            <Link to="/about" className="text-slate-700 hover:text-red-600 transition-colors">About</Link>
            <Link to="/services" className="text-slate-700 hover:text-red-600 transition-colors">Services</Link>
            <Link to="/projects" className="text-slate-700 hover:text-red-600 transition-colors">Projects</Link>
            <Link to="/contact" className="text-slate-700 hover:text-red-600 transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+2348034003089" className="hidden sm:flex items-center space-x-2 text-slate-700 hover:text-red-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">08034003089</span>
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white hidden sm:flex">
              <a href="https://wa.me/2348034003089" className="flex items-center space-x-2">
                <span>Get Quote</span>
              </a>
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-slate-700 hover:text-red-600">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-slate-700 hover:text-red-600">About</Link>
              <Link to="/services" className="block px-3 py-2 text-slate-700 hover:text-red-600">Services</Link>
              <Link to="/projects" className="block px-3 py-2 text-slate-700 hover:text-red-600">Projects</Link>
              <Link to="/contact" className="block px-3 py-2 text-slate-700 hover:text-red-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
