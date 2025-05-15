import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Victoria",
    role: "Fitness Enthusiast",
    quote: "The trainers here are exceptional. They've helped me achieve fitness goals I never thought possible. The community is supportive and the facilities are top-notch.",
    avatar: "https://i.pinimg.com/736x/60/f2/59/60f25915e8bcce63d308711cb847628d.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "James",
    role: "Member since 2023",
    quote: "I've tried many fitness centers, but this one stands out for its personalized approach and friendly atmosphere. The results speak for themselves!",
    avatar: "https://i.pinimg.com/736x/9c/ec/2f/9cec2fb375f896c83ffbac039184e75e.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sophie",
    role: "Professional Athlete",
    quote: "The specialized training programs have significantly improved my performance. The coaches understand what it takes to reach the next level.",
    avatar: "https://i.pinimg.com/736x/7e/6e/78/7e6e782f674691fa177e3e22f2e6d79f.jpg",
    rating: 5
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center justify-center mb-3">
      {[...Array(5)].map((_, i) => (
        <motion.svg 
          key={i} 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

// Testimonial Card component
const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`bg-amber-50 p-8 rounded-lg shadow-lg max-w-md mx-auto ${isActive ? 'block' : 'hidden md:block'}`}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 text-center"
      >
        <span className="text-5xl text-gray-400">"</span>
        <p className="text-gray-700 text-lg">{testimonial.quote}</p>
      </motion.div>
      
      <StarRating rating={testimonial.rating} />
      
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="flex flex-col items-center mt-4"
      >
        <div className="h-16 w-16 rounded-full overflow-hidden mb-3">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="h-full w-full object-cover"
          />
        </div>
        <h4 className="font-semibold text-lg uppercase tracking-wider">{testimonial.name}</h4>
        <p className="text-gray-500 text-sm">{testimonial.role}</p>
      </motion.div>
    </motion.div>
  );
};

// Navigation Dots component
const NavigationDots = ({ testimonials, currentIndex, setCurrentIndex }) => {
  return (
    <div className="flex justify-center space-x-2 mt-6">
      {testimonials.map((_, idx) => (
        <motion.button
          key={idx}
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: currentIndex === idx ? 1.2 : 1,
            backgroundColor: currentIndex === idx ? "#111827" : "#D1D5DB"
          }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 rounded-full focus:outline-none"
          onClick={() => setCurrentIndex(idx)}
        />
      ))}
    </div>
  );
};

// Main component
export default function TestimonialSectionDance() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 bg-amber-50 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 lg:mb-0 lg:w-1/3"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-gray-900">
              WHAT CLIENTS SAY
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Our clients' success stories inspire us every day. Their achievements and experiences reflect the quality and commitment we bring to every training session.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 bg-transparent border border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              <span>Learn More</span>
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
          
          {/* Right Content - Testimonials */}
          <div className="lg:w-2/3 pl-0 lg:pl-10">
            <div className="relative">
              {/* Mobile View - Show only current testimonial */}
              <div className="block md:hidden">
                <AnimatePresence mode="wait">
                  <TestimonialCard 
                    key={testimonials[currentIndex].id} 
                    testimonial={testimonials[currentIndex]} 
                    isActive={true}
                  />
                </AnimatePresence>
              </div>
              
              {/* Desktop View - Carousel */}
              <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: idx === currentIndex ? 1.05 : 0.95
                    }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isActive={true}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation Dots - Mobile only */}
              <div className="md:hidden">
                <NavigationDots 
                  testimonials={testimonials} 
                  currentIndex={currentIndex} 
                  setCurrentIndex={setCurrentIndex} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gray-900 z-0"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gray-900 z-0"
      />
    </motion.section>
  );
}