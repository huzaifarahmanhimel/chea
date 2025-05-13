import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    label: 'Branch In World',
    value: '120+',
    icon: '🌿',
    bg: 'https://source.unsplash.com/600x400/?branches,trees',
  },
  {
    label: 'Satisfied Customers',
    value: '70K+',
    icon: '🍃',
    bg: 'https://source.unsplash.com/600x400/?happy,people',
  },
  {
    label: 'Personal Staff',
    value: '40+',
    icon: '🌱',
    bg: 'https://source.unsplash.com/600x400/?team,work',
  },
  {
    label: 'Years Of Experience',
    value: '12+',
    icon: '🌾',
    bg: 'https://source.unsplash.com/600x400/?growth,nature',
  },
];

const StatsSection = () => {
  return (
    <section className="bg-stone-100 mx-auto py-16 px-4 sm:px-8 lg:px-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative group rounded-[3rem] border border-gray-300 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            {/* Background image on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundImage: `url(${item.bg})` }}
            ></div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 py-10 px-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-md font-medium text-gray-700 group-hover:text-white mb-2 transition-colors">
                {item.label}
              </h4>
              <p className="text-3xl font-bold text-green-900 group-hover:text-white transition-colors">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
