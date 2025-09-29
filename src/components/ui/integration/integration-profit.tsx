import Image from "next/image";

const IntegrationProfit = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
      <div className="md:space-y-10 space-y-6">
        <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
          Seamless Integrations for Maximum Profit
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:w-[80%] w-full text-center">
            Unlock your business potential with intelligent integrations that automatically sync data, streamline workflows, and maximize revenue opportunities. Our platform connects with leading e-commerce tools, payment processors, and marketing platforms to create a powerful ecosystem that drives growth and profitability.
          </p>
        </div>
      </div>

      <div>
        <div className="flex lg:flex-row flex-col gap-4 items-stretch mb-4">
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[50%] flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">
                Easy Configuration
              </h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Set up integrations in minutes with our intuitive configuration wizard. No technical expertise required - simply connect your accounts and let our platform handle the complex setup automatically.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="./integration/integration-profit-easy.svg" alt="Easy configuration" width={300} height={200} className="w-full h-full" />
            </div>
          </div>
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[50%] w-full flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">
                Automated Inventory Sync
              </h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Keep your inventory perfectly synchronized across all platforms with real-time updates. Prevent overselling and maintain accurate stock levels automatically across multiple sales channels.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="./integration/integration-profit-automated.svg" alt="Automated inventory sync" width={300} height={200} className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4">
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 w-full flex flex-col space-y-2">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">
                Manage All Integration In One Place
              </h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Control all your integrations from a single, centralized dashboard. Monitor performance, manage settings, and troubleshoot issues across all connected platforms with ease and efficiency.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <div className="h-full object-contain lg:block hidden">
                <Image src="./integration/integration-profit-manage.svg" alt="Manage integrations" width={800} height={400} className="w-full h-full"/>
              </div>
              <div className="h-full object-contain lg:hidden md:block hidden">
                <Image src="./integration/integration-profit-manage-md.svg" alt="Manage integrations" width={600} height={300} />
              </div>
              <div className="h-full object-contain lg:hidden md:hidden block">
                <Image src="./integration/integration-profit-manage-sm.svg" alt="Manage integrations" width={400} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationProfit;