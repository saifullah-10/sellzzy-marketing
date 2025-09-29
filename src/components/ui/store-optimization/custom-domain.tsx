import Image from "next/image";

const CustomDomain = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
      <div className="md:space-y-10 space-y-6">
        <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
          Custom Domain
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:w-[80%] w-full text-center">
            Establish your brand identity with a custom domain that reflects your business. Our seamless domain integration process allows you to use your own domain name, building trust with customers and enhancing your professional presence. Enjoy automatic SSL certificates, easy DNS management, and full control over your online brand identity.
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFB] w-full flex justify-center items-center flex-grow">
        <div className="h-full object-contain lg:block hidden">
          <Image src="/store-optimization/store-optimization-custom-lg.svg" alt="Custom domain" width={1200} height={600} />
        </div>
        <div className="h-full object-contain lg:hidden md:block hidden">
          <Image src="/store-optimization/store-optimization-custom-md.svg" alt="Custom domain" width={800} height={400} />
        </div>
        <div className="h-full object-contain lg:hidden md:hidden block">
          <Image src="/store-optimization/store-optimization-custom-sm.svg" alt="Custom domain" width={400} height={300} />
        </div>
      </div>
    </section>
  );
};

export default CustomDomain;