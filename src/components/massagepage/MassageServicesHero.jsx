import React, { useEffect, useState } from 'react';

const MassageServicesHero = () => {
  const [visible, setVisible] = useState(false);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Background Image with subtle zoom animation */}
      <div className="absolute inset-0 bg-gray-200 overflow-hidden">
        <div className="absolute inset-0 scale-105 animate-slow-zoom">
          <img 
            src="https://i.pinimg.com/736x/17/ee/1f/17ee1fb6244a9ed7cae979cfc0961943.jpg" 
            alt="Woman receiving facial massage" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      
      {/* Content Container with animations - centered vertically now without navbar */}
      <div className="relative flex flex-col justify-center h-full container mx-auto px-6">
        <div className={`max-w-2xl transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Subtle badge */}
          <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-medium text-emerald-800 mb-6 transform transition-all hover:scale-105 duration-300">
          Massage with Intention. Care that Connects.
          </div>
          
          {/* Main Heading with staggered animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            <span className={`block transition-all duration-700 delay-100 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              Specialized Women's
            </span>
            <span className={`block transition-all duration-700 delay-300 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              Massage Services
            </span>
          </h1>
          
          {/* Subheading */}
          <p className={`text-lg text-white/90 mb-8 max-w-xl transition-all duration-700 delay-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
           Every treatment is delivered by Ashley — a certified sports massage therapist — blending intuition and technique to help your body recover, release, and reset.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a 
              href="/book-consultation" 
              className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-full hover:bg-emerald-700 transition duration-300 ease-in-out text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book a Session with Ashley
            </a>
            <a 
              href="/services" 
              className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium px-6 py-3 rounded-full hover:bg-white/30 transition duration-300 ease-in-out text-center"
            >
              See Treatment Options
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default MassageServicesHero;