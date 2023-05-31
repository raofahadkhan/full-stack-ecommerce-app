import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

const getProductData = async () => {
	const res = await client.fetch(`*[_type=="product"]{
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
		<div>
			{data.map((item: IProduct) => (
				<div>
					<Image
						src={urlForImage(item.image[0]).url()}
						alt="product-card"
						width={300}
						height={300}
					/>
				</div>
			))}
		</div>
	);
}
