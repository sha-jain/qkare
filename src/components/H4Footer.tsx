import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4 px-14">

        {/* Logo Column */}
        <div className="flex flex-col mt-2">
          <div className="flex">
            <img 
              src="/qkare_logo6-m2.png" 
              alt="Logo" 
              className="max-h-16 w-auto object-contain" // Maintain aspect ratio
            />
          </div>
        </div>

        {/* Key Resources */}
        <div className="flex flex-col items-start justify-start">
          <h3 className="font-bold text-xl">Key Resources</h3>
          <ul className="mt-2 space-y-2 text-base">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>


        {/* Get in Touch */}
        <div className="flex flex-col items-start justify-start">
          <h3 className="font-bold text-xl">Connect with Us</h3>
          <ul className="mt-2 space-y-2 text-base">
            <li><span className="text-gray-400">Email:</span> <a href="mailto:info@qkare.life" className="text-gray-400 hover:text-white">info@qkare.life</a></li>
            <li><span className="text-gray-400">Website:</span> <a href="http://www.qkare.life" className="text-gray-400 hover:text-white">www.qkare.life</a></li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">[LinkedIn Icon]</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;