import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ModernWellnessBlogSection() {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Set component visible after mount for animation
    setVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/30/7b/2e/307b2e90cfa1466249fbb4e901051f3e.jpg",
      title: "AROMA SCENTED LOVELY CANDLE",
      date: "JULY 2, 2021",
      categories: ["MASSAGE", "RELAX"],
      author: "Leslie Pickett",
      excerpt: "Discover the therapeutic benefits of aromatic candles and how they can transform your space.",
      link: "/blog/aroma-scented-lovely-candle"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/5f/5b/f0/5f5bf070efccafbb9a06220c0f534863.jpg",
      title: "LONG DRIED PRICKLY CACTUS",
      date: "JULY 2, 2021",
      categories: ["MASSAGE", "RELAX"],
      author: "Leslie Pickett",
      excerpt: "Explore how natural elements can enhance your wellness routine and bring harmony to your home.",
      link: "/blog/long-dried-prickly-cactus"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/4b/a9/27/4ba927074fc15f64a9f3b7ca3661d7a8.jpg",
      title: "TOP SKIN CARE TIPS FOR SENSITIVE SKIN",
      date: "JULY 2, 2021",
      categories: ["MASSAGE", "RELAX"],
      author: "Leslie Pickett",
      excerpt: "Essential guidance for nurturing sensitive skin with gentle, effective wellness practices.",
      link: "/blog/top-skin-care-tips-for-sensitive-skin"
    }
  ];

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
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-white text-white py-16 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Header Section with Animation */}
      <motion.div 
        className="text-center mb-16 w-full max-w-4xl mx-auto"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-serif mb-6 tracking-wide"
          variants={titleVariants}
        >
          <span className="text-green-500">TRUE</span> WELLNESS
        </motion.h1>
        
        <motion.div 
          className="h-px w-16 bg-amber-500 mx-auto mb-6"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        
        <motion.p 
          className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-light"
          variants={itemVariants}
        >
          Immerse yourself in our curated wellness experiences. Discover practices and products 
          that nurture your mind, body, and spirit for a more balanced lifestyle.
        </motion.p>
      </motion.div>

      {/* Blog Grid with Animations */}
      <motion.div 
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {blogPosts.map((post) => (
          <motion.div 
            key={post.id} 
            className="flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            onHoverStart={() => setHoveredPost(post.id)}
            onHoverEnd={() => setHoveredPost(null)}
          >
            {/* Clickable Image with Hover Effect */}
            <a href={post.link} className="block relative overflow-hidden h-64">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-white font-light text-sm border border-white px-4 py-2 rounded-full"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: hoveredPost === post.id ? 0 : 20, 
                    opacity: hoveredPost === post.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  READ MORE
                </motion.span>
              </motion.div>
            </a>

            {/* Post Meta with Animations */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs text-amber-500 mb-3 font-light tracking-wider">
                {post.date} • {post.categories.join(" • ")}
              </div>
              
              <h2 className="text-xl md:text-2xl font-serif mb-3 leading-tight">
                <a href={post.link} className="hover:text-amber-500 transition-colors duration-300">
                  {post.title}
                </a>
              </h2>
              
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="pt-4 border-t border-gray-800 flex items-center mt-auto">
                <div className="w-8 h-8 rounded-full bg-gray-700 mr-3"></div>
                <span className="text-xs text-gray-400">
                  By {post.author}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* View All Posts Button */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a 
          href="/blog"
          className="inline-block px-8 py-3 bg-transparent border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300 text-sm tracking-wide"
        >
          VIEW ALL POSTS
        </a>
      </motion.div>
    </div>
  );
}