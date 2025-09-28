import Image from "next/image";

const CustomCollections: React.FC = () => {
	return (
		<section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
			<div className="md:space-y-10 space-y-6">
				<h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
					Create Custom Collections
				</h2>
				<div className="flex justify-center items-center">
					<p className="md:w-[80%] w-full text-center">
						Organize your products into collections and categories to help customers find exactly what they need faster.
					</p>
				</div>
			</div>

			<div>
				<div className="flex lg:flex-row flex-col gap-4 items-stretch mb-4">
					<div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[65%] flex flex-col space-y-2 h-[470px]">
						<div className="space-y-1">
							<h4 className="text-[#3C4350] md:text-lg text-base font-semibold">
								Versatile Collection Bundle Builder
							</h4>
							<p className="text-[#3C4350] md:text-base text-sm">
								Create new groups or tags to showcase products by theme, niche, or style.
							</p>
						</div>
						<div className="w-full flex justify-center items-center flex-grow">
							<Image
								src="/produtManage/collection-add-product.svg"
								alt="browse product bundle"
								width={456}
								height={229}
								className="object-contain"
							/>
						</div>
					</div>
					<div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 lg:w-[35%] w-full flex flex-col space-y-2 h-[470px]">
						<div className="space-y-1">
							<h4 className="text-[#3C4350] md:text-lg text-base font-semibold">
								Import Collections from Shopify
							</h4>
							<p className="text-[#3C4350] md:text-base text-sm">
								Keep your existing categories in sync with Sellzzy.
							</p>
						</div>
						<div className="w-full flex justify-center items-center flex-grow">
							<Image
								src="/produtManage/sync-collection.svg"
								alt="add features bundle"
								width={300}
								height={300}
								className="h-full w-full object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="flex lg:flex-row flex-col gap-4">
					<div className="bg-[#FAFAFB] rounded-xl md:p-8 p-4 w-full flex flex-col space-y-2">
						<div className="space-y-1">
							<h4 className="text-[#3C4350] md:text-lg text-base font-semibold">Centralized Collections</h4>
							<p className="text-[#3C4350] md:text-base text-sm">
								Keep all your products neatly organized in one place. Create, customize, and manage collections by category, tags, or themes — making it easier for customers to discover and shop your products.
							</p>
						</div>
						<div className="w-full flex justify-center items-center flex-grow">
							<Image
								src="/produtManage/custom-collections-centralized.svg"
								alt="custom collections centralized"
								width={800}
								height={400}
								className="h-full w-full object-contain lg:block hidden"
							/>
							<Image
								src="/produtManage/custom-collections-centralized-md.svg"
								alt="custom collections centralized"
								width={400}
								height={300}
								className="h-full object-contain lg:hidden md:block hidden"
							/>
							<Image
								src="/produtManage/custom-collections-centralized-sm.svg"
								alt="custom collections centralized"
								width={300}
								height={200}
								className="h-full object-contain lg:hidden md:hidden block"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomCollections;