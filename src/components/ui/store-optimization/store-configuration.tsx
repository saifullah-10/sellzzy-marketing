import Image from "next/image";

const StoreConfiguration = () => {
  return (
    <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
      <div className="md:space-y-10 space-y-6">
        <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
          Complete Store Configuration
        </h2>
        <div className="flex justify-center items-center">
          <p className="md:w-[80%] w-full text-center">
            Set up your digital store with comprehensive configuration options that cover every aspect of your business. From product management and payment processing to customer communication and analytics, our complete store configuration ensures your online presence is professional, efficient, and ready to drive sales from day one.
          </p>
        </div>
      </div>

      <div>
        <div className="flex lg:flex-row flex-col gap-4 items-stretch mb-4">
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[45%] w-full flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Store Information & Details</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Ensure clear financial transparency with detailed tracking of all transactions, enhancing management and informed decision-making processes.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/store-optimization/store-optimization-config-store.svg" alt="Store information" width={300} height={200} className="w-full h-full"/>
            </div>
          </div>
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[55%] w-full flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Upload Custom Logo</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Identify and manage potential issues such as fraud or delivery challenges, ensuring secure and efficient order processing.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/store-optimization/store-optimization-config-upload.svg" alt="Upload custom logo" width={400} height={250} className="w-full h-full"/>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-4 items-stretch">
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[55%] w-full flex flex-col space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Add Favicon</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Analyze order data for smarter decisions, driving business growth and customer satisfaction.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/store-optimization/store-optimization-config-add.svg" alt="Add favicon" width={400} height={250} className="w-full h-full"/>
            </div>
          </div>
          <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[45%] w-full flex flex-col items-center space-y-2 h-[470px]">
            <div className="space-y-1">
              <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Generate Privacy & Policy</h4>
              <p className="text-[#3C4350] md:text-base text-sm">
                Capture and share detailed order information to ensure seamless team collaboration, prevent misunderstandings, and enhance customer satisfaction with accurate service.
              </p>
            </div>
            <div className="w-full flex justify-center items-center flex-grow overflow-auto">
              <Image src="/store-optimization/store-optimization-config-generate.svg" alt="Generate privacy policy" width={300} height={200} className="w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreConfiguration;