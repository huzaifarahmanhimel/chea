import { useState, useEffect } from 'react';

export default function DancingHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Custom animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes scaleIn {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          
          .animate-scaleIn {
            animation: scaleIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          }
          
          .pt-56\\.25 {
            padding-top: 56.25%;
          }
          
          @keyframes ping {
            75%, 100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          
          .animate-ping {
            animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            }
          }
          
          .pulse-animation {
            animation: pulse 2s infinite;
          }
        `
      }} />
    
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-gray-900/20">
        <div className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="https://i.pinimg.com/736x/dd/86/34/dd86341aaa095a0f6753536adce8e0a0.jpg"
            alt="Dancer silhouette"
            className="w-full h-full object-cover object-center grayscale"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center w-full h-full px-4">
        {/* Text Section */}
        <div className="text-center">
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-4 tracking-tight transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-4">LET'S</div>
            <div className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              DANCE
            </div>
          </h1>
          
       { /* Button Container */}
                  <div className={`mt-6 transition-all duration-1000 delay-500 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    <div className="flex flex-row items-center justify-center space-x-4">
                      <button 
                        onClick={() => alert('Learn More button clicked!')}
                        className="bg-gray-800 text-white py-3 px-6 flex items-center hover:bg-gray-700 transition-all duration-300 group"
                      >
                        <span className="mr-2">Learn More</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                      
                      <button 
                        onClick={openVideo}
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110 cursor-pointer relative overflow-hidden group pulse-animation"
                        aria-label="Play video"
                      >
                        {/* Play icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                     className="w-5 h-5 text-gray-800 relative z-10 group-hover:scale-110 transition-transform duration-300 ml-0.5">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
                
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-white opacity-30 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full"></span>
                
                {/* Pulse animation */}
                <span className="absolute inset-0 border-2 border-gray-300 rounded-full animate-ping opacity-0 group-hover:opacity-30"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

     

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded shadow-xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeVideo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video container with aspect ratio */}
            <div className="relative pt-56.25 h-0 overflow-hidden rounded">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="/api/placeholder/640/360"
                title="Dance Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}