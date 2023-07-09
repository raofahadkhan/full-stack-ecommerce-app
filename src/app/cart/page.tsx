import CartHavingItems from "@/components/Cart/CartHavingItems";
import EmptyCart from "@/components/Cart/EmptyCart";
import { BASE_PATH } from "@/lib/basepath";
import { cookies } from "next/headers";

const getCartData = async (userID: string) => {
	const res = await fetch(`${BASE_PATH}/api/cart?user_id=${userID}`, {
		cache: "no-store",
	});
	return res.json();
};

const Page = async () => {
	const cartData = await getCartData("4cb1ae7a-08e8-4995-afaf-f852dabf80a2");
	return (
		<div>
			{cartData && cartData?.res?.length == 0 ? (
				<EmptyCart />
			) : (
				<CartHavingItems data={cartData.res} />
			)}
		</div>
	);
};

export default Page;
