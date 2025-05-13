import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import kids from '../images/kids.jpg  ';
import student from '../images/students.jpg';
import little from '../images/little.jpg';
import kidplayer from '../images/IMG_5331.jpg';

const TennisSchoolLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };
  
  // Tennis ball animation
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-12 py-8 md:py-12 lg:py-16">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Tennis Ball Icon */}
        <motion.div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          animate={floatAnimation}
        >
          <div className="w-10 h-10 bg-lime-400 rounded-full border-2 border-lime-500"></div>
        </motion.div>
        
        {/* Large Image Section */}
        <motion.div 
          className="md:col-span-2 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden"
          variants={fadeInUp}
          whileHover={hoverScale}
        >
          <img 
            src="https://i.pinimg.com/736x/f3/66/7d/f3667d6854551f0a376b68ef2961d1e8.jpg" 
            alt="Tennis player serving" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Right Side Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {/* School Invitation Card */}
          <motion.div 
            className="bg-gray-900 text-white p-6 rounded-lg flex flex-col justify-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-bold mb-4">Let's Join Our School</h2>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <motion.button 
              className="bg-lime-500 text-black py-2 px-4 rounded-full hover:bg-lime-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </motion.div>
          
          {/* Tennis Racket Image */}
          <motion.div 
            className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-4"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <img 
              src={kids}
              alt="Tennis racket" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
        
        {/* Bottom Images */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-gray-100 rounded-lg overflow-hidden"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <img 
              src={student}
              alt="Tennis player" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="bg-gray-100 rounded-lg overflow-hidden"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <img 
              src={little}
              alt="Tennis player holding ball" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="bg-gray-100 rounded-lg overflow-hidden"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <img 
              src={kidplayer}
              alt="Tennis player in action" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TennisSchoolLanding;