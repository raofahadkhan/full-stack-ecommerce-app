"use client";
import { IProduct } from "@/types/types";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";

const postDataToDb = async (data: any) => {
	try {
		await fetch("/api/cart", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				product_id: data.product_id,
				product_title: data.product_title,
				product_author: data.product_author,
				product_image: urlForImage(data.product_image)?.url(),
				product_price: data.product_price,
				quantity: data.product_quantity,
			}),
		});
	} catch (error) {
		console.log(error, "error");
	}
};

const Product_Detail = ({ data }: { data: IProduct }) => {
	const [qty, setQty] = useState(1);
	let product = {
		product_id: data?._id,
		product_title: data?.name,
		product_author: data?.author.name,
		product_image: data?.image,
		product_price: data?.price,
		product_quantity: qty,
	};
	return (
		<>
			<div className="flex gap-[34px] sm:block md:flex lg:flex xl:flex">
				<div className="sm:mb-[20px] md:mb-[unset] lg:mb-[unset] xl:mb-[unset]">
					<Image
						src={urlForImage(data?.image).url()}
						width={250}
						height={250}
						alt="home"
					/>
				</div>

				<div>
					<div>
						<h2 className="text-[20px] font-bold text-[#000]">
							{data.name}: {data.tagline}
						</h2>

						<p>
							by, <span>{data.author.name}</span>
						</p>
					</div>

					<div className="mt-[30px] flex items-center gap-[20px]">
						<h3>Quantity:</h3>

						<div className="flex items-center gap-3">
							<button
								onClick={() => (qty > 1 ? setQty(qty - 1) : setQty(1))}
								className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-3xl font-light shadow-md hover:shadow-lg"
							>
								-
							</button>
							<p>{qty}</p>
							<button
								onClick={() => setQty(qty + 1)}
								className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-2xl font-light shadow-md hover:shadow-lg"
							>
								+
							</button>
						</div>
					</div>

					<div className="mt-[40px] flex items-center gap-3">
						<button
							onClick={() => postDataToDb(product)}
							className="prodsc:text-sm subsc:w-[50%] navsc:w-auto navsc:px-4 flex items-center justify-center gap-2 bg-[#212121] px-2 py-[0.65rem] text-xs font-medium leading-4 text-[#fff]"
						>
							<BsCart size={22} />
							<span className="text-[16px]">Add to Cart</span>
						</button>
						<span className="text-3xl font-bold leading-7 tracking-widest text-[#212121]">
							${data.price}
						</span>
					</div>
				</div>
			</div>

			<div className="my-[80px]">
				<div className="border-b-2 border-[#000] pb-[10px]">
					<h3 className="text-[30px] font-bold text-[#000] sm:text-[22px] mm:text-[25px] md:text-[30px] lg:text-[30px] xl:text-[30px]">
						Product Information
					</h3>
				</div>

				<div className="mt-[20px]">
					<div className="mt-10 flex sm:block md:flex lg:flex xl:flex">
						<p className="flex-1 text-base font-bold uppercase leading-5 tracking-wider text-[#666] sm:mb-[10px] md:mb-[unset] lg:mb-[unset] xl:mb-[unset]">
							About the author:
						</p>
						<p className="flex-[2] text-justify text-base font-light leading-[26px] tracking-wider text-[#666]">
							Since graduating from the College of William and Mary in 1982 and
							the University of Chicago Law School in 1985, James Comey has been
							a prosecutor, defense lawyer, general counsel, teacher, writer,
							and leader. He most recently served in the US government as the
							Director of the FBI. His best-selling book, A Higher Loyalty:
							Truth, Lies, and Leadership was published in 2018 and was made
							into a 2020 television limited series. His second book, Saving
							Justice: Truth, Transparency, and Trust, also a New York Times
							best-seller, was published in 2021. Central Park West is his first
							crime novel. --This text refers to the library edition.
						</p>
					</div>

					<div className="mt-10">
						<p className="mb-[20px] text-base font-bold uppercase leading-5 tracking-wider text-[#666]">
							Book Details
						</p>
						<div>
							<p className="mb-[10px] text-justify text-base font-bold leading-[26px] tracking-wider text-[#000]">
								In the thrilling first crime novel from the former director of
								the FBI, a murder investigation reveals deadly connections
								between high-ranking politicians and the mafia.
							</p>

							<p className="mb-[10px] text-justify text-base font-light leading-[26px] tracking-wider text-[#666]">
								The gripping crime fiction debut from former FBI director James
								Comey takes readers deep inside the world of lawyers and
								investigators working to solve a murder while navigating the
								treacherous currents of modern politics and the mob.
							</p>

							<p className="mb-[10px] text-justify text-base font-light leading-[26px] tracking-wider text-[#666]">
								When a years-long case against a powerful mobster finally cracks
								and an unimpeachable witness takes the stand, federal prosecutor
								Nora Carleton is looking forward to putting the defendant away
								for good. The mobster, though, has other plans. As the witness’s
								testimony concludes, a note is passed to the prosecution
								offering up information into the assassination of a disgraced
								former New York governor, murdered in his penthouse apartment
								just days before. It’s enough to blow the case wide open, and to
								send Nora into a high-stakes investigation of conspiracy,
								corruption, and danger.
							</p>

							<p className="mb-[10px] text-justify text-base font-light leading-[26px] tracking-wider text-[#666]">
								Drawing from the author’s decades in federal law enforcement,
								including his years in Manhattan as a mob prosecutor and later
								the chief federal prosecutor, Central Park West is a fast-paced
								legal thriller with an intriguing plot enriched by real-life
								details and experiences. That unique perspective gives the novel
								much of its allure, but it’s the unforgettable characters,
								shocking twists, and courtroom scenes as authentic as they are
								dramatic that will leave readers looking forward to more from
								this bold new talent in the genre.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product_Detail;
