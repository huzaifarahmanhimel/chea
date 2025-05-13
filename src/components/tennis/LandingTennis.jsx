import React, { useState, useEffect } from 'react';

const LandingTennis = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-green-50 to-transparent opacity-70"></div>
      
      {/* Floating Tennis Balls */}
      <div className="hidden lg:block absolute top-20 right-10 w-24 h-24 rounded-full bg-green-100 opacity-30"></div>
      <div className="hidden lg:block absolute bottom-40 left-10 w-16 h-16 rounded-full bg-green-200 opacity-40"></div>
      
      <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Content (5 columns on large screens) */}
          <div 
            className={`lg:col-span-5 space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center py-1 px-3 bg-green-50 rounded-full text-green-600 text-sm font-medium tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"></path>
                <path d="M12 1v22"></path>
                <path d="M1 12h22"></path>
                <path d="M12 1c3.3 2.667 5 5.667 5 9s-1.7 6.333-5 9c-3.3-2.667-5-5.667-5-9s1.7-6.333 5-9z"></path>
              </svg>
              WELCOME TO TOPSPIN
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Discover Your <span className="text-green-600">Tennis</span> Potential With Champions
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              We combine world-class coaching methodology with cutting-edge technology to develop tennis players of all ages and skill levels. Join the elite training program that has produced professional champions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                START TRAINING
              </button>
              <button className="px-8 py-4 bg-white text-green-600 font-medium rounded-lg shadow border border-green-100 hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                LEARN MORE
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-600">425+</div>
                <div className="text-gray-600 font-medium">Elite Players Trained</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-600">16</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Side - Images (7 columns on large screens) */}
          <div className="lg:col-span-7">
            <div className="relative grid grid-cols-6 gap-4 lg:gap-6">
              {/* Large main image */}
              <div 
                className={`col-span-4 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src="https://i.pinimg.com/736x/2f/80/6e/2f806e4e85146205ebbb995ef7999d15.jpg" 
                  alt="Tennis Professional" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <p className="text-sm font-medium opacity-80">FEATURED COACH</p>
                  <h3 className="text-xl font-bold">Alex Williams</h3>
                  <p className="text-sm opacity-90">Former ATP Top 50</p>
                </div>
              </div>

              {/* Top right image */}
              <div 
                className={`col-span-2 relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-1000 ease-out delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <img 
                  src="https://i.pinimg.com/736x/c4/a1/fb/c4a1fbeec72be4f40a3af7f5a1a6cfbd.jpg" 
                  alt="Tennis Court" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-600/20"></div>
              </div>

              {/* Bottom right content card */}
              <div 
                className={`col-span-2 bg-white rounded-2xl p-4 shadow-xl transform transition-all duration-1000 ease-out delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="text-green-600 font-bold mb-1">LEARN FROM THE BEST</div>
                <p className="text-gray-700 text-sm">Book a personalized coaching session today</p>
                <button className="mt-3 w-full bg-gray-100 text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium">
                  SCHEDULE
                </button>
              </div>

              {/* Video play button icon on main image */}
              <button 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-2xl hover:bg-green-600 hover:text-white transition-all duration-300 z-30 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-600 hover:text-white transition-colors">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Stats & CTA Banner */}
        <div 
          className={`mt-16 lg:mt-24 p-8 lg:p-12 bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Left Stats */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">World-Class Facilities</h3>
            <p className="text-gray-600">Access to 12 premium courts, fitness center, and recovery equipment.</p>
          </div>
          
          {/* Center Stats */}
          <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l md:border-r border-gray-100 md:px-8 pt-6 md:pt-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Elite Coaching Staff</h3>
            <p className="text-gray-600">Our coaches have trained junior champions and Grand Slam winners.</p>
          </div>
          
          {/* Right CTA */}
          <div className="flex items-center justify-center border-t md:border-t-0 pt-6 md:pt-0">
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto text-center">
              BOOK A FREE TRIAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTennis;