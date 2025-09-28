import Image from "next/image";

const CreateOrders = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 px-[5%]">
      <div className="">
        <div className="flex md:flex-row flex-col items-center justify-center md:space-y-0 space-y-4">
          <div className="md:w-[50%] w-full">
            <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] md:block hidden">
              Create Orders On <br /> Customer Behalf
            </h2>
            <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] md:hidden block text-center">
              Create Orders On Customer Behalf
            </h2>
          </div>
          <div className="flex justify-center items-center md:w-[50%] w-full">
            <p className="w-full md:hidden text-center">
              Easily create orders manually for your customers — perfect for phone, email, or offline requests. Add products, set pricing, and process payments directly through Sellzzy.
            </p>
            <p className="w-full md:block hidden">
              Easily create orders manually for your customers — perfect for phone, email, or offline requests. Add products, set pricing, and process payments directly through Sellzzy.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="h-full w-full object-contain lg:block hidden">
          <Image src="/order-management/order-management-create-orders-lg.svg" alt="Create orders" width={1280} height={600} className="w-full h-full"/>
        </div>
        <div className="h-full w-full object-contain lg:hidden md:block hidden">
          <Image src="/order-management/order-management-create-orders-md.svg" alt="Create orders" width={800} height={400} />
        </div>
        <div className="h-full w-full object-contain lg:hidden md:hidden block">
          <Image src="/order-management/order-management-create-orders-sm.svg" alt="Create orders" width={400} height={300} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default CreateOrders;