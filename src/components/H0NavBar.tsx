"use client"
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md w-full">
    
      <div className="flex-shrink-0">
        <Link href="/">
          <img
            src="/qkare-ultimate2.png"
            alt="QKARE Logo"
            className="h-24"
          />
        </Link>
      </div>

    
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

     
      <ul
        className={`
          transition-all duration-300 ease-in-out
          absolute md:static top-full left-0 md:top-auto md:left-auto
          w-full md:w-auto
          bg-gray-100 md:bg-transparent
          border-t border-gray-300 md:border-0
          ${
            isOpen
              ? "opacity-100 z-50 block"
              : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
          }
          md:flex md:space-x-20 md:items-center md:justify-center text-gray-900 text-lg
        `}
      >
        <li className="py-2 px-4 border-b border-gray-300 md:border-0">
          <Link href="/" className="block hover:text-blue-600" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li className="py-2 px-4 border-b border-gray-300 md:border-0">
          <Link href="/about-us" className="block hover:text-blue-600" onClick={handleLinkClick}>
            About Us
          </Link>
        </li>
        <li className="py-2 px-4 border-b border-gray-300 md:border-0">
          <Link href="/our-services" className="block hover:text-blue-600" onClick={handleLinkClick}>
            Services
          </Link>
        </li>
        <li className="py-2 px-4">
          <Link href="/contact-us" className="block hover:text-blue-600" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
