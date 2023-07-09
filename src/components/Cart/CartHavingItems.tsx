"use client";
import {
	CheckIcon,
	ClockIcon,
	QuestionMarkCircleIcon,
	XMarkIcon,
} from "@heroicons/react/20/solid";

const products = [
	{
		id: 1,
		name: "Basic Tee",
		href: "#",
		price: "$32.00",
		color: "Sienna",
		inStock: true,
		size: "Large",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
		imageAlt: "Front of men's Basic Tee in sienna.",
	},
	{
		id: 2,
		name: "Basic Tee",
		href: "#",
		price: "$32.00",
		color: "Black",
		inStock: false,
		leadTime: "3–4 weeks",
		size: "Large",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
	},
	{
		id: 3,
		name: "Nomad Tumbler",
		href: "#",
		price: "$35.00",
		color: "White",
		inStock: true,
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
		imageAlt: "Insulated bottle with white base and black snap lid.",
	},
];

interface CartDataPropType {
	id: number;
	user_id: string;
	product_id: string;
	product_title: string;
	product_author: string;
	product_image: string;
	product_price: number;
	quantity: number;
}

export default function CartHavingItems({
	data,
}: {
	data: CartDataPropType[];
}) {
	console.log("datafromcomp", data);
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 pb-24 pt-16 mmd:px-6 lg:max-w-7xl lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 mmd:text-4xl">
					Shopping Cart
				</h1>
				<form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xsl:gap-x-16">
					<section aria-labelledby="cart-heading" className="lg:col-span-7">
						<h2 id="cart-heading" className="sr-only">
							Items in your shopping cart
						</h2>

						<ul
							role="list"
							className="divide-y divide-gray-200 border-b border-t border-gray-200"
						>
							{data.map((product, productIdx) => (
								<li key={productIdx} className="flex py-6 mmd:py-10">
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
													{/* ${product.product_price} */}
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
													>
														<span className="sr-only">Remove</span>
														<XMarkIcon className="h-5 w-5" aria-hidden="true" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</section>

					{/* Order summary */}
					<section
						aria-labelledby="summary-heading"
						className="sticky top-16 mt-16 rounded-lg bg-gray-50 px-4 py-6 mmd:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
					>
						<h2
							id="summary-heading"
							className="text-lg font-medium text-gray-900"
						>
							Order summary
						</h2>

						<dl className="mt-6 space-y-4">
							<div className="flex items-center justify-between">
								<dt className="text-sm text-gray-600">Subtotal</dt>
								<dd className="text-sm font-medium text-gray-900">$99.00</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="flex items-center text-sm text-gray-600">
									<span>Shipping estimate</span>
									<a
										href="#"
										className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">
											Learn more about how shipping is calculated
										</span>
										<QuestionMarkCircleIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									</a>
								</dt>
								<dd className="text-sm font-medium text-gray-900">Free</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="flex text-sm text-gray-600">
									<span>Tax estimate</span>
									<a
										href="#"
										className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">
											Learn more about how tax is calculated
										</span>
										<QuestionMarkCircleIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									</a>
								</dt>
								<dd className="text-sm font-medium text-gray-900">$0.00</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="text-base font-medium text-gray-900">
									Order total
								</dt>
								<dd className="text-base font-medium text-gray-900">$112.32</dd>
							</div>
						</dl>

						<div className="mt-6">
							<button
								type="submit"
								className="w-full rounded-md border border-transparent bg-gray-950 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>
								Checkout
							</button>
						</div>
					</section>
				</form>
			</div>
		</div>
	);
}
