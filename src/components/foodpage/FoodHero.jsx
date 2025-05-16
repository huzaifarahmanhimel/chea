import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FoodHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl">
          <div className="pt-6 px-4 sm:px-6 lg:px-8"></div>

          <main className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm font-medium text-green-500 tracking-wide mb-2"
              >
                Professional Nutritionist
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block text-green-500 xl:inline">Make Healthy Life</span>{" "}
                <span className="block text-gray-800 xl:inline mt-1">With Naturfood</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Discover personalized nutrition plans made with fresh, organic ingredients. 
                Embrace a healthier lifestyle with expert guidance and delicious natural food options.
              </motion.p>
              
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center lg:justify-start sm:justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="rounded-md shadow"
                >
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="mt-3 sm:mt-0 sm:ml-3 flex items-center"
                >
                  <div className="rounded-full bg-green-100 p-2 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">See How Our Menus Are Prepared</span>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-12 flex items-center"
              >
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="/api/placeholder/40/40"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="/api/placeholder/40/40"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="/api/placeholder/40/40"
                    alt="Customer"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Our Happy Customers</p>
                  <div className="flex items-center">
                    <svg className="text-yellow-400 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span className="ml-1 text-sm text-gray-600">8.5 (12k+ Reviews)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      
      <motion.div 
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-orange-400 rounded-l-3xl overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="h-56 w-full sm:h-72 md:h-96 lg:h-full relative">
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative w-full h-full max-w-lg">
              <motion.img
                src="/api/placeholder/500/500"
                alt="Healthy Food Bowl"
                className="rounded-full object-cover w-full h-full shadow-xl"
                initial={{ rotate: -5, y: 20 }}
                animate={isVisible ? { rotate: 0, y: 0 } : { rotate: -5, y: 20 }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <img src="/api/placeholder/40/40" alt="Mint" className="w-8 h-8 rounded-full" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-6 bg-white rounded-full p-2 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <img src="/api/placeholder/40/40" alt="Lime" className="w-10 h-10 rounded-full" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-10 -right-8 bg-white rounded-full p-2 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <img src="/api/placeholder/40/40" alt="Vegetable" className="w-12 h-12 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}