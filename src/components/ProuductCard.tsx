"use client";
import Image from "next/image";
import React from "react";
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
const ProuductCard = ({ item }: any) => {
	return (
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
			<button className="rounded border  bg-blue-600 px-6 py-2 text-white">
				Add to Cart
			</button>
		</div>
	);
};

export default ProuductCard;
