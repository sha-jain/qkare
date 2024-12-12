import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-2 py-2 bg-gray-100 shadow-md w-full">
      <div className="ml-0">
        <a href="/">
          <img src="/qkare_logo6b-modified.png" alt="QKARE Logo" className="h-12" />
        </a>
      </div>
      <ul className="flex-grow flex justify-center space-x-20 text-gray-900 text-lg">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="/about-us" className="hover:text-blue-600">About Us</a></li>
        <li><a href="/our-services" className="hover:text-blue-600">Services</a></li>
        <li><a href="/contact-us" className="hover:text-blue-600">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;