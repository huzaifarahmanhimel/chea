
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock } from 'lucide-react';
import group from '../images/group.jpg';
import kids from '../images/kids.jpg';
import student from '../images/students.jpg';


const TennisAcademySection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sections = [
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Group and Team Lessons",
      description: "Improve your skills with our collaborative group and team tennis training programs.",
      image: {group}
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 6h1a2 2 0 0 1 2 2v3.5c0 .5.2 1 .5 1.5s.7 1 1.5 1c.8 0 1.3-.5 1.5-1s.2-1 .2-1.5V8a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
        <path d="M16 14V8" />
        <rect width="8" height="14" x="4" y="6" rx="2" />
      </svg>,
      title: "Tennis Academy",
      description: "Professional coaching and advanced training for tennis enthusiasts of all levels.",
      image: {kids}
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "Tennis Court Rent",
      description: "Book high-quality tennis courts for practice, matches, or personal training.",
      image: {student}
    }
  ];

  return (
    <motion.section 
      className="bg-gray-50 py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tennis Academy Services
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
              variants={cardVariants}
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {section.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  Read More
                </motion.button>
              </div>
              <div className="h-48 overflow-hidden">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TennisAcademySection;