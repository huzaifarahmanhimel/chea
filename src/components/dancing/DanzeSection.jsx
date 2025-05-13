import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DanzeSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
  };

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 + i * 0.2 }
    })
  };

  // Stats data
  const stats = [
    { value: 64, label: "EXPERIENCE", id: 0 },
    { value: 30, label: "EXPERT TEAM", id: 1 },
    { value: 100, label: "MEMBERS", id: 2 }
  ];

  return (
    <div className="bg-white in-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left column with dancer image and brand name */}
        <motion.div 
          className="relative flex flex-col items-center lg:items-start"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.div 
            className="absolute top-0 left-0 text-gray-200 text-8xl font-bold opacity-40 tracking-widest"
            variants={scaleIn}
          >
            DAN<br/>ZE
          </motion.div>
          <motion.img 
            src="https://i.pinimg.com/736x/01/fc/bf/01fcbf5426eb18f5242a63783f5656b3.jpg"
            alt="Dancer in black flowing fabric" 
            className="h-auto w-full max-w-md z-10 object-cover"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        {/* Right column with about text and stats */}
        <motion.div 
          className="flex flex-col space-y-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900"
            variants={scaleIn}
          >
            WEAK & SHAKE    
          </motion.h2>
          
          <motion.div 
            className="text-gray-600 space-y-4"
            variants={fadeIn}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </motion.div>
          
          <motion.div 
            className="pt-4"
            variants={fadeIn}
          >
            <motion.h3 
              className="text-2xl font-script text-gray-800"
              variants={scaleIn}
            >
              Ellie Madison
            </motion.h3>
            <p className="text-gray-600">CEO Danze</p>
          </motion.div>
          
          {/* Stats section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
            variants={fadeIn}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-gray-700 p-6 text-center text-white flex flex-col items-center justify-center"
                custom={stat.id}
                variants={counterVariants}
              >
                <span className="text-5xl font-bold mb-2">{stat.value}</span>
                <span className="text-sm tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}