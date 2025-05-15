import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom SVG Icons (same as previous implementation)
const SaltIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path 
      fill="currentColor" 
      d="M12 2C8.69 2 6 4.69 6 8c0 2.76 2.24 5 5 5v7h2v-7c2.76 0 5-2.24 5-5 0-3.31-2.69-6-6-6zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
    />
  </svg>
);

const WaterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path 
      fill="currentColor" 
      d="M12 2c-5.33 4 -8 8 -8 12c0 4.4 3.6 8 8 8s8-3.6 8-8c0-4-2.67-8-8-12zm0 18c-3.3 0-6-2.7-6-6c0-2.6 1.7-5.4 6-9.4c4.3 4 6 6.8 6 9.4c0 3.3-2.7 6-6 6z"
    />
  </svg>
);

const SpaIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path 
      fill="currentColor" 
      d="M15.49 9.63c-0.27-2.03-1.23-3.64-2.49-3.64S10.78 7.6 10.51 9.63C10.32 11.29 9.44 12.79 8 13.87c1.44 1.08 2.32 2.58 2.51 4.24c0.27 2.03 1.23 3.64 2.49 3.64s2.22-1.61 2.49-3.64c0.19-1.66 1.07-3.16 2.51-4.24c-1.44-1.08-2.32-2.58-2.51-4.24z"
    />
  </svg>
);

const MassageIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path 
      fill="currentColor" 
      d="M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
);

const AromatherapyIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path 
      fill="currentColor" 
      d="M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23c.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59c-1.81-1.37-2-3.34-1.84-4.25c.08-.5-.6-.77-.85-.3C4.57 11.85 4 14 4 15.74C4 19.48 7.58 22 12 22s8-2.52 8-6.26c0-1.69-.56-3.27-1.52-4.39c-.29-.37-.86-.11-.75.36C18.07 13.46 19 14.81 19 16c0 1.24-1.01 2.31-2.29 2.31c-.75 0-1.81-.54-1.81-2.31c0-.78.3-1.54.73-2.08c.38-.48.02-1.19-.47-.97z"
    />
  </svg>
);

const HotStoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path 
      fill="currentColor" 
      d="M16 9v10H8V9l4-7 4 7zm-4 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
    />
  </svg>
);

const services = [
  // First Row
  {
    title: 'Mineral Salt Scrub',
    description: 'Discover our unique and thoughtfully designed space that enhances your sensory and therapeutic well-being.',
    image: 'https://i.pinimg.com/736x/31/fb/81/31fb81b3e79c985f063381d7d3872d2f.jpg',
    icon: SaltIcon,
    row: 0
  },
  {
    title: 'Sumpor Water',
    description: 'Discover our unique and thoughtfully designed space that calms and rejuvenates, offering meditative spaces that aid in the essence of our herb garden.',
    image: 'https://i.pinimg.com/736x/8d/d3/a1/8dd3a151dbac6bcf6460babe91350083.jpg',
    icon: WaterIcon,
    row: 0
  },
  {
    title: 'Geothermal Spa',
    description: 'Discover our unique and thoughtfully designed space that provides a healing environment, while also connecting you to the essence of our herb garden.',
    image: 'https://i.pinimg.com/736x/6b/c3/9d/6bc39d54f4f5a9bc5567e36fb4ae75cb.jpg',
    icon: SpaIcon,
    row: 0
  },
  // Second Row
  {
    title: 'Massage Therapy',
    description: 'Experience therapeutic touch that releases tension, improves circulation, and promotes deep relaxation and healing.',
    image: 'https://i.pinimg.com/736x/2c/30/fa/2c30faac12735f757bda30b02817d00c.jpg',
    icon: MassageIcon,
    row: 1
  },
  {
    title: 'Aromatherapy',
    description: 'Immerse yourself in a sensory journey with our carefully curated essential oil blends that restore balance and enhance well-being.',
    image: 'https://i.pinimg.com/736x/b7/55/61/b7556188914a56eb1b8bbdaf1f3d80e4.jpg',
    icon: AromatherapyIcon,
    row: 1
  },
  {
    title: 'Hot Stone Massage',
    description: 'Rejuvenate and relax with our hot stone massage that melts away tension and promotes deep muscle relaxation.',
    image: 'https://i.pinimg.com/736x/33/9d/38/339d3837db5a0667cbbf3a6349e2219d.jpg',
    icon: HotStoneIcon,
    row: 1
  }
];

export default function ZaipurServices() {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <div className="min-h-screen bg-emerald-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services Reconnect You With Your Body
          </h1>
          <p className="text-teal-200 max-w-xl mx-auto">
            Deep relief, real relaxation, and grounded calm — inspired by nature, delivered by Ashley.
          </p>
        </motion.div>

        {/* Services Container */}
        <div className="space-y-8">
          {[0, 1].map((row) => (
            <motion.div 
              key={row}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: activeRow === row ? 1 : 0.6, 
                x: activeRow === row ? 0 : 100 
              }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-8 relative"
            >
              <AnimatePresence>
                {services
                  .filter(service => service.row === row)
                  .map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div 
                        key={service.title}
                        initial={{ 
                          opacity: 0, 
                          x: 50,
                          scale: 0.9 
                        }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          scale: 1 
                        }}
                        exit={{
                          opacity: 0,
                          x: 50,
                          scale: 0.9
                        }}
                        transition={{ 
                          duration: 0.4,
                          delay: index * 0.1
                        }}
                        className="bg-teal-800 rounded-xl overflow-hidden shadow-lg"
                      >
                        {/* Service Image */}
                        <div className="relative h-48 md:h-64 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-teal-900 bg-opacity-30"></div>
                        </div>

                        {/* Service Content */}
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <IconComponent 
                              className="mr-4 text-teal-300" 
                              width={32}
                              height={32}
                            />
                            <h2 className="text-xl font-semibold text-white">
                              {service.title}
                            </h2>
                          </div>
                          <p className="text-teal-100">
                            {service.description}
                          </p>

                          {/* Check Service Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition-colors"
                          >
                            Check This Service
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1].map((row) => (
            <motion.button
              key={row}
              onClick={() => setActiveRow(row)}
              className={`w-3 h-3 rounded-full ${
                activeRow === row 
                  ? 'bg-white' 
                  : 'bg-teal-600'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}