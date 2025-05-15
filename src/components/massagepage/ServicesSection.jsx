import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom SVG Icons
const MassageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path 
      fill="currentColor" 
      d="M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
);

const SpaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path 
      fill="currentColor" 
      d="M15.49 9.63c-0.27-2.03-1.23-3.64-2.49-3.64S10.78 7.6 10.51 9.63C10.32 11.29 9.44 12.79 8 13.87c1.44 1.08 2.32 2.58 2.51 4.24c0.27 2.03 1.23 3.64 2.49 3.64s2.22-1.61 2.49-3.64c0.19-1.66 1.07-3.16 2.51-4.24c-1.44-1.08-2.32-2.58-2.51-4.24z"
    />
  </svg>
);

const AromatherapyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
    <path 
      fill="currentColor" 
      d="M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23c.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59c-1.81-1.37-2-3.34-1.84-4.25c.08-.5-.6-.77-.85-.3C4.57 11.85 4 14 4 15.74C4 19.48 7.58 22 12 22s8-2.52 8-6.26c0-1.69-.56-3.27-1.52-4.39c-.29-.37-.86-.11-.75.36C18.07 13.46 19 14.81 19 16c0 1.24-1.01 2.31-2.29 2.31c-.75 0-1.81-.54-1.81-2.31c0-.78.3-1.54.73-2.08c.38-.48.02-1.19-.47-.97z"
    />
  </svg>
);

const services = [
  {
    id: 1,
    title: 'Massage Therapy',
    description: 'Experience therapeutic touch that releases tension, improves circulation, and promotes deep relaxation and healing.',
    icon: MassageIcon,
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Aromatherapy',
    description: 'Immerse yourself in a sensory journey with our carefully curated essential oil blends that restore balance and enhance well-being.',
    icon: AromatherapyIcon,
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Geothermal Spa',
    description: 'Discover our unique and thoughtfully designed space that provides a healing environment, while also connecting you to nature.',
    icon: SpaIcon,
    image: '/api/placeholder/400/300'
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if it's mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" 
      style={{ backgroundColor: '#f0d2ba' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-3"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Our Premium Services
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-green-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-slate-700 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Deep relief, real relaxation, and grounded calm — inspired by nature, delivered with care.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="rounded-xl overflow-hidden shadow-xl cursor-pointer relative group"
              style={{ backgroundColor: '#A3CB72' }}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => !isMobile && setSelectedService(service.id)}
              onMouseLeave={() => !isMobile && setSelectedService(null)}
              onClick={() => isMobile && setSelectedService(selectedService === service.id ? null : service.id)}
            >
              {/* Image Section */}
              <div className="h-48 md:h-56 lg:h-64 overflow-hidden relative">
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                
                {/* Icon overlay */}
                <motion.div 
                  className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full text-green-600"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <service.icon />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                
                <motion.div
                  className="h-0.5 w-12 bg-white mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ duration: 0.5 }}
                />
                
                <motion.p 
                  className="text-slate-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Button */}
                <motion.button
                  className="mt-6 px-6 py-2 bg-white text-green-700 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>

              {/* Expanded Info (Mobile Only) */}
              {isMobile && selectedService === service.id && (
                <motion.div 
                  className="p-6 bg-white"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-green-700 mb-2">Service Details</h4>
                  <p className="text-slate-700 mb-4">
                    Our {service.title} services are personalized to meet your unique needs and preferences.
                    Book a session today and experience the difference.
                  </p>
                  <motion.button
                    className="px-6 py-2 bg-green-700 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-slate-800 text-white font-medium rounded-full hover:bg-slate-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;