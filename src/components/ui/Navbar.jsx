import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left section: Empty space for balance */}
            <div className="w-6 md:w-20"></div>

            {/* Center section: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 transition-all pb-1">HOME</a>
              <a href="MassageParlour" className="font-medium text-orange-300 hover:text-white border-b-2 border-transparent hover:border-orange-300 transition-all pb-1">MASSAGE PARLOUR</a>
              <a href="DancingPages" className="font-medium text-orange-300 hover:text-white border-b-2 border-transparent hover:border-orange-300 transition-all pb-1">WEAK & SHAKE</a>

              {/* Logo */}
              <a href="#" className=" text-orange-200 text-3xl font-serif tracking-widest">CHEA</a>

              <a href="TennisPage" className="font-medium text-orange-300 hover:text-white border-b-2 border-transparent hover:border-orange-300 transition-all pb-1">TENNIS</a>
              <a href="FoodBusiness" className="font-medium text-green-600 hover:text-black border-b-2 border-transparent hover:border-emerald-950 transition-all pb-1">HEALTHY FOOD</a>
              <a href="contactus" className="font-medium text-orange-300 hover:text-white border-b-2 border-transparent hover:border-orange-300 transition-all pb-1">CONTACT US</a>
            </div>

            {/* Center logo for mobile */}
            <div className="md:hidden flex justify-center flex-1">
              <a href="#" className="text-2xl font-serif tracking-widest">CHEA</a>
            </div>

            {/* Right section: Menu button (mobile) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Right section: Hamburger indicator (desktop) */}
            <div className="hidden md:flex items-center">
              <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <div className="w-6 flex flex-col items-end space-y-1">
                  <span className="block h-0.5 w-6 bg-gray-600"></span>
                  <span className="block h-0.5 w-4 bg-gray-600"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className={`w-full h-px bg-gray-200 ${scrolled ? 'opacity-100' : 'opacity-70'}`}></div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
          <div className="px-2 pt-2 pb-4 space-y-3">
            <a href="/" className="block px-3 py-2 text-base font-medium text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900">HOME</a>
            <a href="MassageParlour" className="block px-3 py-2 text-base font-medium text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900">MASSAGE PARLOUR</a>
            <a href="DancingPages" className="block px-3 py-2 text-base font-medium text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900">WEAK & SHAKE</a>
            <a href="TennisPage" className="block px-3 py-2 text-base font-medium text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900">TENNIS</a>
            <a href="FoodBusiness" className="block px-3 py-2 text-base font-medium text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900">HEALTHY FOOD</a>
            <a href="contactus" className="block px-3 py-2 text-base font-medium text-center text-gray-700 hover:bg-gray-100 hover:text-gray-900">CONTACT US</a>
          </div>
        </div>
      </nav>
    </div>
  );
}