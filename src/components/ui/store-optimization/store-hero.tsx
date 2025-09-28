import Image from "next/image";

const StoreHero = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 px-[5%] ">
      <div className="lg:space-y-10 md:space-y-8 space-y-6">
        <div className="lg:space-y-6 md:space-y-4 space-y-2">
          <div className="flex justify-center items-center">
            <p className="md:text-lg text-base border border-[#B6E9FF] bg-[#EFFAFF] text-[#0071AB] rounded-3xl px-3 pt-1 pb-2">
              Integration Made Easy
            </p>
          </div>
          <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
            Store Optimization
          </h2>
          <p className="text-[#464F5E] md:text-[18px] text-sm text-center">
            Maximize your digital store's performance with our comprehensive optimization tools. Enhance customer experience, boost conversion rates, and streamline your sales process with advanced analytics and automated features designed for digital commerce success.
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-5">
          <a href="#" className="bg-[#00B0F4] text-center hover:no-underline text-white rounded-xl border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-shadow hover:shadow-[0_0_0_2px_rgba(44,201,255,0.4)] transition-transform duration-500 hover:scale-[1.01] md:w-auto w-full">
            Start For free
          </a>
          <button className="bg-white text-center hover:no-underline hover:text-[#00B0F4] text-[#00B0F4] rounded-[12px] border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-transform duration-200 hover:scale-[1.01] md:w-auto w-full focus:outline-none">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="hidden lg:flex justify-center items-center">
          <Image src="/store-optimization/store-optimization-hero-lg.webp" alt="Store optimization" width={1200} height={600} priority />
        </div>
        <div className="lg:hidden md:flex hidden justify-center items-center">
          <Image src="/store-optimization/store-optimization-hero-md.webp" alt="Store optimization" width={800} height={400} className="w-full h-full" />
        </div>
        <div className="lg:hidden md:hidden w-full flex justify-center items-center">
          <Image src="/store-optimization/store-optimization-hero-sm.webp" alt="Store optimization" width={400} height={300} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default StoreHero;