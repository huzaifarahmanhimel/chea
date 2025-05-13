import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Heart, Play } from 'lucide-react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    {
      title: "QUALITY FACE MASK",
      subtitle: "FOR SENSITIVE SKIN",
      description: "Restore your natural glow with organic ingredients",
      image: "https://i.pinimg.com/736x/3f/e5/6a/3fe56a5134daad96cff2b2f90cb764aa.jpg",
      altText: "Woman applying face mask in spa",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "REJUVENATING TREATMENTS",
      subtitle: "FOR NATURAL GLOW",
      description: "Experience the power of science-backed skincare",
      image: "https://i.pinimg.com/736x/51/4d/91/514d917efa704572c873b8fad3e7b8d8.jpg",
      altText: "Spa treatment session",
      color: "from-blue-500 to-teal-400"
    },
    {
      title: "AROMATHERAPY MASSAGE",
      subtitle: "FOR DEEP RELAXATION",
      description: "Sink into blissful relaxation with essential oils",
      image: "https://i.pinimg.com/736x/23/fd/b2/23fdb24fa698f254d5fb0a4b04e41b09.jpg",
      altText: "Aromatherapy massage session",
      color: "from-purple-600 to-indigo-500"
    },
    {
      title: "NATURAL INGREDIENTS",
      subtitle: "FOR LASTING RESULTS",
      description: "Sustainable beauty that works with your skin",
      image: "https://i.pinimg.com/736x/7b/6b/f4/7b6bf4e63b22e7e842f04a2f9916d33b.jpg",
      altText: "Natural spa ingredients",
      color: "from-emerald-500 to-lime-400"
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('right');
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('left');
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAnimating, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    sliderRef.current = touchDown;
  };

  const handleTouchMove = (e) => {
    if (sliderRef.current === null) {
      return;
    }
    
    const touchDown = sliderRef.current;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    
    // If diff is negative, swiping right; if positive, swiping left
    if (diff > 5) {
      nextSlide();
    } else if (diff < -5) {
      prevSlide();
    }
    
    sliderRef.current = null;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Hero Slider */}
      <div 
        className="relative h-screen overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlide;
          const isNext = (currentSlide === slides.length - 1 && index === 0) || 
                         (index === currentSlide + 1);
          const isPrev = (currentSlide === 0 && index === slides.length - 1) || 
                         (index === currentSlide - 1);
          
          let slidePosition = 'opacity-0 z-10 translate-x-0';
          
          if (isCurrent) {
            slidePosition = 'opacity-100 z-20 translate-x-0';
          } else if (direction === 'right' && isPrev) {
            slidePosition = 'opacity-0 z-10 -translate-x-full';
          } else if (direction === 'left' && isNext) {
            slidePosition = 'opacity-0 z-10 translate-x-full';
          }
          
          return (
            <div 
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${slidePosition}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-30 z-10`}></div>
              <img 
                src={slide.image} 
                alt={slide.altText}
                className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out"
              />
              <div className="absolute inset-0 z-20">
                <div className="flex flex-col items-start justify-center h-full max-w-6xl mx-auto px-6 md:px-12">
                  <div 
                    className={`transition-all duration-1000 ease-out transform ${
                      isCurrent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <p className="text-white font-medium tracking-widest mb-2 md:mb-4 opacity-90">
                      <span className="inline-block w-10 h-px bg-white mr-3 align-middle"></span>
                      FEATURED TREATMENT
                    </p>
                    <h2 className="text-xl md:text-3xl font-light text-white mb-1 tracking-wide">
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-lg mb-8 opacity-90">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="group relative overflow-hidden bg-white text-gray-900 px-8 py-3 rounded-full text-sm font-medium tracking-wider">
                        <span className="relative z-10">EXPLORE NOW</span>
                        <span className="absolute inset-0 bg-gray-900 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        <span className="absolute inset-0 bg-white opacity-25 transform translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                      </button>
                      <button className="group relative flex items-center gap-2 border border-white text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider overflow-hidden">
                        <Play className="w-4 h-4" />
                        <span>WATCH VIDEO</span>
                        <span className="absolute inset-0 bg-white opacity-10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Left Slider Arrow */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30">
          <button 
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-10 backdrop-blur-md text-white hover:bg-opacity-25 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        
        {/* Right Slider Arrow */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30">
          <button 
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-10 backdrop-blur-md text-white hover:bg-opacity-25 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 'right' : 'left');
                setCurrentSlide(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-12 h-2 bg-white' 
                  : 'w-2 h-2 bg-white bg-opacity-40 hover:bg-opacity-70'
              }`}
            />
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="hidden md:flex absolute bottom-12 right-12 items-center space-x-6 z-30">
          <button aria-label="Share on Twitter" className="text-white hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button aria-label="Share on Instagram" className="text-white hover:text-pink-500 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </button>
          <button aria-label="Share on Facebook" className="text-white hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Fixed Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
        <button className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <Heart className="w-5 h-5" />
          <span className="absolute right-full mr-3 whitespace-nowrap bg-white px-2 py-1 rounded text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Favorites</span>
        </button>
        <button className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <Star className="w-5 h-5" />
          <span className="absolute right-full mr-3 whitespace-nowrap bg-white px-2 py-1 rounded text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Related</span>
        </button>
        <button className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white text-gray-900 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute right-full mr-3 whitespace-nowrap bg-white px-2 py-1 rounded text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Shop Now</span>
        </button>
      </div>
      
      {/* Small Viewport Navigation Dots */}
      <div className="md:hidden fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 'right' : 'left');
              setCurrentSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-2 h-8 bg-white' 
                : 'w-2 h-2 bg-white bg-opacity-40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}