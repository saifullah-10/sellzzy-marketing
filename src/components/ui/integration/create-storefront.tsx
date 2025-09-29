import Image from "next/image";

const CreateStorefront = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
      <div className="md:space-y-10 space-y-6">
        <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
          Create a Stunning Storefront with Sellzzy
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:w-[80%] w-full text-center">
            Build a professional, conversion-optimized storefront that showcases your digital products beautifully. With customizable templates, responsive design, and powerful features, create an online presence that drives sales and delights customers across all devices.
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFB] w-full flex justify-center items-center flex-grow">
        <div className="h-full object-contain lg:block hidden">
          <Image src="./integration/integration-create-lg.svg" alt="Create storefront" width={1200} height={600} />
        </div>
        <div className="h-full object-contain lg:hidden md:block hidden">
          <Image src="./integration/integration-create-md.svg" alt="Create storefront" width={800} height={400} />
        </div>
        <div className="h-full object-contain lg:hidden md:hidden block">
          <Image src="./integration/integration-create-sm.svg" alt="Create storefront" width={400} height={300} />
        </div>
      </div>
    </section>
  );
};

export default CreateStorefront;