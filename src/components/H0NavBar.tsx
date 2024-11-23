import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-2 py-4 bg-gray-100 shadow-md w-full">
      <div className="text-blue-600 text-2xl font-bold">QKARE</div>
      <ul className="flex space-x-6 text-gray-700">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/about-us" className="hover:text-blue-600">About Us</a></li>
        <li><a href="/our-services" className="hover:text-blue-600">Our Services</a></li>
        <li><a href="/our-expertise" className="hover:text-blue-600">Our Expertise</a></li>
        <li><a href="/contact-us" className="hover:text-blue-600">Contact Us</a></li>
      </ul>
      <div className="flex items-center text-blue-600">
        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-9m0 0l9 9M4 10v10h16V10" />
        </svg>
        <span>+1 347 44 375</span>
      </div>
    </nav>
  );
};

export default Navbar;