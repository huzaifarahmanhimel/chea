import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function PricingSectionDance() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const pricing = [
    {
      id: 1,
      title: "BALLET DANCE",
      price: "$78",
      description: "Perfect for beginners looking to master the fundamentals of ballet.",
      features: [
        "Weekly group classes",
        "Basic technique training",
        "Dance recital opportunities",
        "Practice space access"
      ]
    },
    {
      id: 2,
      title: "HIP HOP DANCE",
      price: "$78",
      description: "Energetic classes focused on rhythm, style and self-expression.",
      features: [
        "Weekly group sessions",
        "Street style techniques",
        "Freestyle development",
        "Performance opportunities"
      ]
    },
    {
      id: 3,
      title: "BREAKDANCE",
      price: "$78",
      description: "Learn top rock, power moves, freezes and footwork fundamentals.",
      features: [
        "Technical skill building",
        "Physical conditioning",
        "Battle preparation",
        "Creative expression"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    },
    hover: {
      y: -15,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8
      }
    }
  };

  return (
    <div className="w-full bg-amber-50 py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">OUR PRICING</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect dance class that fits your style and budget. All classes include professional instruction and access to our state-of-the-art facilities.
          </p>
          <motion.div 
            className="inline-block mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="flex items-center border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-all">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricing.map((plan) => (
            <motion.div
              key={plan.id}
              className={`bg-gray-100 rounded-lg p-8 relative overflow-hidden ${
                plan.id === 2 ? "md:mt-8 lg:mt-0" : ""
              }`}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(plan.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gray-900"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: hoveredCard === plan.id ? 1 : 0,
                  transition: { duration: 0.3 }
                }}
                style={{ transformOrigin: "left" }}
              />
              
              <h3 className="text-xl font-bold mb-6 text-gray-900">{plan.title}</h3>
              
              <div className="flex items-end mb-6">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600 ml-2 mb-1">/ MONTH</span>
              </div>
              
              <p className="text-gray-600 mb-8">{plan.description}</p>
              
              <ul className="mb-10 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 mt-1 bg-gray-900 text-white rounded-sm">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="flex w-full items-center justify-center border-2 border-gray-900 text-gray-900 py-3 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-all">
                  Purchase Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}