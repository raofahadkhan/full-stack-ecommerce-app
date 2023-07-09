"use client";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { CartDataPropType } from "./CartHavingItems";
import { BASE_PATH } from "@/lib/basepath";
import { useRouter } from "next/navigation";

const deleteItemFromCart = async (itemId: number) => {
	try {
		await fetch(`${BASE_PATH}/api/cart`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				id: itemId,
			}),
		});
	} catch (error) {}
};

const CartItem = ({ product }: { product: CartDataPropType }) => {
	const { refresh } = useRouter();

	return (
		<li className="flex py-6 mmd:py-10">
			<div className="flex-shrink-0">
				<img
					src={product.product_image}
					alt="Product Image"
					className="h-24 w-24 rounded-md object-contain object-center mmd:h-48 mmd:w-48"
				/>
			</div>

			<div className="ml-4 flex flex-1 flex-col justify-between mmd:ml-6">
				<div className="relative pr-9 mmd:grid mmd:grid-cols-2 mmd:gap-x-6 mmd:pr-0">
					<div>
						<div className="flex justify-between">
							<h3 className="text-sm">
								<p className="font-medium text-gray-700 hover:text-gray-800">
									{product.product_title}
								</p>
							</h3>
						</div>
						<p className="mt-1 text-sm font-medium text-gray-900">
							By: {product.product_author}
						</p>
						<p className="mt-1 text-sm font-medium text-gray-900">
							Price: ${product.product_price}
						</p>
					</div>

					<div className="mt-4 mmd:mt-0 mmd:pr-9">
						<div className="flex rounded-md text-left text-base font-medium leading-5 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 mmd:text-sm">
							<div className="flex border border-gray-300 shadow-sm">
								<button className="px-3 py-1 text-center hover:bg-gray-200">
									-
								</button>
								<div className="px-3 py-1 text-center">{1}</div>
								<button
									className={`px-3 py-1 text-center hover:bg-gray-200`}
									//  ${ 	btndisable ? "text-gray-300" : "text-gray-800"
									// }`}
								>
									+
								</button>
							</div>
						</div>

						<div className="absolute right-0 top-0">
							<button
								type="button"
								className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
								onClick={() => {
									deleteItemFromCart(product.id);
									refresh();
								}}
							>
								<span className="sr-only">Remove</span>
								<XMarkIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
