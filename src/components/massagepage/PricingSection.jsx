import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingPackages = () => {
  const [activeService, setActiveService] = useState('Spa & Massage');
  
  const serviceItems = [
    { name: 'Relaxing Classical Massage', price: 47, description: 'Melt away everyday tension and reconnect with your inner calm' },
    { name: 'Sports / Deep Tissue / Trigger Point Massage', price: 47, description: 'Target muscle tightness and promote faster recovery — ideal for active bodies.' },
    { name: 'Scalp & Head Massage (included in all sessions)', price: 47, description: 'A deeply calming finale to every massage, easing stress and clearing your mind.' },
    { name: 'Rejuve Facial', price: 47, description: 'Complete skin renewal experience' }
  ];

  const services = [];

  return (
    <div className="bg-stone-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Natural Touch, Deep Relief — nature-inspired massages that restore, relax, and energize.
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each session is a personalized journey, combining classical relaxation, deep-tissue healing, and a soothing head massage to leave you grounded and renewed.
          </p>
        </div>

        {/* Content Container */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-emerald-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeService === service 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {serviceItems.map((service, index) => (
                <motion.div 
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                    </div>
                    <span className="text-2xl font-bold text-black">
                      ${service.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://i.pinimg.com/736x/cd/ea/a0/cdeaa0c99aff27d1a6af67e772457032.jpg" 
                alt="Spa Treatment" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-emerald-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-900 transition-all duration-300"
            >
              Feel the Difference — Book Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;