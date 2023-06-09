import { newsletterData } from "@/data/data";
import { newsletterDataType } from "@/types/types";

const NewsLetter = () => {
	const { title, subTitle, buttonText }: newsletterDataType = newsletterData;
	return (
		<div className="mx-auto mb-[50px] mt-[50px] max-w-[68rem] overflow-hidden px-10">
			<div className="text-center">
				<h2 className="text-[32px] font-bold text-[#212121]">{title}</h2>

				<p className="mt-[10px] text-[16px] font-normal text-[#212121]">
					{subTitle}
				</p>

				<div className="mt-[30px] flex justify-center gap-5 sm:block md:flex lg:flex xl:flex">
					<input
						type="email"
						placeholder="Enter your Email Address"
						className="ml:pr-[100px] mm:pr-[100px] border-[2px] border-solid border-[gray] pb-[10px] pl-[20px] pr-[120px] pt-[10px] focus:outline-none sm:pl-[10px] sm:pr-[0px] md:pr-[120px] lg:pr-[120px] xl:pr-[120px]"
					/>
					<div className="flex justify-center">
						<button className="flex items-center justify-center gap-3 bg-[#212121] px-[20px] py-[10px] text-[18px] font-[700] text-[#fff] sm:mt-[10px] md:mt-[unset] lg:mt-[unset] xl:mt-[unset]">
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
