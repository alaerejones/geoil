
import { Zap, Shield, Drill, Waves, Hammer, Leaf, Droplets, Earth, FlaskConical, Database, Sun } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  const services = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Industrial Water Drilling",
      description: "Professional water drilling services for industrial applications with advanced drilling techniques and equipment.",
      details: [
        "Deep borehole drilling and development",
        "Industrial water supply solutions",
        "Water quality assessment and testing",
        "Drilling equipment and maintenance"
      ],
      image: "/lovable-uploads/a621e485-0a37-44df-9d73-9e24b082bff4.png"
    },
    {
      icon: <Earth className="h-6 w-6" />,
      title: "Integrated Geoscience",
      description: "Comprehensive geoscience solutions combining geological, geophysical, and geochemical analysis for complete subsurface understanding.",
      details: [
        "Geological mapping and analysis",
        "Geophysical surveys and interpretation",
        "Geochemical analysis and testing",
        "Integrated subsurface modeling"
      ],
      image: "/lovable-uploads/48389c9f-b7c2-49b3-b0ef-6b6043e66c7d.png"
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Hydrogeological Investigation",
      description: "Detailed hydrogeological studies to understand groundwater systems, flow patterns, and aquifer characteristics.",
      details: [
        "Groundwater exploration and mapping",
        "Aquifer testing and analysis",
        "Hydrogeological modeling",
        "Water resource assessment"
      ],
      image: "/lovable-uploads/fb6c55b7-e749-4289-bd8c-c9fae76017e8.png"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Reservoir Study and Management",
      description: "Comprehensive reservoir analysis and management solutions for optimal resource extraction and sustainability.",
      details: [
        "Reservoir characterization studies",
        "Production optimization strategies",
        "Enhanced recovery techniques",
        "Reservoir monitoring and management"
      ],
      image: "/lovable-uploads/f81baa2b-0ed8-45a2-8ef5-a6a0e19603af.png"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Sustainable Energy Services",
      description: "Complete renewable energy solutions including solar, wind, and energy storage systems for industrial and commercial applications.",
      details: [
        "Solar farm development and installation",
        "Wind resource assessment and turbine installation",
        "Grid-scale energy storage solutions",
        "Hybrid renewable energy systems",
        "Energy management and optimization",
        "Grid-connected and off-grid solutions"
      ],
      image: "/lovable-uploads/5779b0d1-d14d-4748-a057-c9ac0f2e7523.png"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Electrical Earthing",
      description: "Comprehensive electrical earthing services to ensure the safety and operational integrity of electrical installations.",
      details: [
        "Earthing system design and implementation",
        "Resistivity testing and analysis",
        "Lightning protection systems",
        "Industrial and commercial installations"
      ],
      image: "/lovable-uploads/14f2c0dc-0ae2-45af-8719-7e4805c0da71.png"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Pipeline Cathodic Protection",
      description: "Advanced cathodic protection systems that safeguard pipelines and structures from corrosion.",
      details: [
        "Preliminary CP surveys and design",
        "Anode installation and testing",
        "Cable cad welding and pin brazing",
        "Close interval potential surveys (CIPS)"
      ],
      image: "/lovable-uploads/1a54ba12-4f09-4e07-907d-3ac5a13f13f5.png"
    },
    {
      icon: <Drill className="h-6 w-6" />,
      title: "Geophysical & Geotechnical Investigation",
      description: "Deep insights into subsurface conditions through advanced geophysical and geotechnical analysis.",
      details: [
        "2D resistivity and seismic analysis",
        "Soil thermal resistivity studies",
        "Borehole drilling and water schemes",
        "Solar power installations"
      ],
      image: "/lovable-uploads/4c1ff37e-aa52-4e7e-bce7-0ca36e1c2af4.png"
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Water Drilling & Solar Systems",
      description: "Sustainable water supply solutions with solar-powered borehole systems.",
      details: [
        "Borehole drilling and development",
        "Solar power system installation",
        "Water quality testing and treatment",
        "Hydrogeological studies"
      ],
      image: "/lovable-uploads/dde6b7e9-e57a-4d95-bcdf-dbe2f8c57543.png"
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Civil Construction & Piling",
      description: "Comprehensive civil engineering and foundation solutions for infrastructure projects.",
      details: [
        "Pile foundation design and installation",
        "Pile integrity testing (PIT)",
        "Load testing and monitoring",
        "Marine recovery and diving services"
      ],
      image: "/lovable-uploads/fd563067-1600-4774-82fd-6c619204fd88.png"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Environmental Services",
      description: "Comprehensive environmental impact assessments and sustainable project development.",
      details: [
        "Environmental Impact Assessments (EIA)",
        "Environmental monitoring and compliance",
        "Sustainable project development strategies",
        "Community engagement and development"
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
