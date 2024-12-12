import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Eligibility Verification",
      description:
        "We verify patients' current insurance eligibility, update their records, and flag potential issues before services are rendered.",
      image: "/elig_ver.jpg",
    },
    {
      title: "Patient Enrollment",
      description:
        "Our team assists practices in enrolling underinsured and uninsured patients into foundation and PAP support programs efficiently.",
      image: "/pat_enrol.png",
    },
    {
      title: "Benefits Verification",
      description:
        "We validate patient benefits and deductible balances to ensure accurate and timely billing.",
      image: "/ben_ver.png",
    },
    {
      title: "Demographic Data Entry and Verification",
      description:
        "We enter and verify new patient demographic data into EMR and PMS systems with precision to ensure completeness and accuracy.",
      image: "/dem_ver.jpg",
    },
    {
      title: "Authorization",
      description:
        "We initiate and follow up on pre-authorizations with payers, ensuring seamless service delivery and preventing revenue delays.",
      image: "/authorization.jpg",
    },
    {
      title: "A/R Management",
      description:
        "Our team prioritizes high-value claims, reduces Days in AR, and resolves claim discrepancies to maximize revenue recovery.",
      image: "/a_r_man.jpg",
    },
    {
      title: "Charge Posting",
      description:
        "We meticulously scrub claims during charge posting to optimize first-time approvals and reduce denials.",
      image: "/char_pos.jpg",
    },
    {
      title: "Reporting",
      description:
        "We provide tailored performance reports that align with each client’s specific needs.",
      image: "/repor.png",
    },
    {
      title: "Payment Posting",
      description:
        "We promptly post insurance payments, reconcile deposits, and ensure patient billing is accurate, clear, and timely.",
      image: "/pay_pos.jpg",
    },
    {
      title: "Credentialing",
      description:
        "Our experts handle healthcare insurance enrollment and credentialing, ensuring timely approval while safeguarding provider data.",
      image: "/creden.jpg",
    },
    {
      title: "NPI Registry",
      description:
        "We assist physicians in obtaining NPIs to prevent cash flow disruptions and ensure operational efficiency.",
      image: "/regis.jpg",
    },
      
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-900 text-center mb-12 mt-4">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;