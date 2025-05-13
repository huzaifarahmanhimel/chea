 import { useState, useEffect } from 'react';

export default function FoodHero() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative images */}
      <div className="absolute top-12 left-6 lg:left-20 w-24 h-24 lg:w-36 lg:h-36">
        <img src="https://i.pinimg.com/736x/99/0e/48/990e48c07716d0e66229ba46f0051d1b.jpg" alt="Salad bowl" className="w-full h-full object-cover rounded-full" />
      </div>
      
      <div className="absolute top-1/3 left-1/4 w-16 h-16">
        <img src="https://i.pinimg.com/736x/df/17/5a/df175a58e101d36e71a04d55d9ce82aa.jpg" alt="Broccoli" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute top-1/4 right-1/4 w-20 h-20">
        <img src="https://i.pinimg.com/736x/44/81/cd/4481cdf12a2a39bf2abf9e64141a4174.jpg" alt="Avocado" className="w-full h-full object-contain rounded-full bg-yellow-200" />
      </div>
      
      <div className="absolute top-1/2 right-12 lg:right-32 w-12 h-12">
        <img src="https://i.pinimg.com/736x/82/2d/d9/822dd979d623967f985bdd08d48665b3.jpg" alt="Tomato" className="w-full h-full object-contain rounded-full bg-red-400" />
      </div>
      
      <div className="absolute bottom-24 left-1/4 w-14 h-14">
        <img src="https://i.pinimg.com/736x/df/17/5a/df175a58e101d36e71a04d55d9ce82aa.jpg" alt="Corn" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute bottom-24 right-8 md:right-20 w-16 h-16">
        <img src="https://i.pinimg.com/736x/e4/19/db/e419dbfb189c957deb6ca39422cf962d.jpg" alt="Broccoli" className="w-full h-full object-contain" />
      </div>
      
      <div className="absolute bottom-36 sm:bottom-48 left-20 md:left-32 w-14 h-14">
        <img src="https://i.pinimg.com/736x/48/a4/d8/48a4d86bbff1197a7d98793f606cea63.jpg" alt="Egg" className="w-full h-full object-contain rounded-full bg-gray-100" />
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto pt-24 pb-12">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-medium text-green-600">
            Nourishing Your Body, Delighting Your Palate
          </h2>
          <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
            Discover NutriPlates Where<br />Health Meets Flavor!
          </h1>
          <div className="mt-2 flex justify-center">
            <div className="w-48 md:w-64 h-1 bg-green-500 rounded"></div>
          </div>
        </div>
        
        {/* Food Images */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute bottom-36 sm:bottom-48 left-20 md:left-32 w-14 h-14">
              <img src="https://i.pinimg.com/736x/f5/e2/f1/f5e2f1f533b76fb49c534d417c4c2f01.jpg" alt="Healthy bowl with protein" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <button className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-medium text-lg transition duration-300">
              Explore Meal Plans
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute bottom-36 sm:bottom-24 left-20 md:left-32 w-14 h-14">
              <img src="https://i.pinimg.com/736x/27/af/70/27af70640aae2396a1c30534b9c5a50f.jpg" alt="Fresh salad bowl" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
}