import Head from 'next/head';

const HIWho = () => {

  return (
    <>
      <Head>
        <title>QKare</title>
        <meta name="description" content="Medical billing and coding solutions." />
      </Head>
      <header
        className="h-screen flex items-center justify-start w-full"
        style={{
          backgroundImage: "url('/Home3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text Container */}
        <div className="w-[480px] ml-20 text-left text-black p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-6">We are QKare!</h1>
          <h2 className="text-2xl mb-14">Your Success Driven Partner.</h2>
          <p className="text-lg">
          We are a comprehensive medical billing and coding service provider, 
          delivering end-to-end RCM solutions that ensure accurate claims, efficient payments, and enhanced financial performance, 
          empowering you to focus on exceptional patient care and maximize ROI.
          </p>
        </div>
      </header>
    </>
  );
};

export default HIWho;
