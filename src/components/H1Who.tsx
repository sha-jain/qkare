
import Head from 'next/head';
import StyledHeader from './StyledComponents';

const HIWho = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>QKare</title>
        <meta name="description" content="Medical billing and coding solutions tailored to maximize ROI." />
      </Head>

      {/* Header Section */}
      <StyledHeader>
        {/* Text Container */}
        <div className="text-container w-full max-w-xs sm:max-w-sm md:max-w-lg ml-5 sm:ml-10 md:ml-20 bg-white/80 p-6 sm:p-8 rounded-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            We are QKare!
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 md:mb-14">
            Your Success Driven Partner.
          </h2>
          <p className="text-base sm:text-lg">
            We are a comprehensive medical billing and coding service provider,
            delivering end-to-end RCM solutions that ensure accurate claims,
            efficient payments, and enhanced financial performance, empowering
            you to focus on exceptional patient care and maximize ROI.
          </p>
        </div>
      </StyledHeader>
    </>
  );
};

export default HIWho;