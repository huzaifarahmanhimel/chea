import { useState } from 'react';

export default function ContactUsFood() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-green-50 p-6 md:p-10 lg:p-12 rounded-lg relative overflow-hidden">
        {/* Decorative curved lines */}
        <div className="absolute top-0 left-0 w-24 h-24 text-green-700 opacity-50">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,90 Q30,10 90,50" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-36 h-36 text-green-700 opacity-50">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90,10 Q40,30 10,80" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8 relative z-10">
       { /* Text Content */}
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Your well-being is our priority, and we're here to support you every step of the way
                    </h2>
                    <p className="text-gray-700 mb-6">
                      Our nutrition experts are here to guide you on your journey to optimal health. 
                      Whether you're looking for advice on meal choices, portion control, or specific 
                      dietary requirements, we've got you covered
                    </p>
                    <a 
                      href="Contactus" 
                      className={`bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md transition-all duration-300 ${isHovered ? 'shadow-lg' : 'shadow'}`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Contact Us
                    </a>
                  </div>

                  {/* Image Grid */}
          <div className="lg:w-3/5 grid grid-cols-2 gap-4">
            {/* Top Row */}
            <div className="relative rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <img 
                src="https://i.pinimg.com/736x/71/31/8a/71318a5ba3175a1663831b63d7783294.jpg" 
                alt="Healthy bowl with grains and vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <img 
                src="https://i.pinimg.com/736x/77/52/60/775260464661ad6c17889c4a670ae0c1.jpg" 
                alt="Avocado bowls with fresh ingredients" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Row */}
            <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 mt-4">
              <img 
                src="https://i.pinimg.com/736x/41/a0/00/41a000a748f636a919c45fdb999b646c.jpg" 
                alt="Various healthy meal options" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative col-span-1 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 mt-4">
              <img 
                src="https://i.pinimg.com/736x/56/fc/99/56fc99cee84f687f2f7043ce22dcb77c.jpg" 
                alt="Colorful nutritious salad bowl" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}