import { createContext, useContext, useEffect, useReducer } from "react";
import { CartReducer } from "@/Global-State/reducer/cart-reducer";
import { client } from "../../../sanity/lib/client";

const CartContext = createContext<any | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const initialState = {
		cart: [],
		products: [],
	};

	const [state, dispatch] = useReducer(CartReducer, initialState);

	const getProductData = async () => {
		const res = await client.fetch(`*[_type=="product"]`);
		return res;
	};

	const data = async () => {
		const productData = await getProductData();
		initialState.products = productData;
	};
	data();

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};
