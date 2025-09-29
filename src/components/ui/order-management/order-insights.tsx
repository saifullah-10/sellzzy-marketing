import Image from "next/image";

const OrderInsights = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
      <div className="md:space-y-10 space-y-6">
        <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
          View All Insights on Your Order
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:w-[80%] w-full text-center">
            Get complete visibility into every order — from payment history to customer info. Sellzzy helps you track, manage, and analyze orders with ease, so you can deliver a seamless buying experience.
          </p>
        </div>
      </div>

      <div>
        <div className="flex lg:flex-row flex-col gap-4 items-stretch mb-4">
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[50%] w-full flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Payment History</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Ensure financial transparency with a detailed log of every transaction. Track payments, refunds, and payouts securely, all in one place.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/order-management/order-management-Insights-payment.svg" alt="Payment history" width={300} height={200} className="w-full h-full" />
            </div>
          </div>
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[50%] w-full flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Digital Order Risk</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Protect your business with built-in fraud detection and risk alerts. Identify and resolve suspicious transactions before they affect your store.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/order-management/order-management-Insights-digital.svg" alt="Digital order risk" width={300} height={200} className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4 items-stretch">
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[35%] w-full flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Performance Insights</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Turn order data into actionable insights. Analyze trends, monitor customer behavior, and make smarter decisions to boost revenue.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/order-management/order-management-Insights-performence.svg" alt="Performance insights" width={250} height={200} className="w-full h-full" />
            </div>
          </div>
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[65%] w-full flex flex-col items-center space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Order Notes & Comments</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Collaborate with your team using internal notes. Capture order instructions, customer requests, or service updates to prevent miscommunication and keep customers happy.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/order-management/order-management-Insights-order.svg" alt="Order notes" width={400} height={200} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInsights;