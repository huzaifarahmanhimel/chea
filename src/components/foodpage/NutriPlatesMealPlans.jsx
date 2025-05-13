
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NutriPlatesMealPlans() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(3); // Default to the highlighted plan
  
  const mealPlans = [
    {
      id: 1,
      title: "Essential Plan",
      price: "$180",
      description: "Perfect for individuals looking to kickstart their healthy journey.",
      meals: "3 meals per week.",
      features: ["Nutritionist-approved recipes", "Fresh, locally sourced ingredients", "Eco-friendly packaging"],
      isHighlighted: false
    },
    {
      id: 2,
      title: "Balance Plan",
      price: "$300",
      description: "Ideal for those seeking a well-rounded and diverse meal experience.",
      meals: "5 meals per week.",
      features: ["Customizable meal options", "Includes premium ingredients", "Weekly menu rotation"],
      isHighlighted: false
    },
    {
      id: 3,
      title: "Premium Plan",
      price: "$420",
      description: "For the committed health enthusiast seeking a daily dose of nutrition.",
      meals: "7 meals per week.",
      features: ["Priority delivery scheduling", "Access to exclusive recipes", "Personal nutritionist consultation"],
      isHighlighted: true
    }
  ];

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">Meal Plans</h2>
          <h1 className="mt-2 text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Our Special <span className="text-emerald-600">Food Plans</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect meal plan to match your lifestyle and nutritional goals.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mealPlans.map((plan) => {
            const isHovered = hoveredCard === plan.id;
            const isSelected = selectedPlan === plan.id;
            const isActive = plan.isHighlighted || isHovered || isSelected;
            
            return (
              <motion.div 
                key={plan.id}
                className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  isActive 
                    ? "ring-4 ring-emerald-500 bg-gradient-to-br from-emerald-600 to-emerald-800" 
                    : "bg-white hover:shadow-xl"
                }`}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedPlan(plan.id)}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-800"
                    }`}>
                      {plan.title}
                    </h3>
                    {plan.isHighlighted && (
                      <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-5xl font-bold mb-6 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-emerald-600"
                  }`}>
                    {plan.price}
                    <span className={`text-base font-normal ml-1 ${
                      isActive ? "text-emerald-100" : "text-gray-500"
                    }`}>
                      /month
                    </span>
                  </p>
                  
                  <p className={`mb-8 transition-colors duration-300 ${
                    isActive ? "text-emerald-100" : "text-gray-600"
                  }`}>
                    {plan.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className={`mr-3 flex-shrink-0 transition-colors duration-300 ${
                        isActive ? "text-emerald-200" : "text-emerald-500"
                      }`}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className={`font-medium transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-700"
                      }`}>
                        {plan.meals}
                      </p>
                    </div>
                    
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`mr-3 flex-shrink-0 transition-colors duration-300 ${
                          isActive ? "text-emerald-200" : "text-emerald-500"
                        }`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <p className={`transition-colors duration-300 ${
                          isActive ? "text-emerald-100" : "text-gray-600"
                        }`}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isActive
                        ? "bg-white text-emerald-700 hover:bg-emerald-50" 
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isActive ? "Selected Plan" : "Choose This Plan"}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500">
            All plans include free delivery and 24/7 customer support.
          </p>
        </div>
      </div>
    </div>
  );
}