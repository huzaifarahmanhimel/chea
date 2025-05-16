import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ModernFoodHero() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Food item animation variants
  const foodItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#166534", // Tailwind green-800
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Food items data with placeholder images
  const foodItems = [
    { id: 1, alt: "Salad bowl", position: "top-12 left-6 lg:left-20", size: "w-24 h-24 lg:w-36 lg:h-36", delay: 0 },
    { id: 2, alt: "Broccoli", position: "top-1/3 left-1/4", size: "w-16 h-16", delay: 0.2 },
    { id: 3, alt: "Avocado", position: "top-1/4 right-1/4", size: "w-20 h-20", color: "bg-yellow-200", delay: 0.4 },
    { id: 4, alt: "Tomato", position: "top-1/2 right-12 lg:right-32", size: "w-12 h-12", color: "bg-red-400", delay: 0.6 },
    { id: 5, alt: "Corn", position: "bottom-24 left-1/4", size: "w-14 h-14", delay: 0.8 },
    { id: 6, alt: "Broccoli", position: "bottom-24 right-8 md:right-20", size: "w-16 h-16", delay: 1 },
    { id: 7, alt: "Egg", position: "bottom-36 sm:bottom-48 left-20 md:left-32", size: "w-14 h-14", color: "bg-gray-100", delay: 1.2 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-green-50 to-white py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          y: [0, 10, 0],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
        }}
        className="absolute -z-10 top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-green-300/20 to-transparent blur-3xl"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          x: [0, -10, 0],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
        }}
        className="absolute -z-10 bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-300/20 to-transparent blur-3xl"
      />

      {/* Decorative food images with animation */}
      {foodItems.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.position} ${item.size} z-10`}
          custom={item.delay}
          variants={foodItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className={`w-full h-full rounded-full overflow-hidden ${item.color || ''} shadow-lg`}>
            <motion.div 
              className="w-full h-full"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                y: { duration: 2 + item.id % 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
                delay: item.id * 0.1
              }}
            >
              <img 
                src={`/api/placeholder/${200}/${200}`}
                alt={item.alt} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto pt-32 pb-16 relative z-20">
        <motion.div 
          className="text-center mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            variants={textVariants}
            className="text-lg md:text-xl font-medium text-green-600"
          >
            Nourishing Your Body, Delighting Your Palate
          </motion.h2>
          
          <motion.h1 
            variants={textVariants}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              Discover NutriPlates
            </span>
            <br />
            <span>Where Health Meets Flavor!</span>
          </motion.h1>
          
          <motion.div 
            className="mt-4 flex justify-center"
            variants={textVariants}
          >
            <motion.div 
              className="w-48 md:w-64 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded"
              animate={{
                width: ["0%", "100%", "100%", "0%", "100%"],
              }}
              transition={{
                duration: 3,
                times: [0, 0.2, 0.7, 0.75, 1],
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 flex justify-center"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.button 
            className="bg-green-700 text-white py-4 px-8 rounded-xl font-medium text-lg shadow-lg flex items-center space-x-2"
          >
            <span>Explore Meal Plans</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{
                x: [0, 5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
        
        {/* Floating food cards */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
              }
            }
          }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src={`/api/placeholder/${400}/${300}`}
                  alt={`Healthy food option ${item}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item === 1 ? "Balanced Bowls" : item === 2 ? "Fresh Greens" : "Power Proteins"}
              </h3>
              <p className="mt-2 text-gray-600">
                {item === 1 
                  ? "Perfectly portioned nutrients for optimal health" 
                  : item === 2 
                  ? "Farm-fresh vegetables packed with vitamins" 
                  : "Lean proteins to fuel your active lifestyle"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}