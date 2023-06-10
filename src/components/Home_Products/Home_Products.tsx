import { homeProducts } from "@/data/data";
import { IProduct, homeProductsType } from "@/types/types";
import ProductSlider from "./Product_Slider";

const HomeProducts = ({ data }: { data: IProduct[] }) => {
	const { title, subTitle }: homeProductsType = homeProducts;
	return (
		<div className="mx-auto mt-[50px] max-w-[73rem] overflow-hidden px-10">
			<div className="flex flex-col text-center">
				<h4 className="mb-[15px] text-[16px] font-bold text-[#0062f5]">
					{title}
				</h4>
				<h2 className="text-[32px] font-bold text-[#212121]">{subTitle}</h2>
			</div>
			<ProductSlider sliderData={data} />
		</div>
	);
};

export default HomeProducts;
