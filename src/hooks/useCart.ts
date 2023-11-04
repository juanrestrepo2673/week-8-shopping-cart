import { CartContext } from "../providers/CartProvider";
import { useContext } from "react";


export const useCart = () => {

	const cartContext = useContext(CartContext);

	if (cartContext === undefined) {
		throw new Error('useCart must be used within a CartProvider')
	}

	return cartContext;

}