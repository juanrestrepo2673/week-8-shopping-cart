import { product } from "@/types/product";
import { useCartReducer } from "../hooks/useCartReducer";
import { createContext, PropsWithChildren } from "react";

export interface CartContext {
	cartItems: product[],
	addToCart: (product: product) => void;
	removeFromCart: (product: product) => void;
	clearCart: (product: product) => void;
}

export const CartContext = createContext<CartContext>({})

export function CartProvider({ children }: PropsWithChildren<{}>) {

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