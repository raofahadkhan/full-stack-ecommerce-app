import { IProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

const getProductData = async () => {
	const res = await client.fetch(`*[_type=="product"]{
		name,
		price,
		_id,
		slug,
		image,
		category -> {
			name
		}
	}`);
	return res;
};

const Non_Fiction = async () => {
	const data = await getProductData();
	const newReleasesData = data.filter(
		(item: IProduct) => item.category.name == "Non-Fiction"
	);
	return (
		<>
			<div className="mx-[8rem] my-[4rem]">
				<div className="grid grid-cols-4 gap-x-[4rem] gap-y-[3rem] sm:grid-cols-1 mm:grid-cols-2 ml:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
					{newReleasesData.map((item: IProduct, index: number) => {
						return (
							<div key={index}>
								<Link href={item.slug.current}>
									<Image
										src={urlForImage(item.image).url()}
										alt="bookOne"
										width={500}
										height={500}
										className="m-auto h-[346px] w-[212px] ml:h-[189px] md:h-[189px] lg:h-[267px] xl:h-[346px]"
									/>
								</Link>

								<div className="mt-[8px] text-center">
									<h3 className="text-[16px] font-semibold text-[#212121]">
										{item.name}
									</h3>
									<h4 className="text-[15px] font-semibold text-[#212121]">
										${item.price}
									</h4>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Non_Fiction;
