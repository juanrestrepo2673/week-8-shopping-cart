
import { useReducer } from 'react'
import { cartReducer } from "../reducers/cart.reducer";


export function useCartReducer() {
	const [state, dispatch] = useReducer(cartReducer, [])

	const addToCart = product => dispatch({
		type: 'ADD_TO_CART',
		payload: product
	})

	const removeFromCart = product => dispatch({
		type: 'REMOVE_FROM_CART',
		payload: product
	})


	const clearCart = () => dispatch({
		type: 'CLEAR_CART'
	})

	return {
		cartItems: state,
		addToCart,
		removeFromCart,
		clearCart
	}
}
