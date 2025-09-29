import PricingHero from "@/components/ui/pricing/pricing-hero";
import PricingCards from "@/components/ui/pricing/pricing-cards";
import ComparePlans from "@/components/ui/pricing/compare-plans";
import { getPricingData } from "@/lib/data/pricing";

export const revalidate = 3600; // Revalidate every hour

const SellzzyPricingPage = async () => {
  const plans = await getPricingData();

  return (
    <div className="mt-[120px] max-w-7xl mx-auto">
      <div className="space-y-[80px] ">
        <section><PricingHero /></section>
        <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:px-0 md:px-0 px-[5%]">
          <PricingCards plans={plans} />
        </section>
        <ComparePlans plans={plans} />
      </div>
    </div>
  );
};

export default SellzzyPricingPage;