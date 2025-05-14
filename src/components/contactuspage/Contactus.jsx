import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', address: '', message: '' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <div className="w-full bg-black relative overflow-hidden">
      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-100 transform -skew-y-3 translate-y-16"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-3">Feel free to get in touch</motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            We're always eager to hear from you. Whether you have questions, feedback, or just want to say hello, we're here to help.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-6 md:p-10 z-10"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Leave your message</h3>
            <div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your address"
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="bg-orange-300 hover:bg-orange-400 text-white font-medium py-3 px-6 rounded-full w-full md:w-auto flex justify-center items-center transition-all duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 pt-8 lg:pt-16 z-10"
          >
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't hesitate to contact us</h3>
              <p className="text-gray-300 mb-8">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-white border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <span className="text-blue-300 text-xl mr-3">📍</span>
                  <h4 className="font-medium">Office</h4>
                </div>
                <p className="text-gray-300">Jl. Merdeka Raya No.73B</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-white border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <span className="text-yellow-300 text-xl mr-3">📞</span>
                  <h4 className="font-medium">Phone</h4>
                </div>
                <p className="text-gray-300">+62 111-444-90</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-white border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <span className="text-purple-300 text-xl mr-3">🕒</span>
                  <h4 className="font-medium">Work Hours</h4>
                </div>
                <p className="text-gray-300">Everyday 09 am - 07 pm</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-white border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <span className="text-green-300 text-xl mr-3">✉️</span>
                  <h4 className="font-medium">Email</h4>
                </div>
                <p className="text-gray-300">www.sluecop.com</p>
              </motion.div>
            </div>

            <div className="mt-10">
              <h4 className="text-white font-medium mb-3">Social media:</h4>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter', 'whatsapp', 'youtube', 'telegram'].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <span className="text-lg">{platform.charAt(0).toUpperCase()}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}