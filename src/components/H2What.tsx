import Head from 'next/head';

const services = [
  {
    title: "1. Patient Data",
    description: "Services Include Scheduling, Elig. Verification / Prior Auth, Patient Demo, EDI with hospital system, EMR / PMS",
    icon: "🩺", // Placeholder icon, replace with actual SVG/icon
  },
  {
    title: "2. Coding & Compliance",
    description: "Services Include Coding / Coding Audits / EMR Coding, Coding Compliance Audits",
    icon: "📅",
  },
  {
    title: "3. Claims",
    description: "Charge Entry / Audits, Insurance Billing, Transmission and Rejections, edit checks and validations",
    icon: "📋",
  },
  {
    title: "4. Payment Handling",
    description: "Manual and ERA posting, Payment reconciliation, Refunds and Credit Balance, Unclaimed funds and Offsets",
    icon: "🔄",
  },
  {
    title: "5. Reimbursements",
    description: "Denials and Appeals, No response, unpaid and low paid claims resolution, AR follow-up",
    icon: "⏰",
  },
];

const H2What = () => {
  return (
    <>
      <Head>
        <title>QKare - What We Do</title>
      </Head>
      <main className="pt-16 pb-28 w-full"
        style={{
          backgroundImage: "url('/drew.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-20 ">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">What We Do?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
            {services.map((service, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-start">
                <span className="text-3xl mr-4">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default H2What;