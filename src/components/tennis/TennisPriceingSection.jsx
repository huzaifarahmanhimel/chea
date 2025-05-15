import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TennisPricingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingPlans = [
    {
      title: "Tennis Academy",
      price: "$49.99",
      period: "per month",
      features: [
        "2 hours Per Lesson",
        "Get 11x Lesson Per Month",
        "2 Match Per Week",
        "Private Court",
        "Free access Fitness & Gym"
      ],
      buttonText: "REGISTER NOW",
      bgColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Tennis Court Rent",
      price: "$69.99",
      period: "per hours",
      features: [
        "2 hours Per Lesson",
        "Get 11x Lesson Per Month",
        "2 Match Per Week",
        "Private Court",
        "Free access Fitness & Gym"
      ],
      buttonText: "BOOK NOW",
      bgColor: "bg-gray-900",
      textColor: "text-white"
    },
    {
      title: "Private Lessons",
      price: "$89.99",
      period: "per month",
      features: [
        "2 hours Per Lesson",
        "Get 11x Lesson Per Month",
        "2 Match Per Week",
        "Private Court",
        "Free access Fitness & Gym"
      ],
      buttonText: "REGISTER NOW",
      bgColor: "bg-white",
      textColor: "text-gray-800"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const priceVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "#a3e635",
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="w-full bg-gray-50 py-24 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-lime-500 font-medium mb-6 tracking-wide text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            OUR PRICING
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            FLEXIBLE PRICING PLANS
          </motion.h1>
          
        </motion.div>
        
        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`${plan.bgColor} ${plan.textColor} rounded-xl shadow-xl overflow-hidden`}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-5">{plan.title}</h3>
                <p className="text-sm mb-8 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </p>
                
                <motion.div 
                  className="mb-10"
                  variants={priceVariants}
                >
                  <span className="text-6xl font-bold text-lime-500">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2"> / {plan.period}</span>
                </motion.div>
                
                <hr className="border-gray-200 dark:border-gray-700 mb-10" />
                
                <motion.ul 
                  className="space-y-5 mb-10"
                  variants={containerVariants}
                >
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      variants={featureVariants}
                      custom={i}
                    >
                      <svg className="w-6 h-6 text-lime-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.button 
                  className="w-full py-5 px-8 bg-lime-400 text-gray-800 font-bold rounded-lg text-lg"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}