
import OptimizedImage from "@/components/OptimizedImage";

interface ServiceCardProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
    image: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
        <div className="flex items-center mb-6">
          <div className="bg-red-600 text-white p-3 rounded-full mr-4">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
        </div>
        <p className="text-base text-slate-600 mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="flex items-start space-x-3">
              <div className="bg-red-600 rounded-full p-1 mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm text-slate-600">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <OptimizedImage 
          src={service.image} 
          alt={service.title} 
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
