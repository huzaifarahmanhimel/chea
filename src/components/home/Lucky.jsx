import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import founderter from '../images/IMG_8531.jpg';

export default function Lucky() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.2 }
    }
  };

  const slideUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        delay: 0.2,
        duration: 0.8
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-black overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Main Content Container */}
        <div className="flex flex-col md:flex-row min-h-screen">
          
          {/* Image Section */}
          <motion.div 
            className="w-full md:w-1/2 h-[80vh] md:h-screen md:sticky md:top-0 my-6 md:my-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* Background Image with Parallax Effect */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${founderter})`,
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                {/* Frosted glass effect */}
                <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
              </motion.div>
              
              {/* Bath/Spa Element */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2/3 md:w-1/2 aspect-[4/3]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, type: "spring" }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-t-full bg-stone-200">
                  {/* Water effect with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-stone-300/50 to-stone-200/80">
                    {/* Water droplets/steam effect */}
                    <motion.div 
                      className="absolute inset-0 opacity-40"
                      style={{backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 3%)", backgroundSize: "8px 8px"}}
                      animate={{ 
                        opacity: [0.4, 0.6, 0.4],
                        backgroundSize: ["8px 8px", "10px 10px", "8px 8px"]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 4, 
                        ease: "easeInOut" 
                      }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Plants overlay */}
              <motion.div 
                className="absolute top-0 right-0 bottom-0 w-1/3 opacity-60"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80')",
                  backgroundPosition: "center right",
                  backgroundSize: "cover",
                  mixBlendMode: "soft-light"
                }}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 0.6 }}
                transition={{ delay: 0.8, duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
          
          {/* Text Section */}
          <motion.div 
            className="w-full md:w-1/2 min-h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-16"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-lg my-12 md:my-0">
              <motion.div variants={slideUp}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-3">
                 Ashley’s Signature <em className="font-serif italic">TREATMENTS</em>
                </h2>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-8">
                  HANDS THAT HEAL <br />SOUL AND <em className="font-serif italic">Care that’s personal.</em>
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-black mb-8 font-light leading-relaxed"
                variants={slideUp}
              >
                Every treatment at Alofty Life is given by Ashley herself — combining deep knowledge of the body with intuitive touch. As a certified sports massage therapist and lifelong athlete, she understands how to release tension, restore energy, and help you feel whole again.
              </motion.p>
              
              <motion.div variants={slideUp}>
                <motion.a
                  href="/treatments"
                  className="inline-block border border-white px-8 py-3 text-sm tracking-wider transition-all duration-300 hover:bg-black hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Treatment with Ashley
                </motion.a>
              </motion.div>
              
              {/* Feature highlights */}
              <motion.div 
                className="mt-12 grid grid-cols-2 gap-6"
                variants={slideUp}
              >
                <div className="border-l border-gray-700 pl-4">
                  <h4 className="text-sm tracking-wider text-black">NATURAL</h4>
                  <p className="mt-1 text-black font-light">Only organic, skin-loving ingredients</p>
                </div>
                <div className="border-l border-gray-700 pl-4">
                  <h4 className="text-sm tracking-wider text-black">ONE-ON-ONE</h4>
                  <p className="mt-1 text-black font-light">Always with Ashley – no substitutes</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}