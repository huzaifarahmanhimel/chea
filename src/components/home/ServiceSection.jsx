import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceSection() {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set the section to visible after component mounts
    setVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      name: "TENNIS",
      number: "200+",
      description: "Players Coached",
      detail: "From curious beginners to seasoned players — each session is built to inspire progress, confidence, and love for the game."
    },
    {
      id: 2,
      name: "MASSAGE / BODYWORK",
      number: "500+",
      description: "Healing Treatments Delivered",
      detail: "Each massage is an intuitive experience, helping people release tension, restore balance, and reconnect with their body."
    },
    {
      id: 3,
      name: "WAKE & SHAKE",
      number: "450+",
      description: "Sunrise Sessions Danced",
      detail: "Mornings that begin with rhythm, community, and movement under the sky — boosting energy and lighting up the day."
    },
    {
      id: 4,
      name: "HEALTHY FOOD",
      number: "300+",
      description: "Nourishing Meals Created",
      detail: "Colorful, balanced and made with heart — each bowl is a celebration of taste and wellness."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-10 lg:px-20 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative cursor-pointer group hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              variants={itemVariants}
            >
              <div className="flex flex-col space-y-8 pb-6 pt-2 px-3 rounded-lg bg-gray-900 bg-opacity-40 backdrop-blur-sm hover:bg-opacity-60 transition-all duration-500">
                <div className="relative mb-3">
                  <motion.span 
                    className="text-7xl md:text-8xl lg:text-9xl font-bold absolute top-0 left-0 -mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{ 
                      opacity: hovered === service.id ? 0.7 : 0.4
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.number}
                  </motion.span>
                  <h3 className="text-sm md:text-base lg:text-lg uppercase tracking-widest relative z-10 font-medium mt-6 mb-2">
                    {service.name}
                  </h3>
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"
                    animate={{ width: hovered === service.id ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <p className="text-sm text-gray-400 mt-3">{service.description}</p>
                </div>
                
                <p className="text-sm text-gray-300 leading-relaxed">{service.detail}</p>
                
                <motion.div 
                  className="w-full h-px bg-gray-800 mt-auto"
                  animate={{ 
                    backgroundColor: hovered === service.id ? '#6366f1' : '#1f2937',
                    height: hovered === service.id ? '2px' : '1px'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}