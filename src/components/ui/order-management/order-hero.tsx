import Image from "next/image";
import Link from "next/link";

const OrderHero = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-16 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 px-[5%]">
      <div className="lg:px-0 md:px-0 px-[5%]">
        <div className="lg:space-y-6 md:space-y-4 space-y-2 md:mb-10 mb-5">
          <div className="flex justify-center items-center">
            <p className="md:text-lg text-base border border-[#B6E9FF] bg-[#EFFAFF] text-[#0071AB] rounded-3xl px-4 py-2">
              Effortless Order Management
            </p>
          </div>
          <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
            Order Management
          </h2>
          <p className="text-[#464F5E] md:text-[18px] text-sm text-center md:w-[70%] w-full mx-auto">
            Start your 14-day free trial today—no credit card needed! Our affordable plans cater to everyone from solo users to large teams. Experience the flexibility and cancel anytime.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-5">
          <Link href="https://www.sellzzy.com/admin/onboarding/?request_type=signup" className="bg-[#00B0F4] text-center hover:no-underline text-white rounded-xl border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-all hover:shadow-[0_0_0_2px_rgba(44,201,255,0.4)] duration-500 hover:scale-[1.01] md:w-auto w-full">
            Start For free
          </Link>
          <button className="bg-white text-center text-[#00B0F4] hover:no-underline hover:text-[#00B0F4] rounded-[12px] border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-transform duration-200 hover:scale-[1.01] md:w-auto w-full focus:outline-none">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="hidden lg:flex justify-center items-center">
          <Image src="/order-management/order-management-hero-lg.svg" alt="Order management hero" width={800} height={400} priority className="w-full h-full" />
        </div>
        <div className="lg:hidden md:flex hidden justify-center items-center">
          <Image src="/order-management/order-management-hero-md.svg" alt="Order management hero" width={800} height={300} className="h-full" />
        </div>
        <div className="lg:hidden md:hidden w-full flex justify-center items-center">
          <Image src="/order-management/order-management-hero-sm.svg" alt="Order management hero" width={400} height={200} />
        </div>
      </div>
    </section>
  );
};

export default OrderHero;