import Head from 'next/head';

const HIWho = () => {

  return (
    <>
      <Head>
        <title>QKare</title>
        <meta name="description" content="Medical billing and coding solutions." />
      </Head>
      <header className=" h-screen flex items-center justify-center w-full"
        style={{
          backgroundImage: "url('/Home1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-5xl font-bold mb-4">We are QKare!</h1>
          <h2 className="text-2xl mb-6">Your Success Driven Partner.</h2>
          <p className="text-lg">
            We are a medical billing and coding service provider, covering end-to-end RCM services
            and achieving ROI through customized solutions.
          </p>
        </div>
      </header>

    </>
  );
};

export default HIWho;
