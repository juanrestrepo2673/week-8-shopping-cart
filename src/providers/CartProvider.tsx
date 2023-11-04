import { createContext, useState } from "react";


export const CartContext = createContext()


export function CartProvider({ children }) {


	const [cartItems, setCartItems] = useState<product[]>([])

	const addToCart = (product: product) => {

		/* Option 1 */
		// const productIndex = cartItems.findIndex(item => item.id === product.id)

		// if(productIndex >= 0){
		// 	const cartsCopy = [...cartItems];
		// 	cartsCopy[productIndex].quantity += 1
		// 	return setCartItems(cartsCopy)

		// }

		/* Option 2 */
		const cartsCopy = [...cartItems];

		let productToUpdate = cartsCopy.find(item => item.id === product.id);

		if (productToUpdate) {
			productToUpdate.quantity += 1;
			return setCartItems(cartsCopy)

		}


		// option 3 - please verify this method

		// return setCartItems(prev => prev.map(item =>
		// 	item.id === product.id ?
		// 		{ ...item, quantity: item.quantity + 1 }
		// 		: { ...product, quantity: 1 }
		// ));

		/* Slide */


		return setCartItems(prevState => (
			[
				...prevState,
				{
					...product,
					quantity: 1
				}
			]
		))

	}


	const removeFromCart = product => {
		return setCartItems(cartItems.filter(item =>
			item.id !== product.id)
		)
	}


	const clearCart = () => setCartItems([])


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