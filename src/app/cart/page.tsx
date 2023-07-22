import CartHavingItems from "@/components/Cart/CartHavingItems";
import EmptyCart from "@/components/Cart/EmptyCart";
import { BASE_PATH } from "@/lib/basepath";
import { cookies } from "next/headers";

const getCartData = async (userID: string) => {
	try {
		const res = await fetch(`${BASE_PATH}/api/cart?user_id=${userID}`, {
			cache: "no-cache",
		});
		return res.json();
	} catch (error) {}
};

const Page = async () => {
	const userID = cookies().get("user_id")?.value as string;
	const cartData = await getCartData(userID);
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
