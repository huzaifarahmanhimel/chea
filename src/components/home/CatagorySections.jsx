import { useState, useEffect } from 'react';
import tennisimg from '../images/tennisplaing.jpg';

export default function CategorySections() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate parallax and animation effects based on scroll position
  const getParallaxOffset = (index) => {
    return {
      y: scrollY * 0.05 * (index % 2 === 0 ? 1 : -1)
    };
  };
  
  const treatments = [
    {
      id: 1,
      title: "HEALTHY FOOD",
      description: "Wholesome meals made from real, natural ingredients.",
      image: "https://i.pinimg.com/736x/f2/16/f0/f216f08940e8370d07f2295285a952df.jpg",
      link: "/FoodBusiness"
    },
    {
      id: 2,
      title: "BODYWORK & MASSAGE",
      description: "Relax your body. Rebalance your energy.",
      image: "https://i.pinimg.com/736x/3d/a7/27/3da727eb3919b46fdf96898ebacf0b18.jpg",
      link: "/MassageParlour"
    },
    {
      id: 3,
      title: "TENNIS",
      description: "Fun, focused coaching for every age and level.",
      image: tennisimg,
      link: "/tennisPage"
    },
    {
      id: 4,
      title: "WAKE & SHAKE",
      description: "Morning energy through movement, music, and flow.",
      image: "https://i.pinimg.com/736x/03/7a/78/037a78e3cae1d906c0cc484d122fe28d.jpg",
      link: "/DancingPages"
    }
  ];
  
  return (
    <div className="bg-stone-100 text-white min-h-screen">
      {/* Modern Header with H1 Button */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">ALOFTY LIFE</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition-all duration-300 text-sm font-medium">
          BOOK NOW
        </button>
      </div>
      
      {/* Hero Quote Section with reduced spacing */}
      <div 
        className="w-full relative overflow-hidden pt-4 pb-6 flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 z-10"></div>
        <div className="max-w-3xl text-center relative z-20 px-4">
          <div className="text-4xl font-serif mb-2 text-amber-300">"</div>
          <p className="text-lg md:text-xl italic text-amber-100 font-light leading-relaxed">
            A handpicked selection of what makes your body, mind, and energy thrive.
          </p>
          <div className="text-4xl font-serif mt-2 text-amber-300">"</div>
        </div>
      </div>
      
      {/* Treatment Cards Section */}
      <div className="px-6 md:px-10 pb-20">
        <h2 className="text-center text-2xl md:text-3xl font-light tracking-wider mb-10 text-green-600">
          EXPERIENCE <span className="font-bold">ALOFTY LIFE</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => {
            const isHovered = hoveredIndex === index;
            const parallax = getParallaxOffset(index);
            
            return (
              <a
                key={treatment.id}
                href={treatment.link}
                className="group relative overflow-hidden rounded-xl block cursor-pointer h-72 md:h-80"
                style={{
                  transform: `translateY(${parallax.y}px)`,
                  transition: 'all 0.6s cubic-bezier(0.33, 1, 0.68, 1)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image with Parallax Effect */}
                <div 
                  className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
                  style={{
                    transform: `scale(${isHovered ? 1.1 : 1})`,
                  }}
                >
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay Gradient - Modern Style */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500"
                  style={{ opacity: isHovered ? 1 : 0.7 }}
                ></div>
                
                {/* Content with Modern Styling */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-500 ease-out" 
                  style={{ transform: `translateY(${isHovered ? 0 : '10px'})` }}
                >
                  <h3 className="text-xl md:text-2xl font-medium mb-2 transition-all duration-500">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {treatment.description}
                  </p>
                  
                  <div className="mt-4 overflow-hidden h-8">
                    <span className="inline-flex items-center py-1 px-4 bg-green-500 text-white text-xs uppercase tracking-wider transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 rounded-full">
                      Explore
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}