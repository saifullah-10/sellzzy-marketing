import Image from "next/image";
import Link from "next/link";

const IntegrationHero = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10">
      <div className="lg:px-0 md:px-0 px-[5%] lg:space-y-10 md:space-y-8 space-y-6">
        <div className="lg:space-y-6 md:space-y-4 space-y-2">
          <div className="flex justify-center items-center">
            <p className="md:text-lg text-base border border-[#B6E9FF] bg-[#EFFAFF] text-[#0071AB] rounded-3xl px-4 py-2">
              Integration Made Easy
            </p>
          </div>
          <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
            Integration
          </h2>
          <p className="text-[#464F5E] md:text-[18px] text-sm text-center">
            Connect your digital store with powerful third-party tools and services to streamline your business operations. Our seamless integration platform supports popular payment gateways, marketing tools, analytics platforms, and more, helping you create a unified ecosystem that grows with your business needs.
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-5">
          <Link href="https://www.sellzzy.com/admin/onboarding/?request_type=signup" className="bg-[#00B0F4] text-center hover:no-underline text-white rounded-xl border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-all duration-500 hover:shadow-[0_0_0_2px_rgba(44,201,255,0.4)] hover:scale-[1.01] md:w-auto w-full">
            Start For free
          </Link>
          <button className="bg-white text-center hover:no-underline hover:text-[#00B0F4] text-[#00B0F4] rounded-[12px] border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-transform duration-200 hover:scale-[1.01] md:w-auto w-full focus:outline-none">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="hidden lg:flex justify-center items-center">
          <Image src="./integration/integration-hero-lg.svg" alt="Integration hero" width={800} height={400} priority className="w-full h-full" />
        </div>
        <div className="lg:hidden md:flex hidden justify-center items-center">
          <Image src="./integration/integration-hero-md.svg" alt="Integration hero" width={600} height={300} />
        </div>
        <div className="lg:hidden md:hidden w-full flex justify-center items-center">
          <Image src="./integration/integration-hero-sm.svg" alt="Integration hero" width={400} height={200} />
        </div>
      </div>
    </section>
  );
};

export default IntegrationHero;