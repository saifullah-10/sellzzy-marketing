import IntegrationHero from "@/components/ui/integration/integration-hero";
import IntegrationProfit from "@/components/ui/integration/integration-profit";
import CreateStorefront from "@/components/ui/integration/create-storefront";

const IntegrationPage: React.FC = () => {
  return (
    <>
      <IntegrationHero />
      <IntegrationProfit />
      <CreateStorefront />
    </>
  );
};

export default IntegrationPage;