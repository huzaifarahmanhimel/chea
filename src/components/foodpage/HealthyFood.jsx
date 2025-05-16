
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function HealthyFood() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };
  
  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.5 } },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 } 
    }
  };
  
  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-100 opacity-30 hidden md:block" 
        animate={floatingAnimation}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-yellow-100 opacity-40 hidden md:block"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 }
        }}
      />
      <motion.div 
        className="absolute -top-10 right-1/4 w-16 h-16 rounded-full bg-orange-100 opacity-50 hidden lg:block"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
      />
      
      <div className="absolute inset-0 bg-white/50 backdrop-blur-3xl -z-10"></div>
      
      <motion.div 
        className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Image Column */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          variants={imageVariants}
          style={{ y: imageY }}
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Main circular image */}
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-white/80">
              <img 
                src="https://i.pinimg.com/736x/10/eb/7c/10eb7c62b38898a31fe52f9648a0e8eb.jpg" 
                alt="Healthy food circle with vegetables, fruits, and proteins" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-500/10"></div>
            </div>
            
            {/* Decorative rings */}
            <motion.div 
              className="absolute -inset-4 rounded-full border-2 border-dashed border-green-200"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            <motion.div 
              className="absolute -inset-8 rounded-full border-2 border-dotted border-yellow-200"
              animate={{ rotate: -360 }}
              transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            {/* Floating dots */}
            <motion.div 
              className="absolute top-1/4 -right-4 w-6 h-6 rounded-full bg-green-400"
              animate={floatingAnimation}
            ></motion.div>
            <motion.div 
              className="absolute bottom-1/4 -left-6 w-5 h-5 rounded-full bg-yellow-400"
              animate={{
                ...floatingAnimation,
                transition: { ...floatingAnimation.transition, delay: 1.5 }
              }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div 
          className="w-full md:w-1/2 space-y-6 md:space-y-8"
          style={{ y: contentY }}
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-600 font-medium tracking-wider text-sm uppercase"
          >
            About Us
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Healthy & Tasty Foods</span>
            <span className="block mt-2">With Natural Ingredients</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-600 max-w-lg text-lg">
            Nourish your body with meals made from real, natural ingredients.Delicious doesn’t have to mean unhealthy—taste the difference nature makes.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-gray-600 max-w-lg text-lg">
            Fuel your day with clean, wholesome food that satisfies.
          </motion.p>
          
          {/* Stats Section */}
          <motion.div 
            className="flex flex-wrap gap-8 py-8 md:py-10"
            variants={itemVariants}
          >
            {[
              { count: "2K+", label: "Member Active" },
              { count: "10K+", label: "Happy Clients" },
              { count: "35+", label: "Award Winning" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="flex flex-col bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                variants={statVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,  
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 } 
                }}
              >
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">{stat.count}</span>
                <span className="text-gray-600 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Button */}
          <motion.button
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-medium shadow-xl flex items-center group mt-6"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            link="https://www.aloftylife.com/"
          >
            <span className="text-lg">Read More</span>
            <motion.svg 
              className="w-6 h-6 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}