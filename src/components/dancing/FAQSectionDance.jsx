import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  // State to track which FAQ is open
  const [activeQuestion, setActiveQuestion] = useState("subscription");
  
  // FAQ data
  const faqItems = [
    {
      id: "photo",
      question: "HOW TO CHANGE MY PHOTO FROM ADMIN DASHBOARD?",
      answer: "Navigate to your profile settings in the admin dashboard, click on the profile photo section, and upload a new image. Save your changes when done."
    },
    {
      id: "password",
      question: "HOW TO CHANGE MY PASSWORD EASILY?",
      answer: "Go to security settings, select 'Change Password', enter your current password followed by your new password, then confirm your new password."
    },
    {
      id: "subscription",
      question: "HOW TO CHANGE MY SUBSCRIPTION PLAN USING PAYPAL",
      answer: "Access your subscription settings, select 'Change Plan', choose your preferred plan, and select PayPal as your payment method to complete the transaction."
    }
  ];

  // Toggle FAQ function
  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto my-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left side - Image and title */}
        <motion.div 
          className="lg:w-1/2 relative flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute top-12 left-12 z-0 text-9xl font-bold text-gray-200"
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.03, 1] 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            DAN
            <br />
            ZE
          </motion.div>
          
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img 
              src="https://i.pinimg.com/736x/92/17/81/921781f53ac83557a0692b49b37d77c9.jpg" 
              alt="Dancer" 
              className="w-64 md:w-80 h-auto object-cover"
              initial={{ y: 20 }}
              animate={{ 
                y: [0, -15, 0],
                rotateZ: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Right side - FAQ */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            GENERAL QUESTION
          </motion.h2>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {faqItems.map((item) => (
              <motion.div 
                key={item.id}
                className={`bg-white rounded-md border ${activeQuestion === item.id ? "border-gray-400" : "border-gray-200"}`}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleQuestion(item.id)}
                >
                  <span className="font-medium text-sm md:text-base">{item.question}</span>
                  <motion.div
                    animate={{ rotate: activeQuestion === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-6 h-6 flex items-center justify-center ${activeQuestion === item.id ? "text-amber-500" : "text-gray-500"}`}
                  >
                    {activeQuestion === item.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {activeQuestion === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 text-gray-600 text-sm md:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-sm text-gray-500 italic pr-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}