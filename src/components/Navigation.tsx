
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/geo-uploads/05e99988-5d95-4837-ada7-c15edb9f9ec1.png" alt="Geogreatotechnics Logo" className="h-20 w-20" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('/')} className="text-slate-700 hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => handleNavigation('/about')} className="text-slate-700 hover:text-red-600 transition-colors">About</button>
            <button onClick={() => handleNavigation('/services')} className="text-slate-700 hover:text-red-600 transition-colors">Services</button>
            <button onClick={() => handleNavigation('/projects')} className="text-slate-700 hover:text-red-600 transition-colors">Projects</button>
            <button onClick={() => handleNavigation('/contact')} className="text-slate-700 hover:text-red-600 transition-colors">Contact</button>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+2348034003089" className="hidden sm:flex items-center space-x-2 text-slate-700 hover:text-red-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">08034003089</span>
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white hidden sm:flex">
              <a href="https://wa.link/se6ial" className="flex items-center space-x-2">
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
              <button onClick={() => handleNavigation('/')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-red-600">Home</button>
              <button onClick={() => handleNavigation('/about')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-red-600">About</button>
              <button onClick={() => handleNavigation('/services')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-red-600">Services</button>
              <button onClick={() => handleNavigation('/projects')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-red-600">Projects</button>
              <button onClick={() => handleNavigation('/contact')} className="block w-full text-left px-3 py-2 text-slate-700 hover:text-red-600">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
