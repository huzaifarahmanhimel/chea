import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DancingHero() {
  const [activeStyle, setActiveStyle] = useState('BALLET');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const danceStyles = [
    {
      name: 'BALLET',
      image: 'https://i.pinimg.com/736x/1c/4f/8f/1c4f8f96f6815ccbf457bfe70ecf6cc6.jpg',
      choreographer: 'Daya Chitanis',
      choreographerImage: '/api/placeholder/100/100',
      color: 'from-rose-500/30 to-transparent'
    },
    {
      name: 'BREAKDANCE',
      image: '/api/placeholder/800/1200',
      choreographer: 'Mike Rodriguez',
      choreographerImage: '/api/placeholder/100/100',
      color: 'from-amber-500/30 to-transparent'
    },
    {
      name: 'YOGA',
      image: '/api/placeholder/800/1200',
      choreographer: 'Emma Thompson',
      choreographerImage: '/api/placeholder/100/100',
      color: 'from-sky-500/30 to-transparent'
    }
  ];

  const currentStyle = danceStyles.find(style => style.name === activeStyle);

  return (
    <motion.div 
      className="relative w-full h-screen"
       style={{ backgroundColor: '#f0d2ba' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-white to-amber-50 opacity-70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white to-amber-50 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          key={currentStyle.name}
        />

        {/* Main Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-16">
        <motion.div 
          className="max-w-5xl w-full flex flex-col md:flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left Content */}
          <motion.div 
            className="w-full md:w-1/2 pt-12 md:pt-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h2 
              className="text-sm uppercase tracking-widest text-slate-500 mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Experience the Art
            </motion.h2>
            
            <motion.h1 
              className=" text-black text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-md"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Dance for us is not just an activity, it is a way of life.
            </motion.h1>
            
            <motion.p 
              className="text-slate-500 max-w-md mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Join our community of passionate dancers and experience the transformative power of movement. Classes for all levels and styles.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button 
                className="px-8 py-3 bg-orange-200 text-zinc-900 rounded-full font-medium text-sm hover:bg-orange-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              
              <motion.button 
                className="px-8 py-3  text-black border border-stone-600 rounded-full font-medium text-sm hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Contact */}
            <motion.div 
              className="flex items-center text-sm text-zinc-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="mr-2">Contact:</span>
              <a href="tel:01503-414708" className="hover:text-orange-200 transition-colors">+8801503-414708</a>
            </motion.div>
          </motion.div>

          {/* Right Content - Style Selector */}
          <motion.div 
            className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div 
              className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStyle}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={currentStyle.image}
                    alt={`${currentStyle.name} dancer`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Style Name Overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-orange-200 mb-1">Current Style</div>
                    <div className="text-xl font-bold">{activeStyle}</div>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src={currentStyle.choreographerImage}
                      alt={currentStyle.choreographer}
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <div className="text-xs">
                      <div className="opacity-70">Choreographer</div>
                      <div>{currentStyle.choreographer}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Style Selector */}
            <motion.div 
              className="flex justify-center gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {danceStyles.map((style) => (
                <motion.button
                  key={style.name}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    activeStyle === style.name 
                      ? 'bg-orange-200 text-zinc-900' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setActiveStyle(style.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {style.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Media Links */}
      <motion.div 
        className="absolute bottom-8 right-8 z-30 flex gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {['Instagram', 'Facebook', 'YouTube'].map((social, index) => (
          <motion.a
            key={social}
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-200 hover:text-zinc-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
          >
            <span className="text-xs">{social.charAt(0)}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="text-slate-500 text-xs uppercase tracking-wider mb-2 opacity-60">Scroll</div>
        <motion.div 
          className="w-px h-8 bg-black"
          animate={{ 
            scaleY: [1, 0.3, 1],
            opacity: [0.7, 1, 0.7] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.div>
  );
}