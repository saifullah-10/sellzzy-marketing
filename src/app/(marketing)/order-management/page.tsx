import OrderHero from "@/components/ui/order-management/order-hero";
import OrderInsights from "@/components/ui/order-management/order-insights";
import CreateOrders from "@/components/ui/order-management/create-orders";
import CreateCustomer from "@/components/ui/order-management/create-customer";

const OrderManagementPage: React.FC = () => {
  return (
    <>
      <OrderHero />
      <OrderInsights />
      <CreateOrders />
      <CreateCustomer />
    </>
  );
};

export default OrderManagementPage;