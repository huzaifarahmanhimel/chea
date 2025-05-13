import React from 'react';
import { motion } from 'framer-motion';

// Icons for the dance styles
const BalletIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 15L15 40M30 15L35 40M20 15C20 15 22.5 20 25 20C27.5 20 30 15 30 15M20 15H30" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const HipHopIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 15V40M30 15V40M20 25H30M20 35H30" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ContemporaryIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 15C20 15 22.5 40 25 40C27.5 40 30 15 30 15" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PoleIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="23" y="5" width="4" height="40" stroke="currentColor" strokeWidth="2"/>
    <path d="M23 15C15 15 10 20 10 25C10 30 15 35 23 35" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const BreakdanceIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M25 10V20M25 20C25 20 15 15 10 25C5 35 25 40 25 40C25 40 45 35 40 25C35 15 25 20 25 20Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const KpopIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 15L15 25M20 15L25 40M20 15H30M30 15L35 25" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Dance class data
const danceClasses = [
  {
    id: 1,
    title: "BALLET DANCE",
    icon: <BalletIcon />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
  },
  {
    id: 2,
    title: "HIP HOP DANCE",
    icon: <HipHopIcon />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
  },
  {
    id: 3,
    title: "CONTEMPORARY",
    icon: <ContemporaryIcon />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
  },
  {
    id: 4,
    title: "POLE DANCE",
    icon: <PoleIcon />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
  },
  {
    id: 5,
    title: "BREAKDANCE",
    icon: <BreakdanceIcon />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
  },
  {
    id: 6,
    title: "K-POP DANCE",
    icon: <KpopIcon />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar."
  }
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3
    }
  }
};

const DanceClassSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">CHOOSE YOUR DANCE CLASS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {danceClasses.map((danceClass) => (
            <motion.div
              key={danceClass.id}
              className="bg-white p-8 rounded-lg flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="text-gray-800 mb-4"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {danceClass.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{danceClass.title}</h3>
              <p className="text-gray-600 mb-6">{danceClass.description}</p>
              <motion.button 
                className="flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DanceClassSection;