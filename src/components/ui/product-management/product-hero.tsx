import Image from "next/image";
import Link from "next/link";

const ProductHero: React.FC = () => {
    return (
        <section className="max-w-[1280px] mx-auto lg:space-y-16 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
            <div className="lg:px-0 md:px-0 px-[5%]">
                <div className="lg:space-y-6 md:space-y-4 space-y-2">
                    <div className="flex justify-center items-center">
                        <p className="md:text-lg text-base border border-[#B6E9FF] bg-[#EFFAFF] text-[#0071AB] rounded-3xl px-4 py-2">
                            Add Any Digital Product To Your Store
                        </p>
                    </div>
                    <h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
                        Product Management
                    </h2>
                    <p className="text-[#464F5E] mx-auto md:text-[18px] text-sm mb-4 md:mb-10 md:w-[80%] w-full text-center">
                        Launch, organize, and scale your digital products effortlessly. Sellzzy makes it simple to manage eBooks, courses, designs, and software — all from one clean dashboard.
                    </p>
                </div>

                <div className="flex md:flex-row flex-col justify-center items-center gap-5">
                    <Link
                        href="/signup"
                        className="bg-[#00B0F4] text-center hover:no-underline text-white rounded-xl border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] 
            transition-all duration-500 hover:shadow-[0_0_0_2px_rgba(44,201,255,0.4)] hover:scale-[1.01]
            md:w-auto w-full"
                    >
                        Start For free
                    </Link>

                    <button
                        className="bg-white text-center hover:no-underline hover:text-[#00B0F4] text-[#00B0F4] rounded-[12px] border border-[#2CC9FF] pt-[12px] pb-[12px] pr-[16px] pl-[16px] transition-transform duration-200 hover:scale-[1.01]
            md:w-auto w-full focus:outline-none"
                        data-action="contact_sales"
                    >
                        Contact Sales
                    </button>
                </div>
            </div>

            <div className="w-full">
                <div className="hidden lg:flex justify-center items-center">
                    <Image src="/produtManage/product_managent_lg.svg" alt="product management" width={1200} height={600} className="h-full w-full" />
                </div>
                <div className="lg:hidden md:flex hidden justify-center items-center">
                    <Image src="/produtManage/product_managent_md.svg" alt="product management" width={700} height={400} className="h-full" />
                </div>
                <div className="lg:hidden md:hidden w-full flex justify-center items-center">
                    <Image src="/produtManage/product_managent_sm.svg" alt="product management" width={400} height={300} className="h-full" />
                </div>
            </div>
        </section>
    );
};

export default ProductHero;