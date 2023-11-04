import { useCartReducer } from "../hooks/useCartReducer";
import { createContext } from "react";


export const CartContext = createContext()

export function CartProvider({ children }) {

	const { cartItems, addToCart, removeFromCart, clearCart } = useCartReducer()

	return (
		<CartContext.Provider value={{
			cartItems,
			addToCart,
			removeFromCart,
			clearCart
		}}>
			{children}
		</CartContext.Provider>
	)
}