import { useState, useEffect } from 'react';

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
      description: "Organic cuisine to nourish your body and mind",
      image: "https://i.pinimg.com/736x/b5/22/66/b522663d26df9fadb7039414d18de816.jpg",
      link: "/treatments"
    },
    {
      id: 2,
      title: "THERMAL BATH",
      description: "Rejuvenate in our mineral-rich therapeutic waters",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "/thermal-bath"
    },
    {
      id: 3,
      title: "TENNIS",
      description: "World-class courts with professional coaching",
      image: "https://i.pinimg.com/736x/44/0c/c1/440cc1811047b8b1dca036cf6215cfc3.jpg",
      link: "/tennis"
    },
    {
      id: 4,
      title: "WELLNESS",
      description: "Holistic programs to restore balance and vitality",
      image: "https://i.pinimg.com/736x/4f/f7/49/4ff7499d2118fbe425973ad79d13d4eb.jpg",
      link: "/wellness"
    }
  ];
  
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Quote Section with Parallax */}
      <div 
        className="w-full relative overflow-hidden py-24 flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 z-10"></div>
        <div className="max-w-3xl text-center relative z-20 px-4">
          <div className="text-5xl font-serif mb-4 text-amber-300">"</div>
          <p className="text-xl md:text-2xl italic text-amber-100 font-light leading-relaxed">
            Indulge in moments of pure tranquility and wellness,
            <br />where luxury meets holistic rejuvenation,
            <br />creating unforgettable experiences for mind, body, and soul.
          </p>
          <div className="text-5xl font-serif mt-4 text-amber-300">"</div>
        </div>
      </div>
      
      {/* Treatment Cards with Advanced Hover Effects */}
      <div className="px-6 pb-24">
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-wider mb-16 text-amber-100">
          EXPERIENCE <span className="font-bold">WELLNESS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => {
            const isHovered = hoveredIndex === index;
            const parallax = getParallaxOffset(index);
            
            return (
              <a
                key={treatment.id}
                href={treatment.link}
                className="group relative overflow-hidden rounded-lg block cursor-pointer h-80 md:h-96"
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
                
                {/* Overlay Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 transition-opacity duration-500"
                  style={{ opacity: isHovered ? 1 : 0.7 }}
                ></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-transform duration-500 ease-out" 
                  style={{ transform: `translateY(${isHovered ? 0 : '10px'})` }}
                >
                  <h3 className="text-xl md:text-2xl tracking-wider font-light mb-2 transition-all duration-500">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-amber-100 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {treatment.description}
                  </p>
                  
                  <div className="mt-4 overflow-hidden h-8">
                    <span className="inline-block py-1 px-4 border border-amber-300 text-amber-300 text-xs uppercase tracking-wider transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
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