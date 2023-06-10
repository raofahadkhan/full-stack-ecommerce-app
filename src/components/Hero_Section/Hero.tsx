import { heroSection } from "@/data/data";
import { companiesLogoType, heroSectionType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

const Hero = () => {
	const {
		saleText,
		title,
		subtitle,
		buttonText,
		buttonTextHref,
		companiesLogo,
		bigImage,
	}: heroSectionType = heroSection;

	return (
		<div className="mx-auto max-w-[73rem] overflow-hidden px-10 py-10">
			<div
				className="
        flex
        items-center
        justify-between
        gap-4
        md:block
        lg:flex
        xl:flex
      "
			>
				<div>
					<span className="flex h-[46px] w-[120px] items-center justify-center rounded-[6px] bg-[#e1edff] font-semibold text-[blue]">
						{saleText}
					</span>

					<h1 className="mt-[40px] text-[3.5rem] font-[700] leading-[55px] tracking-[.03em] text-[#212121] sm:text-[1.9rem] sm:leading-[39px] md:text-[3.5rem] md:leading-[55px] lg:text-[3.5rem] lg:leading-[55px] xl:text-[3.5rem] xl:leading-[55px]">
						{title}
					</h1>

					<p className="mt-[30px] w-[70%] text-[16px] font-normal text-[#666] sm:w-full md:w-[70%] lg:w-[70%] xl:w-[70%]">
						{subtitle}
					</p>

					<div className="mt-[30px]">
						<Link
							href={buttonTextHref}
							className="flex w-[35%] items-center justify-center gap-3 bg-[#212121] p-[1rem] text-[18px] font-[700] text-[#fff] sm:w-full md:w-[35%] lg:w-[35%] xl:w-[35%]"
						>
							<BsCart2 size={22} /> {buttonText}
						</Link>
					</div>

					<div className="flex items-center gap-2 sm:hidden md:flex lg:flex xl:flex">
						{companiesLogo.map((item: companiesLogoType, index: number) => {
							return (
								<Image
									key={index}
									width={125}
									height={125}
									src={item.image}
									alt="brandOne"
								/>
							);
						})}
					</div>
				</div>

				<div className="xs:hidden sm:hidden md:hidden lg:block xl:block">
					<Image
						src={bigImage}
						alt="book hero image."
						width={500}
						height={500}
						className="h-[550px] w-[550px] rounded-[30px] object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
