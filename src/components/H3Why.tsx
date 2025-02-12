export default function H3Why() {
  return (
    <div
      className="bg-[url('/space.jpg')] bg-cover bg-center text-white pt-16 pb-28 w-full"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-40 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Why QKare?</h2>
        <div className="grid md:grid-cols-3 gap-y-12 gap-x-10">
          {content.map((item) => (
            <div key={item.id} className="bg-white/80 text-black rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-base mb-3">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const content = [
  { id: 1, title: "1. Expert Team with Industry Experience", description: "With a team of highly skilled professionals, each specializing in different aspects of revenue cycle management (RCM), we bring a wealth of experience to streamline your medical billing and financial processes" },
  { id: 2, title: "2. Ensuring Accuracy and Efficiency", description: "Our expertise in medical coding enables us to deliver precise solutions, minimizing errors, preventing claim denials, and ensuring accurate reimbursements for the services you provide" },
  { id: 3, title: "3. Personalized Service", description: "As a focused, agile team, we offer a personalized approach tailored to the specific needs of your practice, delivering exceptional attention and customized solutions" },
  { id: 4, title: "4. Proven Results", description: "With our expertise and advanced technology, we streamline administrative processes, allowing you to focus on patient care while we optimize your revenue and financial efficiency" },
  { id: 5, title: "5. Data Security and HIPAA Compliance", description: "We prioritize the security and privacy of your data, adhering to industry standards and maintaining a robust HIPAA compliance program to ensure the full protection of sensitive information" },
];