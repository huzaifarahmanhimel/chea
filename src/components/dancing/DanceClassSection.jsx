import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DanceClassSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scheduleItems = [
    {
      time: "6:00 AM",
      title: "DOORS OPEN!",
      description: "Ease your way in for your Movement Journey",
      image: "/api/placeholder/300/300",
      alt: "Alarm clock"
    },
    {
      time: "6:05 AM",
      title: "WAKE UP THE BODY!",
      description: "Animal Flow/Yoga Movement to awaken the body",
      subtext: "Sound implemented with 'I FEEL' binaural frequency bath",
      image: "/api/placeholder/300/300",
      alt: "Person doing yoga"
    },
    {
      time: "6:15 AM",
      title: "DJ IS READY",
      description: "Moving, dancing, celebrating Life with 'Feel good electronic Dance music'",
      image: "/api/placeholder/300/300",
      alt: "DJ and dancers"
    },
    {
      time: "7:15 AM",
      title: "COOLDOWN",
      description: "Deep relaxation, conscious breathing implemented with 'I FEEL' binaural frequency bath",
      image: "/api/placeholder/300/300",
      alt: "Person relaxing"
    },
    {
      time: "7:25 AM",
      title: "SHARE YOUR FEELINGS & SMILES",
      description: "Mingle with your Dancing Friends while enjoying Protein Shakes (available for Order)",
      image: "/api/placeholder/300/300",
      alt: "Protein shake"
    },
    {
      time: "7:30 AM",
      title: "TIME TO CONQUER THE DAY",
      description: "Get to wherever place on this earth you are expected",
      image: "/api/placeholder/300/300",
      alt: "Phone and coffee"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <div className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          SET YOUR ALARM! <br />YOUR DAY STARTS AT 6AM!
        </h1>
        <p className="text-xl md:text-2xl text-black uppercase tracking-wider">
          THE EARLY BIRD CATCHES THE WORM
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {scheduleItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white bg-opacity-80 rounded-lg overflow-hidden shadow-xl flex flex-col items-center p-6"
          >
            <motion.div 
              className="w-40 h-40 rounded-full overflow-hidden mb-6"
              whileHover={{ rotate: 5 }}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-full object-cover" 
              />
            </motion.div>
            
            <motion.h3 
              className="text-xl font-bold mb-2 text-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              {item.time}
            </motion.h3>
            
            <motion.h4 
              className="text-lg font-bold mb-3 text-amber-600 uppercase tracking-wide"
              whileHover={{ color: "#f59e0b" }}
            >
              {item.title}
            </motion.h4>
            
            <p className="text-gray-600 text-center">
              {item.description}
            </p>
            
            {item.subtext && (
              <p className="text-gray-500 text-sm mt-2 text-center italic">
                {item.subtext}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}