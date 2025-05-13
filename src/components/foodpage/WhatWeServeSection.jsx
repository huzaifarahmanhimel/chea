import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhatWeServeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isHovering, setIsHovering] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Healthy Recipe",
      description: "Quisque eget metus id nunc sagittis pharetra eu sit amet magna.",
      image: "https://i.pinimg.com/736x/7d/e2/c3/7de2c3d4337af8fcb2dde497a4812b0d.jpg",
      color: "from-green-200 to-green-100"
    },
    {
      id: 2,
      title: "Healthy Lifestyle",
      description: "Quisque eget metus id nunc sagittis pharetra eu sit amet magna.",
      image: "https://i.pinimg.com/736x/45/d5/05/45d50580361055196da23071107e5c56.jpg",
      color: "from-amber-200 to-amber-100"
    },
    {
      id: 3,
      title: "Healthy Meals",
      description: "Quisque eget metus id nunc sagittis pharetra eu sit amet magna.",
      image: "https://i.pinimg.com/736x/df/ab/a8/dfaba8273aa1235559b36eddfa0037d6.jpg",
      color: "from-rose-200 to-rose-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-amber-100 filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-100 filter blur-3xl opacity-30 -z-10"></div>
      
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-amber-100 text-green-900 font-medium text-sm mb-4"
            variants={textVariants}
          >
            What We Serve
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            variants={textVariants}
          >
            Our Best <span className="text-green-500">Programs</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
            variants={textVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
          <motion.div 
            className="inline-block"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#" 
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-medium rounded-full overflow-hidden shadow-lg hover:shadow-amber-300/50 transition-all duration-300"
            >
              <span className="relative z-10">Read More</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
          variants={containerVariants}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="relative"
              variants={itemVariants}
              onMouseEnter={() => setIsHovering(program.id)}
              onMouseLeave={() => setIsHovering(null)}
              whileHover={{ y: -12 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} rounded-3xl transform rotate-3 opacity-0 transition-opacity duration-300 ${isHovering === program.id ? 'opacity-70' : ''}`}></div>
              <div className="relative z-10 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-full transform transition-transform duration-300">
                <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-8 w-40 h-40 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: isHovering === program.id ? 1.1 : 1,
                        transition: { duration: 0.4 }
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 relative">
                    {program.title}
                    <motion.span 
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-green-700 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: isHovering === program.id ? '60%' : '30%',
                        transition: { duration: 0.3 } 
                      }}
                    ></motion.span>
                  </h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <motion.div 
                    className="mt-auto"
                    animate={{ 
                      opacity: isHovering === program.id ? 1 : 0.7,
                      y: isHovering === program.id ? 0 : 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <a 
                      href="#" 
                      className="text-green-500 font-medium inline-flex items-center hover:text-green-600 transition-colors"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}