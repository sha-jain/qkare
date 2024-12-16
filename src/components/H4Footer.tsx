import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-14">
        
        {/* Logo Column */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/qkare-white.png" 
            alt="Logo" 
            className="max-h-24  w-auto object-contain mb-4 md:mb-0"
          />
        </div>

        {/* Key Resources */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-xl mb-2">Key Resources</h3>
          <ul className="space-y-2 text-base text-center md:text-left">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/our-services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold text-xl mb-2">Connect with Us</h3>
          <ul className="space-y-2 text-base text-center md:text-left">
            <li>
              <span className="text-gray-400">Email:</span>{' '}
              <a href="mailto:info@qkare.life" className="text-gray-400 hover:text-white">info@qkare.life</a>
            </li>
            <li>
              <span className="text-gray-400">Website:</span>{' '}
              <a href="http://www.qkare.life" className="text-gray-400 hover:text-white">www.qkare.life</a>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4 justify-center md:justify-start">
            <Link href="#" className="text-gray-400 hover:text-white"> <FaLinkedin className ="h-8 w-8"/></Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
