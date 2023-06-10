import React from "react";
import { client } from "../../../../sanity/lib/client";
import { IProduct } from "@/types/types";
import Product_Detail from "@/components/Product_Detail/Product_Detail";

const getProductData = async () => {
	const res = await client.fetch(`*[_type=="product"]{
		name,
		price,
		_id,
		slug,
		image,
    tagline,
		category -> {
			name
		},
    author -> {
      name
    }
	}`);
	return res;
};

export async function generateStaticParams() {
	const data = await getProductData();

	return data.map((item: IProduct) => ({
		productDetail: item.slug.current,
	}));
}

const page = async ({ params }: { params: { productDetail: string } }) => {
	const data = await getProductData();
	const productData = data.find(
		(item: IProduct) => item.slug.current == params.productDetail
	);
	return (
		<div className="mx-auto mt-20 max-w-[73rem] overflow-hidden px-10">
			<Product_Detail data={productData} />
		</div>
	);
};

export default page;
