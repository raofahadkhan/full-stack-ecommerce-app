import ProuductCard from "@/components/ProuductCard";
import { Image as IImage } from "sanity";
import { client } from "../../sanity/lib/client";
import Hero from "@/components/Hero_Section/Hero";
import New_Release from "@/components/New_Release/New_Release";
import Home_Products from "@/components/Home_Products/Home_Products";
import UniqueSection from "@/components/Unique_Section/Unique_Section";

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
		// <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
		<div>
			{/* {data.map((item: IProduct, index: number) => (
				<ProuductCard key={index} item={item} />
			))} */}
			<Hero />
			<New_Release />
			<Home_Products />
			<UniqueSection />
		</div>
	);
}
