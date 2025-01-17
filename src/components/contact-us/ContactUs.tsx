"use client"; // Add this line to make the component a Client Component

import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwlEAkuGps0ZRh7yRULCUPF4HZbiorF9WLv_w56_X6Q-7Vt_paz11uJZu9jdS4SaG0/exec";
    const form = document.forms.namedItem("submit-to-google-sheet");

    if (form) {
      form.addEventListener("submit", (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => console.log("Success!", response))
          .catch((error) => console.error("Error!", error.message));
      });
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", () => {});
      }
    };
  }, []);

  return (
    <div className="bg-gray-150 min-h-screen w-full flex flex-col items-center justify-center px-4 py-14">
      {/* Title Section */}
      <div className="w-full max-w-7xl mx-auto mb-8 px-8 mt-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-4 text-left">
          Connect With Us
        </h1>
        <p className="text-gray-600 text-left max-w-xl text-lg">
          We would love to respond to your queries and help you succeed.
        </p>
        <p className="text-gray-600 text-left max-w-xl text-lg">
          Feel free to get in touch with us.
        </p>
      </div>

      {/* Form and Contact Info Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8">
        {/* Contact Form */}
        <div>
          <form name="submit-to-google-sheet" className="space-y-4 mb-6 px-6">
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-base py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="Company Name"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-base py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="Email Address"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-base py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-base py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="Message"
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-base py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-6 rounded-sm font-semibold hover:bg-red-600"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8 text-lg">
          <div className="flex items-center space-x-6">
            <div className="text-blue-500">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Address :</h4>
              <p className="text-gray-600">
                No. 147/2, No. 9, Kasaba Hobli, Bengaluru, KA, 560077
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-blue-500">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email :</h4>
              <p className="text-gray-600">info@qkare.life</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-blue-500">
              <i className="fas fa-globe text-2xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Website :</h4>
              <p className="text-gray-600">www.qkare.life</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
