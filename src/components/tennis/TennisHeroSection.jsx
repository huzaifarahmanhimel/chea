import { motion } from 'framer-motion';
import { Play, User } from 'lucide-react';

export default function TennisLandingSection() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black"></div>
       
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Best Tennis <span className="text-lime-400">School &</span>
            <br />
            Exclusive Club
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-md">
            Unlock your potential with professional tennis training. Expert coaches, state-of-the-art facilities, and personalized programs for all skill levels.
          </p>
          
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-500 text-green-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-lime-400 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Register Now</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-white/10 transition-colors"
            >
              <Play className="w-5 h-5 text-lime-400" />
              <span>Watch Intro</span>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Player Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block relative"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <img 
              src="https://i.pinimg.com/736x/2b/58/58/2b585804175a4b4cbc06f16b53b3e078.jpg" 
              alt="Tennis Player" 
              className="rounded-xl shadow-2xl object-cover h-[600px] w-full z-30 relative"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}