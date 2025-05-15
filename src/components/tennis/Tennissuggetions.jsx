import { useState, useEffect, useRef } from 'react';
import { Play, Award, Calendar, Users, Dumbbell, Heart, ChevronRight } from 'lucide-react';
import founder from '../images/IMG_8351.jpg';

export default function TennisSuggestions() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState({
    header: false,
    features: false,
    video: false,
    counter: false,
    testimonial: false
  });
  
  // References for intersection observer
  const headerRef = useRef(null);
  const featuresRef = useRef(null);
  const videoRef = useRef(null);
  const counterRef = useRef(null);
  const testimonialRef = useRef(null);
  
  // Counter animation effect
  useEffect(() => {
    if (isVisible.counter) {
      const interval = setInterval(() => {
        if (counter < 430) {
          setCounter(prev => Math.min(prev + 1, 430));
        } else {
          clearInterval(interval);
        }
      }, 10);
      
      return () => clearInterval(interval);
    }
  }, [counter, isVisible.counter]);
  
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === headerRef.current) {
            setIsVisible(prev => ({ ...prev, header: entry.isIntersecting }));
          } else if (entry.target === featuresRef.current) {
            setIsVisible(prev => ({ ...prev, features: entry.isIntersecting }));
          } else if (entry.target === videoRef.current) {
            setIsVisible(prev => ({ ...prev, video: entry.isIntersecting }));
          } else if (entry.target === counterRef.current) {
            setIsVisible(prev => ({ ...prev, counter: entry.isIntersecting }));
          } else if (entry.target === testimonialRef.current) {
            setIsVisible(prev => ({ ...prev, testimonial: entry.isIntersecting }));
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Observe all refs
    if (headerRef.current) observer.observe(headerRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (videoRef.current) observer.observe(videoRef.current);
    if (counterRef.current) observer.observe(counterRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);
    
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (videoRef.current) observer.unobserve(videoRef.current);
      if (counterRef.current) observer.unobserve(counterRef.current);
      if (testimonialRef.current) observer.unobserve(testimonialRef.current);
    };
  }, []);
  
  return (
    <div className="bg-gradient-to-b from-white to-amber-50 text-white w-full overflow-hidden">
      {/* Main content with margin on both sides */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - Animated */}
        <div 
          ref={headerRef} 
          className={`text-center pt-16 pb-12 transform transition-all duration-1000 ${
            isVisible.header ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-400 bg-opacity-20 text-green-400 text-xs font-medium mb-4">
            ELITE TENNIS ACADEMY
          </span>
          <h2 className="text-black text-3xl md:text-5xl font-bold tracking-wider mb-4">TRAINING FOR <span className="text-green-400">ANY AGE</span></h2>
          <div className="w-16 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-slate-500 text-lg mt-2 max-w-2xl mx-auto">
            Master professional tennis techniques and strategies designed for players of all skill levels and ages
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300 transform hover:scale-105">
              <Play size={18} className="mr-2" />
              Start Training
            </button>
            <button className="bg-black border border-black hover:border-green-400 hover:text-green-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Features Grid and Tennis Player - Animated */}
        <div 
          ref={featuresRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 my-16 transform transition-all duration-1000 ${
            isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          /* Left Features */
          <div className="space-y-12">
            {[
              {
                icon: <Award className="text-green-400" size={28} />,
                title: (
                  <>
                    <span className="text-green-400">Premium Training Grounds </span>
                  </>
                ),
                description: (
                  <span className="text-slate-600">
                    Access state-of-the-art courts and facilities designed for optimal performance and skill development
                  </span>
                )
              },
              {
                icon: <Calendar className="text-green-400" size={28} />,
                title: (
                  <>
                    <span className="text-green-400">Flexible Scheduling </span>
                  </>
                ),
                description: (
                  <span className="text-stone-700">
                    Choose from morning, afternoon, or evening sessions to fit your busy lifestyle and commitments
                  </span>
                )
              },
              {
                icon: <Users className="text-green-400" size={28} />,
                title: (
                  <>
                    <span className="text-green-400">10 Professional Courts </span>
                  </>
                ),
                description: (
                  <span className="text-stone-700">
                    Never wait for court time with our expansive facility featuring 10 professional-grade tennis courts
                  </span>
                )
              }
            ].map((feature, index) => (
              <FeatureCard
                key={`left-${index}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.2}
                isVisible={isVisible.features}
              />
            ))}
          </div>

          {/* Center - Tennis Player Image with hover effect */}
          <div className="flex justify-center items-center my-8 md:my-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={founder}
                  alt="Tennis player with racket"
                  className="h-auto max-h-96 object-contain transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-white text-lg font-medium pb-4">Professional Training</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Features */}
          <div className="space-y-12">
            {[
              {
                icon: <Award className="text-green-400" size={28} />,
                title: "Expert Coaches",
                description: "Learn from certified instructors with competitive experience and proven teaching methodologies"
              },
              {
                icon: <Dumbbell className="text-green-400" size={28} />,
                title: "Pro Tennis Shop",
                description: "Access quality equipment, apparel, and accessories from leading brands at our on-site pro shop"
              },
              {
                icon: <Heart className="text-green-400" size={28} />,
                title: "Fitness Center",
                description: "Complement your tennis training with specialized fitness programs designed for tennis athletes"
              }
            ].map((feature, index) => (
              <FeatureCard
                key={`right-${index}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isRightAligned={true}
                delay={index * 0.2}
                isVisible={isVisible.features}
              />
            ))}
          </div>
        </div>
        
        {/* Tennis Video Section with Animation */}
        <div 
          ref={videoRef}
          className={`my-20 transform transition-all duration-1000 ${
            isVisible.video ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-10">
            <h3 className=" text-black text-2xl md:text-3xl font-bold mb-4">SEE OUR <span className="text-green-400">FACILITIES</span></h3>
            <div className="w-16 h-1 bg-green-400 mx-auto mb-6"></div>
            <p className="text-stone-500 max-w-2xl mx-auto">Experience our world-class tennis facilities and get a glimpse of what training with us looks like</p>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/YqgcykDGB2A"
                title="Tennis Court/Shoes Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Satisfaction Counter with Animation */}
          <div 
            ref={counterRef}
            className={`text-center py-20 transform transition-all duration-1000 ${
              isVisible.counter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <StatCounter number={counter} label={<span className="text-black">SATISFIED STUDENTS</span>} />
              <StatCounter number={Math.floor(counter/10)} label={<span className="text-black">CERTIFIED COACHES</span>} />
              <StatCounter number={Math.floor(counter/40)} label={<span className="text-black">TENNIS COURTS</span>} />
            </div>
            
            <p className="text-slate-600 mt-6 text-lg max-w-3xl mx-auto">
              Experience world-class tennis instruction with <span className="text-green-400 font-semibold">highly-qualified trainers</span> specializing in all aspects of the game. Our <span className="text-blue-400 font-semibold">proven methodology</span> has transformed beginners into competitive players and helped advanced players reach <span className="text-yellow-400 font-semibold">new heights</span>.
            </p>
          </div>
          
          {/* Testimonials Section */}
        <div 
          ref={testimonialRef}
          className={`pb-24 transform transition-all duration-1000 ${
            isVisible.testimonial ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className=" text-black text-2xl md:text-3xl font-bold mb-4">WHAT OUR <span className="text-green-400">STUDENTS SAY</span></h3>
            <div className="w-16 h-1 bg-green-400 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "Advanced Student",
                quote: "The personalized coaching and world-class facilities have completely transformed my game. I've improved more in 6 months here than in years elsewhere."
              },
              {
                name: "James Wilson",
                role: "Intermediate Player",
                quote: "The coaches understand how to adapt their teaching style to different learning preferences. My technique has improved dramatically."
              },
              {
                name: "Sarah Johnson",
                role: "Beginner Student",
                quote: "I started as a complete beginner and was nervous, but the supportive environment made learning enjoyable. Now I play weekly matches!"
              }
            ].map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
                delay={index * 0.2}
                isVisible={isVisible.testimonial}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-3 rounded-lg font-medium flex items-center mx-auto transition-all duration-300">
              View All Testimonials
              <ChevronRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component with Animation
function FeatureCard({ icon, title, description, isRightAligned = false, delay = 0, isVisible }) {
  return (
    <div 
      className={`flex gap-4 transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isRightAligned ? 'flex-row-reverse text-right' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-green-500 hover:bg-opacity-20">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

// Stat Counter Component
function StatCounter({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-bold text-green-400 mb-2">{number}+</span>
      <span className="text-xl font-bold tracking-wider">{label}</span>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, role, quote, delay = 0, isVisible }) {
  return (
    <div 
      className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } hover:scale-105`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4">
        <img
          src="https://i.pinimg.com/736x/09/7a/c8/097ac85eb83b9b019e21d10b990b7432.jpg"
          alt={`${name} testimonial`}
          className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
        />
        <div className="ml-4">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-green-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{quote}"</p>
    </div>
  );
}