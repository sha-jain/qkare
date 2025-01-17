import React from 'react';

const Services = () => {
  const services = [
    {
      title: "A/R Management",
      description:
        "Our team prioritizes high-value claims, reduces Days in AR, and resolves claim discrepancies to maximize revenue recovery.",
      image: "/services/a_r_man_m.jpg",
    },
    {
      title: "Authorization",
      description:
        "We initiate and follow up on pre-authorizations with payers, ensuring seamless service delivery and preventing revenue delays.",
      image: "/services/authorization.jpg",
    },
    {
      title: "Benefits Verification",
      description:
        "We validate patient benefits and deductible balances to ensure accurate and timely billing.",
      image: "/services/ben_ver_m.png",
    },
    {
      title: "Charge Posting",
      description:
        "We meticulously scrub claims during charge posting to optimize first-time approvals and reduce denials.",
      image: "/services/char_pos_m.jpg",
    },
    {
      title: "Credentialing",
      description:
        "Our experts handle healthcare insurance enrollment and credentialing, ensuring timely approval while safeguarding provider data.",
      image: "/services/creden_m.jpg",
    },
    {
      title: "Demographic Data Entry and Verification",
      description:
        "We enter and verify new patient demographic data into EMR and PMS systems with precision to ensure completeness and accuracy.",
      image: "/services/dem_ver_m.jpg",
    },
    {
      title: "Eligibility Verification",
      description:
        "We verify patients' current insurance eligibility, update their records, and flag potential issues before services are rendered.",
      image: "/services/elig_ver_m.jpg",
    },
    {
      title: "NPI Registry",
      description:
        "We assist physicians in obtaining NPIs to prevent cash flow disruptions and ensure operational efficiency.",
      image: "/services/npi_regis_m.jpg",
    },
    {
      title: "Patient Enrollment",
      description:
        "Our team assists practices in enrolling underinsured and uninsured patients into foundation and PAP support programs efficiently.",
      image: "/services/pat_enrol_m.png",
    },
    {
      title: "Payment Posting",
      description:
        "We promptly post insurance payments, reconcile deposits, and ensure patient billing is accurate, clear, and timely.",
      image: "/services/pay_pos.jpg",
    },
    {
      title: "Reporting",
      description:
        "We provide tailored performance reports that align with each client’s specific needs.",
      image: "/services/repor_m.png",
    },
      
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 mt-4">Our Services</h1>
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