import { newReleases } from "@/data/data";
import { newReleasesType, showcaseType } from "@/types/types";
import Image from "next/image";

const NewRelease = () => {
	const { mainText, mainText2, mainText3, showcase }: newReleasesType =
		newReleases;

	return (
		<div className="mx-auto mt-[50px] max-w-[73rem] overflow-hidden px-10">
			<div className="flex flex-col text-center">
				<h4 className="mb-[15px] text-[16px] font-bold text-[#0062f5]">
					{mainText}
				</h4>
				<h2 className="ml:text-[31px] mm:text-[31px] text-[32px] font-bold text-[#212121] sm:text-[21px] md:text-[32px] lg:text-[32px] xl:text-[32px]">
					{mainText2}
					<span className="block">{mainText3}</span>
				</h2>
			</div>

			<div className="mt-[40px]">
				<div className="flex flex-wrap justify-between sm:justify-center md:justify-center md:gap-x-[12px] lg:justify-between lg:gap-x-[12px] xl:justify-between xl:gap-x-[12px]">
					{showcase.map((item: showcaseType, index: number) => {
						return (
							<div
								key={index}
								className="transition-all duration-500 ease-in hover:scale-110 sm:mb-[20px] md:mb-[unset] lg:mb-[unset] xl:mb-[unset]"
							>
								<Image
									src={item.image}
									width={200}
									height={200}
									alt="best one"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NewRelease;
