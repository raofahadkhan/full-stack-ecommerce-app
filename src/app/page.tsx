import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

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
			{data.map((item: IProduct) => (
				<div>
					<Image
						src={urlForImage(item.image[0]).url()}
						alt="product-card"
						className="max-h-[250px] object-cover object-top"
						width={300}
						height={300}
					/>
					<h2>{item.name}</h2>
					<h3>${item.price}</h3>
					<button className="border py-2 px-6 rounded bg-blue-600 text-white
					">Add to Cart</button>
				</div>
			))}
		</div>
	);
}
