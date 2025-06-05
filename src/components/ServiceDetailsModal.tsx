
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/OptimizedImage";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    details?: string[];
  } | null;
}

const ServiceDetailsModal = ({ isOpen, onClose, service }: ServiceDetailsModalProps) => {
  if (!service) return null;

  const serviceDetails = {
    "Industrial Water Drilling": [
      "Deep borehole drilling and development",
      "Industrial water supply solutions", 
      "Water quality assessment and testing",
      "Drilling equipment and maintenance"
    ],
    "Integrated Geoscience": [
      "Geological mapping and analysis",
      "Geophysical surveys and interpretation",
      "Geochemical analysis and testing",
      "Integrated subsurface modeling"
    ],
    "Hydrogeological Investigation": [
      "Groundwater exploration and mapping",
      "Aquifer testing and analysis",
      "Hydrogeological modeling",
      "Water resource assessment"
    ],
    "Reservoir Study and Management": [
      "Reservoir characterization studies",
      "Production optimization strategies",
      "Enhanced recovery techniques",
      "Reservoir monitoring and management"
    ],
    "Electrical Earthing": [
      "Earthing system design and implementation",
      "Resistivity testing and analysis",
      "Lightning protection systems",
      "Industrial and commercial installations"
    ],
    "Cathodic Protection": [
      "Preliminary CP surveys and design",
      "Anode installation and testing",
      "Cable cad welding and pin brazing",
      "Close interval potential surveys (CIPS)"
    ],
    "Geotechnical Investigation": [
      "2D resistivity and seismic analysis",
      "Soil thermal resistivity studies",
      "Borehole drilling and water schemes",
      "Solar power installations"
    ]
  };

  const details = serviceDetails[service.title as keyof typeof serviceDetails] || [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-2xl">
            <div className="bg-red-600 text-white p-3 rounded-full">
              {service.icon}
            </div>
            <span>{service.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <OptimizedImage 
              src={service.image} 
              alt={service.title} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <Badge className="bg-red-100 text-red-700 mb-4">Service Details</Badge>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <h4 className="font-semibold text-slate-900 mb-4">What We Offer:</h4>
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-red-600 rounded-full p-1 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm text-slate-600">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;
