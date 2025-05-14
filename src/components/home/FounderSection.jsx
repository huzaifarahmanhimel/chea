import { useState, useEffect, useRef } from 'react';
import founder from '../images/IMG_8351.jpg';

export default function FounderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const features = [
    {
      title: "Tennis & Coaching",
      description: "From court to confidence — Ashley has trained players of all levels with passion, fun and purpose.",
      icon: "Tennis"
    },
    {
      title: "Massage & Bodywork",
      description: "Certified in sports massage, she blends technique with intuition to help you heal, recharge and feel your best..",
      icon: "massage"
    },
    {
      title: "Wake & Shake",
      description: "Her signature morning movement ritual: music, breath and dance to boost your energy for the day ahead.",
      icon: "dance"
    },
    {
      title: "Healthy Food Creation",
      description: "Ashley crafts nourishing meals inspired by nature, color and balance — made to fuel both body and mind.",
      icon: "food"
    },
    {
      title: "Heart & Soul",
      description: "Alofty Life is more than a brand — it’s Ashley’s lifestyle, vision and full-time presence.You’re not just booking a service. You’re meeting her energy.",
      icon: "file-text"
    },
    {
      title: "Automated Updates",
      description: "Keep everyone informed with status updates and task progress—automatically.",
      icon: "bell"
    }
  ];

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to render icon based on name
  const renderIcon = (iconName) => {
    const icons = {
      calendar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      share: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      layout: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      shield: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      "file-text": (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bell: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    };
    
    return icons[iconName] || null;
  };

  const FeatureItem = ({ feature, index, alignment }) => {
    const delay = `${index * 0.1}s`;
    
    // Different animation styles based on alignment
    const animationClass = isVisible ? (
      alignment === 'left' 
        ? 'opacity-100 translate-x-0' 
        : alignment === 'right'
          ? 'opacity-100 translate-x-0'
          : 'opacity-100 translate-y-0'
    ) : (
      alignment === 'left' 
        ? 'opacity-0 -translate-x-8' 
        : alignment === 'right'
          ? 'opacity-0 translate-x-8'
          : 'opacity-0 translate-y-8'
    );
    
    return (
      <div 
        className={`flex items-center mb-12 transition-all duration-700 ease-out ${animationClass}`}
        style={{ transitionDelay: delay }}
      >
        {alignment === 'left' && (
          <>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2 text-right">{feature.title}</h3>
              <p className="text-gray-400 text-right">{feature.description}</p>
            </div>
            <div className="mx-4 flex-shrink-0">
              <div className="bg-green-400 rounded-full p-3 w-12 h-12 flex items-center justify-center text-black">
                {renderIcon(feature.icon)}
              </div>
            </div>
          </>
        )}
        
        {alignment === 'right' && (
          <>
            <div className="mx-4 flex-shrink-0">
              <div className="bg-green-500 rounded-full p-3 w-12 h-12 flex items-center justify-center text-black">
                {renderIcon(feature.icon)}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </>
        )}
        
        {alignment === 'center' && (
          <div className="text-center w-full">
            <div className="flex justify-center mb-3">
              <div className="bg-orange-200 rounded-full p-3 w-12 h-12 flex items-center justify-center text-white">
                {renderIcon(feature.icon)}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 max-w-sm mx-auto">{feature.description}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-green-500 mb-4">
            Founder of Alofty Life
          </h2>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Ashley isn’t just the face of Alofty Life — she is the experience.
             Each session, class or meal is created and guided by her personally.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-7 gap-4 relative">
          {/* Left Features */}
          <div className="col-span-3 pr-8">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureItem 
                key={`left-${index}`} 
                feature={feature} 
                index={index} 
                alignment="left" 
              />
            ))}
          </div>

          {/* Center Image */}
          <div className="col-span-1 flex justify-center items-center relative">
            <div 
              className={`absolute w-full h-full rounded-full bg-gradient-to-b from-indigo-500 to-purple-600 opacity-20 blur-lg transform transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-0'}`}
            ></div>
            <div 
              className={`relative z-10 overflow-hidden rounded-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ width: '16rem', height: '16rem' }}
            >
              <img
                src={founder}
                alt="Founder"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="col-span-3 pl-8">
            {features.slice(3, 6).map((feature, index) => (
              <FeatureItem 
                key={`right-${index}`} 
                feature={feature} 
                index={index} 
                alignment="right" 
              />
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="md:hidden">
          {/* Center Image */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div 
                className={`absolute w-full h-full rounded-full bg-gradient-to-b from-indigo-500 to-purple-600 opacity-20 blur-lg transform transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-0'}`}
              ></div>
              <div 
                className={`relative z-10 overflow-hidden rounded-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ width: '12rem', height: '12rem' }}
              >
                <img
                  src="/api/placeholder/400/400"
                  alt="Founder"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureItem 
                key={`mobile-${index}`} 
                feature={feature} 
                index={index} 
                alignment="center" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}