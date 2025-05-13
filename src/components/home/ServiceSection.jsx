import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function ServiceSection() {
  const [hovered, setHovered] = useState(null);
  
  const services = [
    {
      id: 1,
      name: "SCRUB OPTIONS",
      number: "200"
    },
    {
      id: 2,
      name: "TREATMENTS",
      number: "150"
    },
    {
      id: 3,
      name: "MONTHLY VISITS",
      number: "450"
    },
    {
      id: 4,
      name: "FACIAL PRODUCTS",
      number: "120"
    }
  ];

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-4 w-full">
                  <span className="text-6xl md:text-7xl lg:text-8xl opacity-10 font-thin absolute top-0 left-1/2 transform -translate-x-1/2">
                    {service.number}
                  </span>
                  <h3 className="text-sm md:text-base uppercase tracking-widest text-center mt-8 relative z-10">
                    {service.name}
                  </h3>
                </div>
                <div className={`transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 mt-4 ${hovered === service.id ? 'bg-white' : ''}`}>
                  <ArrowUpRight 
                    className={`w-5 h-5 transition-colors duration-300 ${hovered === service.id ? 'text-black' : 'text-white'}`} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}