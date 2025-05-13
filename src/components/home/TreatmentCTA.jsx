import React from 'react';

const TreatmentCTA = () => {
  return (
    <div className="w-full bg-black bg-opacity-90 py-10 md:py-16 px-4 relative overflow-hidden">
      {/* Background overlay with slight texture effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-serif tracking-wider text-center md:text-left mb-6 md:mb-0">
          GET YOUR TREATMENT NOW!
        </h2>
        
        <button className="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-2 min-w-32 text-sm tracking-wide transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 active:scale-95">
          View more
        </button>
      </div>
    </div>
  );
};

export default TreatmentCTA;