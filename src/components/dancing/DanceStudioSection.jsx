import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DanceStudioSection() {
  const [activeTab, setActiveTab] = useState('ballet');
  
  const danceStyles = [
    {
      id: 'ballet',
      title: 'Ballet Classes',
      description: 'Classic ballet training for all ages and skill levels. Develop grace, strength and discipline in our state-of-the-art studios.',
      image: "https://i.pinimg.com/736x/7e/8d/60/7e8d60a7f43338130b7a7c00af95c77a.jpg",
      color: 'from-pink-500/20 to-purple-500/20'
    },
    {
      id: 'hiphop',
      title: 'Hip Hop',
      description: 'Express yourself through contemporary urban choreography. Our energetic hip hop classes blend the latest styles with foundational techniques.',
      image: "https://i.pinimg.com/736x/95/0a/68/950a68c7b1cceb52fb600faeb144608b.jpg",
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      id: 'contemporary',
      title: 'Contemporary',
      description: 'A fluid dance style incorporating elements of ballet, jazz, and modern dance. Focus on expressing emotion through movement.',
      image: "https://i.pinimg.com/736x/13/09/36/13093606e934d73ef66dc45c4d62448b.jpg",
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 'yoga',
      title: 'Dance Yoga',
      description: 'Combine the art of dance with yoga principles. Improve flexibility, mindfulness, and movement quality in these unique fusion classes.',
      image: "https://i.pinimg.com/736x/8b/ea/a7/8beaa76d1aab1c1dc1e4e2e9ec3a6380.jpg",
      color: 'from-emerald-500/20 to-teal-500/20'
    }
  ];

  // Auto-rotate through tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = danceStyles.findIndex(style => style.id === activeTab);
      const nextIndex = (currentIndex + 1) % danceStyles.length;
      setActiveTab(danceStyles[nextIndex].id);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeTab, danceStyles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
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
  
  const activeStyle = danceStyles.find(style => style.id === activeTab);

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-gray-50">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activeStyle.color} transition-all duration-700 ease-in-out`} />
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-teal-300/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-sm font-medium tracking-wider text-indigo-600 uppercase">
            Express Yourself Through Movement
          </motion.p>
          <motion.h2 variants={itemVariants} className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Our Dance Programs
          </motion.h2>
          <motion.div variants={itemVariants} className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600">
              Discover the perfect dance style for you with our diverse class offerings taught by world-class instructors
            </p>
          </motion.div>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {danceStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveTab(style.id)}
              className={`px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === style.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {style.title}
            </button>
          ))}
        </div>

        {/* Content display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div 
            key={`image-${activeTab}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10"
          >
            <img 
              src={activeStyle.image} 
              alt={activeStyle.title} 
              className="w-full h-full object-cover aspect-[4/3]" 
            />
          </motion.div>
          
          {/* Content */}
          <motion.div 
            key={`content-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{activeStyle.title}</h3>
            <p className="text-lg text-gray-600 mb-8">{activeStyle.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['All ages welcome', 'Expert instructors', 'Beginner to advanced', 'Regular showcases'].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1">
                Join Class
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-indigo-600 font-medium rounded-lg border border-gray-200 transition-all transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Class schedules teaser */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Weekly Class Schedule</h3>
            <p className="mt-2 text-gray-600">Find the perfect time that fits your schedule</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { day: 'Monday & Wednesday', times: ['9:00 AM - Ballet', '4:30 PM - Kids Ballet', '6:00 PM - Contemporary'] },
              { day: 'Tuesday & Thursday', times: ['10:00 AM - Dance Yoga', '5:00 PM - Hip Hop', '7:30 PM - Advanced Ballet'] },
              { day: 'Friday & Saturday', times: ['9:30 AM - Contemporary', '11:00 AM - Hip Hop', '4:00 PM - Weekend Workshop'] }
            ].map((schedule, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg text-gray-900 mb-3">{schedule.day}</h4>
                <ul className="space-y-2">
                  {schedule.times.map((time, i) => (
                    <li key={i} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1">
              View Full Schedule
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}