import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-12 lg:px-52 mt-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <p className="text-gray-700 text-lg mb-4">
      At QKare, we bring together a collective expertise of over 40+ years in end-to-end Revenue Cycle Management (RCM), 
      driven by a passion for excellence and a commitment to delivering results. Our mission is to lead with innovation, 
      dedication, and a customer-centric approach, ensuring that every solution we provide aligns with the unique needs of our clients.
      </p>
      <p className="text-gray-700 text-lg mb-4">
      Our philosophy revolves around simplifying complexities—innovating, automating, strategizing, and 
      executing with precision to deliver seamless RCM solutions under one roof. Trust, credibility, and 
      goodwill are the pillars of our success, enabling us to build lasting relationships with healthcare providers across geographies.
      </p>
      <p className="text-gray-700 text-lg mb-16">
      At QKare, we are dedicated to empowering healthcare professionals by optimizing revenue processes, 
      reducing administrative burdens, and enhancing operational efficiency. This allows our clients to focus on what truly 
      matters—delivering exceptional care to their patients. Together, we aim to redefine healthcare management 
      through expertise, trust, and unwavering commitment to excellence.
      </p>

      {/* Icon Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-24 mb-10 lg:px-40">
        <div className="text-center">
          <img src="/business3_m.png" alt="Trust" className="w-auto mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Trust</h3>
        </div>
        <div className="text-center">
          <img src="/idea_m.png" alt="Innovation" className="w-auto mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
        </div>
        <div className="text-center">
          <img src="/ai_generated_m.png" alt="Efficiency" className="w-auto mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Efficiency</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;