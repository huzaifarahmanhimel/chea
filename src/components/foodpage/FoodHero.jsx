import React from "react";
import { motion } from "framer-motion";

export default function FoodyHero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="w-full bg-green-100 overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-xl"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-serif leading-tight">
              <span className="text-gray-800">Healthy </span>
              <span className="text-green-600">Eating </span>
              <span className="text-gray-800">is an </span>
              <span className="text-green-600">Important </span>
              <span className="text-gray-800">Part of Lifestyle</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="mt-6 text-gray-600">
              We prepare delicious Food<br />
              For you we are always
            </motion.p>
            
            <motion.div variants={fadeIn} className="mt-8 flex items-center space-x-4">
              <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-500 hover:text-black transition duration-300">
                Explore New
              </a>
              <button className="bg-white text-gray-800 p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideFromRight}
            className="relative"
          >
            <div className="relative">
              <img src="https://i.pinimg.com/736x/0a/6e/cb/0a6ecb5ffb6e4a64ce097af1debcea8c.jpg" alt="Healthy Food Bowl" className="w-full h-auto rounded-full object-cover" />
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 right-0 bg-green-600 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center"
              >
                <span className="text-xl font-bold">20%</span>
                <span className="text-sm font-medium">Off</span>
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 md:left-8 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-xs"
              >
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Promise To Deliver healthy Food</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -right-4 bottom-24 md:right-8 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-xs"
              >
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Pick Up</h3>
                  <p className="text-sm text-gray-600">Pickup Delivery At Your Doorstep</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}