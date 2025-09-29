const PricingHero = () => {
  return (
    <section className="max-w-[1064px] mx-auto lg:space-y-6 md:space-y-4 space-y-2 md:mb-10 mb-5 lg:px-0 md:px-0 px-[5%]">
      <div className="flex justify-center items-center">
        <p className="md:text-lg text-base border border-[#B6E9FF] bg-[#EFFAFF] text-[#0071AB] rounded-3xl px-3 py-2">
          Affordable Pricing
        </p>
      </div>
      <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
        Our Pricing
      </h2>
      <p className="text-[#464F5E] md:text-[18px] text-sm text-center md:w-[70%] w-full mx-auto">
        Start your 14-day free trial today - no credit card needed. Our affordable plans cater to everyone from solo to large teams. Experience the flexibility and cancel anytime.
      </p>
    </section>
  );
};

export default PricingHero;