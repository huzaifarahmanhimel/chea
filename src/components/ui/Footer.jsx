import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Brand */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-light tracking-widest">ALOFTY</h1>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-lg tracking-wider uppercase">Contact</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <p>+1123456789</p>
              <p className="uppercase">chea@oodeinteractive.com</p>
              <p>82 RUE ROYALE, PARIS</p>
            </div>
          </div>

          {/* Open Hours */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-lg tracking-wider uppercase">Open Hours</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <p>WEEKDAYS: 10AM - 9PM</p>
              <p>SATURDAY: 10AM - 6PM</p>
              <p>SUNDAY CLOSED</p>
            </div>
          </div>
        </div>

        {/* Newsletter and Social Media */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Newsletter Input */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-lg tracking-wider uppercase">Contact</h2>
            <div className="w-full">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your e-mail"
                  className="w-full bg-transparent border-b border-white py-2 pr-10 text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start md:justify-end items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <span className="text-sm">Fb</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <span className="text-sm">Ln</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">Behance</span>
              <span className="text-sm">Be</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <span className="text-sm">Ig</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}