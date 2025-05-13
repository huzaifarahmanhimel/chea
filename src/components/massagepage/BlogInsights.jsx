import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BlogInsights() {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Art Of Cosmetic Surgery: Path To Transformation.',
      category: 'Wellness',
      date: 'January 9, 2024',
      image: 'https://i.pinimg.com/736x/27/94/ec/2794ece5093f0e772a76eeae8355a3dd.jpg',
      bgColor: 'bg-emerald-900'
    },
    {
      id: 2,
      title: 'The Spa Diaries: A Chronicle Of Relaxation And Renewal Spa.',
      category: 'Wellness',
      date: 'January 9, 2024',
      image: 'https://i.pinimg.com/736x/eb/65/bf/eb65bfe12a5b3e45a2b624503e3b5e48.jpg',
      bgColor: 'bg-emerald-900'
    },
    {
      id: 3,
      title: 'Mindful Moments: Embracing Tranquility In A Busy World.',
      category: 'Yoga & Fitness',
      date: 'January 9, 2024',
      image: 'https://i.pinimg.com/736x/64/fe/d4/64fed4c1954a2ca3f87f002a21160501.jpg',
      bgColor: 'bg-emerald-900'
    },
    {
      id: 4,
      title: 'The Science Of Spa: Exploring The Benefits Of Wellness Relaxation.',
      category: 'Massage',
      date: 'January 9, 2024',
      image: 'https://i.pinimg.com/736x/f7/79/5d/f7795de246e1ea8f3c6863390b37f8b8.jpg',
      bgColor: 'bg-emerald-900'
    }
  ];

  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section className="py-16 bg-stone-100 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-wider text-gray-600 mb-2">LATEST INSIGHTS</p>
          <div className="flex justify-center items-center my-4">
            <div className="h-px bg-gray-400 w-16"></div>
            <img src="/api/placeholder/20/20" alt="leaf icon" className="mx-2" />
            <div className="h-px bg-gray-400 w-16"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-emerald-900 mb-3">
            Stay Informed & Inspired With<br />
            Latest Blog And Insights.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            believe that wellness extends far beyond the treatment room. explore our wellness resources,
            from expert tips on self-care to guides on maintaining a balanced of your lifestyle.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              variants={itemVariants}
              className="flex overflow-hidden rounded-full"
            >
              <div className={`${post.bgColor} text-white p-4 py-6 flex-grow rounded-l-full`}>
                <div className="pl-4 pr-2 max-w-md">
                  <h3 className="font-medium text-lg sm:text-xl mb-2">{post.title}</h3>
                  <div className="flex items-center text-xs text-gray-300">
                    <span>{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
              <div className="rounded-r-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-16 h-16 sm:w-24 sm:h-24 object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <motion.button 
            className="border border-gray-400 text-gray-700 rounded-full px-8 py-2 hover:bg-emerald-900 hover:text-white hover:border-emerald-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Blogs
          </motion.button>
        </div>
      </div>
    </section>
  );
}