import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NutritionHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-white to-green-50 overflow-hidden mx-4 md:mx-8 lg:mx-12 my-6 rounded-3xl shadow-lg">
      <motion.div 
        className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
          <motion.p
            variants={itemVariants}
            className="text-orange-500 font-medium mb-2"
          >
            Professional Nutritionist
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="text-green-500">Make Healthy Life</span>
            <br />
            <span className="text-gray-800">With Naturfood</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mb-8 max-w-lg"
          >
            Discover delicious, nutrient-rich meals designed by expert nutritionists. 
            Our balanced food plans help you achieve your health goals while enjoying every bite.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium flex items-center"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-green-600 cursor-pointer"
            >
              <div className="bg-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>See How Our Menus<br />Are Prepared</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex items-center"
          >
            <div className="flex -space-x-4">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/api/placeholder/100/100" alt="Customer" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/api/placeholder/100/100" alt="Customer" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/api/placeholder/100/100" alt="Customer" />
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-800">Our Happy Customers</p>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-gray-700">9.5 (12K+ Reviews)</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Content - Food Image */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          variants={imageVariants}
        >
          <div className="bg-orange-400 rounded-full w-full aspect-square max-w-xl relative overflow-hidden mx-auto">
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              src="/api/placeholder/500/500" 
              alt="Healthy food bowl"
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-5/6"
            />
            
            {/* Decorative elements */}
            <motion.img
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              src="/api/placeholder/60/60" 
              alt="Lime"
              className="absolute top-16 right-16 w-16 h-16 rounded-full"
            />
            
            <motion.img
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              src="/api/placeholder/40/40" 
              alt="Tomato"
              className="absolute bottom-24 left-12 w-10 h-10 rounded-full"
            />
            
            <motion.img
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              src="/api/placeholder/50/50" 
              alt="Herbs"
              className="absolute bottom-32 right-5 w-12 h-12"
            />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl -z-10"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl -z-10"
      />
    </div>
  );
}