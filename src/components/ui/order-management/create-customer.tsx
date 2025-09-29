import Image from "next/image";

const CreateCustomer = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
      <div className="flex lg:flex-row flex-col items-center justify-center lg:space-y-0 md:space-y-10 space-y-4">
        <div className="lg:w-[50%] w-full lg:space-y-0 md:space-y-6 space-y-4">
          <div>
            <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] lg:block hidden">
              Create New Customer
            </h2>
            <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] lg:hidden block text-center">
              Create New Customer
            </h2>
          </div>
          <div className="lg:w-full md:w-[80%] w-full mx-auto">
            <p className="w-full lg:block hidden">
              Manage your customer base with ease. Add new customers manually or automatically through orders, and build long-lasting relationships with a clean, centralized database.
            </p>
            <p className="w-full text-center lg:hidden block">
              Manage your customer base with ease. Add new customers manually or automatically through orders, and build long-lasting relationships with a clean, centralized database.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-[50%] w-full">
          <div className="h-full object-contain lg:block hidden">
            <Image src="/order-management/order-management-new-customer-lg.svg" alt="Create new customer" width={500} height={400} />
          </div>
          <div className="h-full object-contain lg:hidden md:block hidden">
            <Image src="/order-management/order-management-new-customer-md.svg" alt="Create new customer" width={400} height={300} className="w-[80%] h-full mx-auto" />
          </div>
          <div className="h-full object-contain lg:hidden md:hidden block">
            <Image src="/order-management/order-management-new-customer-sm.svg" alt="Create new customer" width={300} height={250} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCustomer;