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
    <section className="bg-white text-gray-800 py-24 px-6 md:px-10 lg:px-20 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          variants={itemVariants}
        >
          Our <span className="text-green-600">Services</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              variants={itemVariants}
            >
              <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
                {/* Green accent bar at top */}
                <div className="h-2 bg-green-500 w-full"></div>
                
                <div className="p-8 flex flex-col h-full">
                  {/* Number */}
                  <motion.div 
                    className="text-6xl md:text-7xl font-bold mb-4 text-green-600"
                    animate={{ 
                      y: hovered === service.id ? -5 : 0,
                      opacity: hovered === service.id ? 1 : 0.7 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.number}
                  </motion.div>
                  
                  {/* Service name */}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {service.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-green-800 font-medium mb-4">
                    {service.description}
                  </p>
                  
                  {/* Detail */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6">
                    {service.detail}
                  </p>
                  
                  {/* Bottom line that animates on hover */}
                  <motion.div 
                    className="w-0 h-0.5 bg-green-500 self-start"
                    animate={{ 
                      width: hovered === service.id ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}