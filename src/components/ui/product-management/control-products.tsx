import Image from "next/image";

const ControlProducts: React.FC = () => {
	return (
		<section className="max-w-[1280px] mx-auto lg:space-y-10 md:space-y-8 space-y-6 lg:mt-28 md:mt-16 mt-10 lg:px-0 md:px-0 px-[5%]">
			<div className="md:space-y-10 space-y-6">
				<h2 className="lg:text-[40px] md:text-4xl text-[28px] font-semibold text-[#3C4350] text-center">
					Control Your Products
				</h2>
				<div className="flex justify-center items-center">
					<p className="md:w-[80%] w-full text-center">
						Manage every product from one dashboard. Edit details, update pricing, adjust stock, and control visibility — all in real time.
					</p>
				</div>
			</div>

			<div className="bg-[#FAFAFB] w-full flex justify-center items-center flex-grow">
				<Image
					src="/produtManage/control-pro-lg.svg"
					alt="control your product image"
					width={1200}
					height={600}
					className="h-full object-contain lg:block hidden"
				/>
				<Image
					src="/produtManage/control-pro-md.svg"
					alt="control your product image"
					width={800}
					height={400}
					className="h-full object-contain lg:hidden md:block hidden"
				/>
				<Image
					src="/produtManage/control-pro-sm.svg"
					alt="control your product image"
					width={350}
					height={300}
					className="h-full object-contain lg:hidden md:hidden block"
				/>
			</div>
		</section>
	);
};

export default ControlProducts;