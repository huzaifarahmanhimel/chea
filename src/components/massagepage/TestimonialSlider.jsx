import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      occupation: "Student",
      rating: 5,
      text: "I recently had the Brazilian Lymphatic Drainage service, and it was an amazing experience! The therapist's expertise and warmth made me feel completely relaxed. After the session, I felt light and rejuvenated, with a noticeable boost in my energy levels. I would definitely recommend this service to others. Thank you!",
      date: "01/03",
      image: "https://i.pinimg.com/736x/9a/a0/bc/9aa0bc99645d66f1949ddefa3f700d0f.jpg"  // First placeholder image
    },
    {
      id: 2,
      name: "Emily Johnson",
      occupation: "Marketing Executive",
      rating: 5,
      text: "The prenatal massage was exactly what I needed during my third trimester. The therapist was attentive to my needs and made sure I was comfortable throughout. The relief I felt afterward was incredible - my back pain significantly reduced and I slept better that night than I had in weeks!",
      date: "12/15",
      image: "https://i.pinimg.com/736x/76/53/16/765316b12b380d310f0aa4c35b80eb4c.jpg"  // Second placeholder image
    },
    {
      id: 3,
      name: "Michelle Rodriguez",
      occupation: "Fitness Instructor",
      rating: 5,
      text: "As someone who puts my body through intense workouts daily, the sports recovery massage was transformative. The therapist targeted specific areas of tension with perfect pressure. I've noticed faster recovery times and improved mobility since making these massages part of my wellness routine.",
      date: "02/20",
      image: "https://i.pinimg.com/736x/01/00/d1/0100d18d2381d9e968cc1ddfeeb7bc50.jpg"  // Third placeholder image
    },
    {
      id: 4,
      name: "Lisa Chen",
      occupation: "Software Developer",
      rating: 5,
      text: "After hours of sitting at my desk coding, the neck and shoulder focused massage was exactly what I needed. The therapist's knowledge of trigger points was impressive. I felt the tension melting away, and the stretching techniques they taught me have been helping me maintain the benefits between sessions.",
      date: "03/07",
      image: "https://i.pinimg.com/736x/ab/65/21/ab65217dcf96b85fe05f2204294f2d1c.jpg"  // Fourth placeholder image
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hear from Our Satisfied Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our specialized massages have transformed the lives of women just like you.
          </p>
        </div>

        <div className="relative">
          {/* Desktop version */}
          <div className="hidden md:block">
            <div className="flex items-center">
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div className="mx-auto w-full max-w-4xl overflow-hidden">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8">
                    <div className="flex mb-3">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl font-medium text-gray-900 mb-6">
                      "{testimonials[currentSlide].text}"
                    </blockquote>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-semibold text-gray-900">
                          {testimonials[currentSlide].name}
                        </p>
                        <p className="text-gray-600">{testimonials[currentSlide].occupation}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500">{testimonials[currentSlide].date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="bg-gray-200 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                      <img
                        src={testimonials[currentSlide].image}
                        alt={`${testimonials[currentSlide].name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile version */}
          <div className="md:hidden">
            <div className="flex mb-3 justify-center">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-48 flex items-center justify-center mb-4">
              <img
                src={testimonials[currentSlide].image}
                alt={`${testimonials[currentSlide].name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="text-lg font-medium text-gray-900 mb-4">
              "{testimonials[currentSlide].text}"
            </blockquote>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-sm text-gray-600">{testimonials[currentSlide].occupation}</p>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500">{testimonials[currentSlide].date}</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevSlide}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination indicators (desktop) */}
        <div className="hidden md:flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}