import StoreHero from "@/components/ui/store-optimization/store-hero";
import StoreConfiguration from "@/components/ui/store-optimization/store-configuration";
import CustomDomain from "@/components/ui/store-optimization/custom-domain";

const StoreOptimizationPage: React.FC = () => {
  return (
    <>
      <StoreHero />
      <StoreConfiguration />
      <CustomDomain />
    </>
  );
};

export default StoreOptimizationPage;