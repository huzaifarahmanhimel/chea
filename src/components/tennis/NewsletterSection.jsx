import { useState, useEffect } from 'react';

export default function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation on component mount
    setIsVisible(true);
  }, []);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubscribe = () => {
    if (!email) return;
    
    // Animation for submitting
    setIsSubmitting(true);
    
    // Handle form submission logic here
    console.log('Email submitted:', email);
    
    // Simulate submission delay
    setTimeout(() => {
      setEmail('');
      setIsSubmitting(false);
      alert('Thank you for subscribing!');
    }, 800);
  };

  return (
    <div className="w-full bg-black py-16 px-4">
      <div 
        className={`max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className={`md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter Your Email Address"
                className={`flex-grow px-4 py-3 rounded-lg sm:rounded-r-none border transition-all duration-300 ${isFocused ? 'border-lime-400 ring-2 ring-lime-400 ring-opacity-50' : 'border-gray-300'} focus:outline-none`}
              />
              <button
                onClick={handleSubscribe}
                className={`mt-2 sm:mt-0 px-6 py-3 bg-lime-400 text-gray-800 font-bold rounded-lg sm:rounded-l-none transition-all duration-300 ${isSubmitting ? 'bg-lime-500 scale-95' : 'hover:bg-lime-500 hover:scale-105'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}