import CartHavingItems from "@/components/Cart/CartHavingItems";
import EmptyCart from "@/components/Cart/EmptyCart";
import { BASE_PATH } from "@/lib/basepath";

const getCartData = async (userID: string) => {
	try {
		const res = await fetch(`${BASE_PATH}/api/cart?user_id=${userID}`, {
			cache: "no-store",
		});
		return res.json();
	} catch (error) {}
};

const Page = async () => {
	const cartData = await getCartData("2eaa207f-fcad-495d-b112-bcd4443aaf5d");
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
