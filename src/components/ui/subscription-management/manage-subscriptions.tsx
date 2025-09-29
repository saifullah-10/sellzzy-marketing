import Image from "next/image";

const ManageSubscriptions = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
      <div className="md:space-y-10 space-y-6">
        <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
          Manage All Subscription
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:w-[80%] w-full text-center">
            Take complete control of your subscription business with comprehensive management tools. Monitor active subscriptions, track revenue, handle cancellations, and analyze customer behavior all from one centralized dashboard.
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFB] w-full flex justify-center items-center flex-grow">
        <div className="h-full object-contain lg:block hidden">
          <Image src="/subscription-management/subscription-management-subscriptios-lg.svg" alt="Manage subscriptions" width={1200} height={600} />
        </div>
        <div className="h-full object-contain lg:hidden md:block hidden">
          <Image src="/subscription-management/subscription-management-subscriptios-md.svg" alt="Manage subscriptions" width={800} height={400} />
        </div>
        <div className="h-full object-contain lg:hidden md:hidden block">
          <Image src="/subscription-management/subscription-management-subscriptios-sm.svg" alt="Manage subscriptions" width={400} height={300} />
        </div>
      </div>
    </section>
  );
};

export default ManageSubscriptions;