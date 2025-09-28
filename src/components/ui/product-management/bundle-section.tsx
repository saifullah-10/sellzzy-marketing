import Image from "next/image";

const BundleSection: React.FC = () => {
    return (
        <section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
            <div className="md:space-y-10 space-y-6">
                <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
                    Make Your Own Bundle
                </h2>
                <div className="flex justify-center items-center">
                    <p className="md:w-[80%] w-full text-center">
                        Boost sales by combining products into attractive bundles. Sell more while giving customers extra value.
                    </p>
                </div>
            </div>

            <div>
                <div className="flex lg:flex-row flex-col gap-4 items-stretch mb-4">
                    <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[65%] flex flex-col space-y-2 h-[470px]">
                        <div className="space-y-1">
                            <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">
                                Browse Products to Customize Your Bundle
                            </h4>
                            <p className="text-[#3C4350] md:text-base text-sm">
                                Boost sales by combining products into attractive bundles. Sell more while giving customers extra value.
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center flex-grow overflow-auto">
                            <Image
                                src="/produtManage/browse-product-bundle.svg"
                                alt="browse product bundle"
                                width={456}
                                height={300}
                                className="h-full w-ful object-contain"
                            />
                        </div>
                    </div>
                    <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[35%] w-full flex flex-col space-y-2 h-[470px]">
                        <div className="space-y-1">
                            <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Add Features to Bundle</h4>
                            <p className="text-[#3C4350] md:text-base text-sm">
                                Highlight key selling points directly on the product page. Show customers exactly what makes your bundle valuable and unique.
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center flex-grow overflow-auto">
                            <Image
                                src="/produtManage/add-features-bundle.svg"
                                alt="add features bundle"
                                width={600}
                                height={300}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-4 items-stretch">
                    <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[35%] w-full flex flex-col space-y-2 h-[470px]">
                        <div className="space-y-1">
                            <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Shopify Sync</h4>
                            <p className="text-[#3C4350] md:text-base text-sm">
                                Keep your products and bundles always up to date by syncing directly with Shopify — no extra work needed.
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center flex-grow">
                            <Image
                                src="/produtManage/shopify-sync-bundle.svg"
                                alt="shopify sync bundle"
                                width={300}
                                height={300}
                                className="h-full object-contain"
                            />
                        </div>
                    </div>
                    <div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[65%] w-full flex flex-col space-y-2 h-[470px]">
                        <div className="space-y-1">
                            <h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Enhance Search Visibility</h4>
                            <p className="text-[#3C4350] md:text-base text-sm">
                                Create bundles the way you prefer — combine products by type, category, or tags, or hand-pick items one by one for full control.
                            </p>
                        </div>
                        <div className="w-full flex justify-center items-center flex-grow">
                            <Image
                                src="/produtManage/enhance-search-bundle.svg"
                                alt="enhance search bundle"
                                width={500}
                                height={300}
                                className="h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BundleSection;