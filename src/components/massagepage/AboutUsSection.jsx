import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Video overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-stone-100 py-16 md:py-24">
      <motion.div 
        className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Video Section with Play Button Overlay */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            variants={itemVariants}
          >
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/SYa8k550M6E${isPlaying ? '?autoplay=1' : ''}`}
                title="Massage therapist providing treatment"
                className="w-full h-full z-10"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Video Overlay with Play Button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                variants={overlayVariants}
                initial="hidden"
                animate={isPlaying ? "visible" : "hidden"}
                onClick={() => setIsPlaying(true)}
              >
                <motion.div 
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
            <div className="hidden md:block absolute -top-4 -left-4 w-16 h-16 bg-green-200 rounded-full z-0"></div>
          </motion.div>
          
          {/* Text Content Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-1 bg-green-600 mb-6"
            />
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-green-950 tracking-tight"
              variants={itemVariants}
            >
              About Us
            </motion.h2>
            
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                After completing a voluntary social year, Sarah dedicated the next
                decade to working in the social sector. With a passion for women's
                well-being, she has now embarked on a journey of self-employment in
                the women's health field.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Specializing in massage techniques that not
                only promote physical health but also aid in body contouring, Sarah is
                committed to providing personalized services that enhance both
                vitality and confidence. Her holistic approach to women's care is
                designed to support each client's unique wellness journey.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <motion.button 
                className="group relative px-8 py-3 bg-green-950 text-white rounded-lg font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Learn more</span>
                <motion.span 
                  className="absolute inset-0 bg-green-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}