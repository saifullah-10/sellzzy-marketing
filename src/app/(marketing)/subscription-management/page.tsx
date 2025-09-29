import SubscriptionHero from "@/components/ui/subscription-management/subscription-hero";
import SubscriptionPlans from "@/components/ui/subscription-management/subscription-plans";
import ManageSubscriptions from "@/components/ui/subscription-management/manage-subscriptions";

const SubscriptionManagementPage: React.FC = () => {
  return (
    <>
      <SubscriptionHero />
      <SubscriptionPlans />
      <ManageSubscriptions />
    </>
  );
};

export default SubscriptionManagementPage;