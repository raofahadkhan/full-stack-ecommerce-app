import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import ProuductCard from "@/components/ProuductCard";

const getProductData = async () => {
	const res = await client.fetch(`*[_type=="product"]{
		name,
		price,
		_id,
		title,
		image,
		category -> {
			name
		}
	}`);
	return res;
};

interface IProduct {
	title: string;
	name: string;
	_id: string;
	description: string;
	price: number;
	image: IImage;
	category: {
		name: string;
	};
}

export default async function Home() {
	const data: IProduct[] = await getProductData();

	return (
		<div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
			{data.map((item: IProduct, index: number) => (
				<ProuductCard key={index} item={item} />
			))}
		</div>
	);
}
