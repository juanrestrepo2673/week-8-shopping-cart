
import { useReducer } from 'react'
import { cartInitialState, cartReducer } from "../reducers/cart.reducer";
import { product } from '@/types/product';


export function useCartReducer() {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState)

	const addToCart = (product: product) => dispatch({
		type: 'ADD_TO_CART',
		payload: product
	})

	const removeFromCart = (product: product) => dispatch({
		type: 'REMOVE_FROM_CART',
		payload: product
	})


	const clearCart = (product: product) => dispatch({
		type: 'CLEAR_CART',
		payload: product
	})

	return {
		cartItems: state,
		addToCart,
		removeFromCart,
		clearCart
	}
}
