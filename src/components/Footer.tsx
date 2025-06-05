
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/05e99988-5d95-4837-ada7-c15edb9f9ec1.png" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">GGL</span>
            </div>
            <p className="text-slate-400 text-sm">
              Leading geotechnical engineering and environmental consulting services across West Africa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Electrical Earthing</li>
              <li>Cathodic Protection</li>
              <li>Geotechnical Investigation</li>
              <li>Water Drilling & Solar</li>
              <li>Environmental Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div>
                  <a href="tel:+2348034003089" className="hover:text-white transition-colors">08034003089</a>,{" "}
                  <a href="tel:+2347051189594" className="hover:text-white transition-colors">07051189594</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:geogreatotechnics@gmail.com" className="hover:text-white transition-colors">
                  geogreatotechnics@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <div className="mb-2">
                    <strong>Port Harcourt:</strong><br />
                    #4 Daba Avenue, Off Airforce Road, Eliozu
                  </div>
                  <div className="mb-2">
                    <strong>Lagos:</strong><br />
                    14 Talabi Street, Adeniyi Jones, Ikeja
                  </div>
                  <div>
                    <strong>Abuja:</strong><br />
                    Suit 21, Cherry Plaza, Behind Eternal Filling Station, Utako
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 Geogreatotechnics & Geodreels Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
