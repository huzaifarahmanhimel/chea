import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FoodDelivery() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      transition: { duration: 0.5 }
    }
  };

  const benefitCardVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      text: "All menu recipe made by specialists"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
        </svg>
      ),
      text: "Fresh and locally grown products"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
        </svg>
      ),
      text: "Fast delivery and easy returns"
    }
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-8 mb-12 md:mb-0">
            <motion.div variants={itemVariants} className="text-yellow-500 font-bold text-xl mb-2">
              Why Choose Us
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Our Value To Help You
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-600 mb-12 text-lg">
              We deliver premium ingredients and chef-crafted recipes right to your doorstep. 
              Enjoy restaurant-quality meals with the convenience of home cooking.
            </motion.p>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={benefitCardVariants}
                className="bg-white rounded-lg p-4 mb-4 flex items-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mr-4 bg-green-50 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div className="font-medium text-gray-800">{feature.text}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={imageVariants}
            className="w-full md:w-1/2 relative"
          >
            <div className="bg-yellow-400 rounded-full absolute -z-10 w-64 h-64 md:w-96 md:h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-3xl p-6 shadow-xl relative z-10"
            >
              <div className="relative">
                <img
                  src="https://i.pinimg.com/736x/85/18/38/8518382f56be114f8b2c53dc845f0b21.jpg"
                  alt="Person holding grocery bags"
                  className="rounded-2xl w-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-yellow-500 font-bold">🥦</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-red-500 font-bold">🍅</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
          >
            Order Fresh Food Now
          </motion.button>
          <p className="mt-4 text-gray-500">Free delivery on your first order!</p>
        </motion.div>
      </motion.div>
    </div>
  );
}