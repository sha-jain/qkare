import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <div>
          <h3 className="font-bold text-lg">About Us</h3>
          <p className="mt-2 text-sm">
            The founders of QKare bring over 40 years of experience in end-to-end RCM.
            <a href="#" className="text-red-500"> Read more...</a>
          </p>
        </div>

 
        <div>
          <h3 className="font-bold text-lg">Useful Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Our Expertise</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-bold text-lg">Get In Touch</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Phone: +1 37 474 385</li>
            <li>Email: <a href="mailto:info@qkare.com" className="hover:text-gray-400">info@qkare.com</a></li>
            <li>Website: <a href="http://www.qkare.life" className="hover:text-gray-400">www.qkare.life</a></li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-gray-400">[FB Icon]</a>
            <a href="#" className="hover:text-gray-400">[LinkedIn Icon]</a>
            <a href="#" className="hover:text-gray-400">[Twitter Icon]</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;