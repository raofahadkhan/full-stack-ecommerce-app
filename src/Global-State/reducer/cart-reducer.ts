export const CartReducer = (state: any, action: any) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, { ...action.payload, qty: 1 }],
			};

		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((c: any) => c._id !== action.payload.id),
			};

		case "UPDATE_CART_ITEM_QTY":
			return {
				...state,
				cart: state.cart.filter((c: any) =>
					c.node.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
				),
			};

		default:
			return state;
	}
};
