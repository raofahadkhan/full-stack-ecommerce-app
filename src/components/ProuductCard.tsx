"use client";
import Image from "next/image";
import React, { FC } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";

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
const ProuductCard: FC<{ item: any }> = ({ item }) => {
	const handleAddToCart = async () => {
		const res = await fetch("/api/cart", {
			method: "POST",
			body: JSON.stringify({
				product_id: item._id,
			}),
		});

		const result = await res.json();
		console.log("cart result", result);
	};
	return (
		<div>
			<Image
				src={urlForImage(item.image).url()}
				alt="product-card"
				className="max-h-[250px] object-cover object-top"
				width={300}
				height={300}
			/>
			<h2>{item.name}</h2>
			<h3>${item.price}</h3>
			<button
				onClick={() => handleAddToCart()}
				className="rounded border  bg-blue-600 px-6 py-2 text-white"
			>
				Add to Cart
			</button>
		</div>
	);
};

export default ProuductCard;
