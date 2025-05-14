import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronRight, Sun, Waves, Map } from 'lucide-react';

export default function MarcoSlid() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.2 });

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Auto cycle through images
    const interval = setInterval(() => {
      setActiveImageIndex(prev => (prev + 1) % images.length);
    }, 4000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const images = [
    {
      src: "https://i.pinimg.com/736x/59/5f/85/595f85d1b50b1e77f55c8447875ba368.jpg",
      alt: "Palm trees against blue sky",
    },
    {
      src: "https://i.pinimg.com/736x/07/60/85/07608563fb77a7c59a07d15c15efb359.jpg",
      alt: "Luxury hotel room with mountain view",
    },
    {
      src: "https://i.pinimg.com/736x/c1/fd/0b/c1fd0b8a58cee3aed79a1d7c9e23fb09.jpg",
      alt: "Beach with umbrella and turquoise water",
    },
    {
      src: "https://i.pinimg.com/736x/1b/ff/0e/1bff0e1070b75ed31699fc098e4d5c42.jpg",
      alt: "Sunset over the ocean",
    }
  ];

  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const features = [
    { icon: <Sun size={windowSize.width < 640 ? 16 : 18} />, text: "Beachfront Access" },
    { icon: <Waves size={windowSize.width < 640 ? 16 : 18} />, text: "Sea View Rooms" },
    { icon: <Map size={windowSize.width < 640 ? 16 : 18} />, text: "Prime Location" }
  ];

  return (
    <div className="bg-stone-100 text-white min-h-screen w-full flex items-center py-10 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative" ref={contentRef}>
        {/* Background accent */}
        <motion.div 
          className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-blue-500/10 blur-3xl" 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-indigo-500/10 blur-3xl" 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-16 relative z-10">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <span className="text-blue-400 font-medium tracking-wider text-xs sm:text-sm uppercase flex items-center">
                <span className="inline-block w-6 sm:w-8 h-px bg-green-500 mr-2"></span>
               Welcome to Alofty Life
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-2 sm:mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
               Where energy, balance, and joy come together.
              </h1>
            </motion.div>

            <motion.p 
              className="text-slate-300 text-base sm:text-lg leading-relaxed" 
              variants={itemVariants}
            >
            At Alofty Life, everything is rooted in movement, healing, and nourishment — the three pillars of your well-being. Whether you’re stepping onto the tennis court, diving into a plant-powered bowl, or letting go with a deep tissue massage, you’re invited into a lifestyle that reconnects you with yourself.


            </motion.p>
            <motion.p 
              className="text-slate-300 text-base sm:text-lg leading-relaxed" 
              variants={itemVariants}
            >
            This is your space to reset, recharge, and rise into your full potential.


            </motion.p>
            <motion.p 
              className="text-slate-300 text-base sm:text-lg leading-relaxed" 
              variants={itemVariants}
            >
            Feel strong. Feel vibrant. Feel alive.


            </motion.p>

            

            <motion.div className="flex flex-wrap gap-3 sm:gap-4" variants={itemVariants}>
              <motion.button
                className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg flex items-center gap-2 shadow-lg shadow-blue-500/20 text-sm sm:text-base"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
               Start Your Journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={windowSize.width < 640 ? 16 : 18} />
              </motion.button>
              
              <motion.button
                className="group text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg border border-white/20 hover:bg-white/5 flex items-center gap-2 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                See What’s Possible
                <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={windowSize.width < 640 ? 16 : 18} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] relative overflow-visible"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Main rotating images */}
            <div className="relative w-full h-full perspective-1000">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ 
                    opacity: activeImageIndex === index ? 1 : 0,
                    rotateY: activeImageIndex === index ? 0 : 90,
                    zIndex: activeImageIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Floating accent images - Hidden on small screens */}
            <motion.div
              className="hidden sm:block absolute -top-6 sm:-top-8 lg:-top-10 -right-6 sm:-right-8 lg:-right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg sm:rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <img
                src="https://i.pinimg.com/736x/a3/d1/13/a3d11301dce847ae60b7fd1b13760a39.jpg"
                alt="Accent view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-xl" />
            </motion.div>
            
            <motion.div
              className="hidden sm:block absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -left-6 sm:-left-8 lg:-left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg sm:rounded-xl shadow-xl overflow-hidden z-20"
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <img
                src="https://i.pinimg.com/736x/0c/1c/82/0c1c825f09972138a3afa15b865ecb8c.jpg"
                alt="Accent view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-xl" />
            </motion.div>
            
            {/* Image selection indicators */}
            <div className="absolute -bottom-10 sm:-bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-1.5 sm:h-2 rounded-full ${activeImageIndex === index ? 'bg-blue-400 w-4 sm:w-6' : 'bg-white/30 w-1.5 sm:w-2'}`}
                  onClick={() => setActiveImageIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Small decorative line at bottom */}
        <motion.div 
          className="w-16 h-1 bg-blue-500/50 mx-auto mt-12 sm:mt-16 lg:mt-20 rounded-full"
          initial={{ opacity: 0, width: 0 }}
          animate={isInView ? { opacity: 1, width: 64 } : { opacity: 0, width: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />
      </div>
    </div>
  );
}