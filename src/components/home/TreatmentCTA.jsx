import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import tennis from '../images/COART.jpg';

const TreatmentCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if contact section ID isn't found
      console.log('Contact section not found');
    }
  };
  
  useEffect(() => {
    // Set visible after component mounts for entrance animation
    setIsVisible(true);
    
    // Add intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });
    
    const section = document.getElementById('promo-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      id: 1,
      name: "Massage",
      description: "Rejuvenate your body and mind",
      image: "https://i.pinimg.com/736x/20/be/9d/20be9d27e83a96707a2abdd3e5326ff0.jpg",
      delay: "0",
      color: "#19a9b4"
    },
    {
      id: 2,
      name: "Tennis Session",
      description: "Active play for all skill levels",
      image: tennis,
      delay: "100",
      color: "#A3CB72"
    },
    {
      id: 3,
      name: "Wake & Shake",
      description: "Energizing morning routines",
      image: "https://i.pinimg.com/736x/7f/d7/df/7fd7df75f45ebd1a8cde30c3a634b81d.jpg",
      delay: "200",
      color: "#19a9b4"
    },
    {
      id: 4,
      name: "Healthy Food",
      description: "Healthy, delicious nutrition",
      image: "https://i.pinimg.com/736x/99/90/b2/9990b27ab55378980c297ef844718417.jpg",
      delay: "300",
      color: "#A3CB72"
    }
  ];

  return (
    <div 
      id="promo-section"
      className="w-full relative bg-white py-20 px-4 lg:px-8 overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#A3CB72] opacity-5 transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#19a9b4] opacity-5 transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[#A3CB72] opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Container for entire section */}
      <div className={`max-w-6xl mx-auto relative z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-[#A3CB72] to-[#19a9b4] px-6 py-2 rounded-full mb-6">
            <span className="text-white font-medium tracking-wide">FIRST TIME OFFER</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
            Enjoy <span className="text-[#19a9b4]">10% Off</span> Any Service
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether it's a massage, a tennis session, a Wake & Shake experience, or a nourishing bowl — your first visit comes with our special welcome gift.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border-t-4 border-[${service.color}] delay-${service.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ borderTopColor: service.color }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <a href="#contact-section" onClick={scrollToContact} className="block h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className={`w-full h-full object-cover transition-all duration-700 transform ${activeCard === service.id ? 'scale-110' : 'scale-100'}`}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300"
                    style={{ backgroundImage: activeCard === service.id ? 
                      `linear-gradient(to top, ${service.color}, transparent)` : 
                      'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' 
                    }}
                  ></div>
                </div>
                <div className="p-6 relative">
                  <div 
                    className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-0 text-white p-3 rounded-full shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <h3 className="text-gray-800 text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div 
                    className={`mt-4 flex items-center font-medium transition-all duration-300 ${activeCard === service.id ? 'translate-x-2' : 'translate-x-0'}`}
                    style={{ color: service.color }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        {/* Action Section with color line divider */}
        <div className="relative py-6 mb-8">
          <div className="absolute left-0 top-0 w-full h-px bg-gray-100"></div>
          <div className="absolute left-1/2 top-0 w-32 h-1 bg-gradient-to-r from-[#A3CB72] to-[#19a9b4] transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        </div>
        
        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-600 text-xl font-light mb-8">
            Feel great. Move freely. Start something new.
          </p>
          <a 
            href="#contact-section" 
            onClick={scrollToContact}
            className="group inline-flex items-center bg-gradient-to-r from-[#A3CB72] to-[#19a9b4] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="mr-3">Claim Your 10% Off</span>
            <span className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCTA;