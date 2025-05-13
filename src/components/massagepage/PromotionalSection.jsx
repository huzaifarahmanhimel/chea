
import { useState } from 'react';

export default function PromotionalSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full py-8 px-4 md:px-8 lg:px-16 bg-stone-100">
      <div 
        className="relative rounded-lg overflow-hidden shadow-lg max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image with Overlay */}
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src="https://i.pinimg.com/736x/5b/8f/72/5b8f72c4eb2ea1f8ba0aa7eee167c31e.jpg" 
            alt="Spa Treatment" 
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 sm:mb-4">
            Save 30% on your first Message
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white text-center mb-4 sm:mb-8">
            Reveal post-summer radiance with your first heyday facial.
          </p>
          <button 
            className={`bg-white text-gray-800 font-medium py-2 px-6 rounded transition-all ${
              isHovered ? 'bg-opacity-90 scale-105' : 'bg-opacity-100'
            }`}
            onClick={() => console.log('Booking now')}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}