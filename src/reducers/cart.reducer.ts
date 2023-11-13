import { product } from "@/types/product";

export const cartInitialState = JSON.parse(window.localStorage.getItem('cartItems') || '[]') 

type Action =
	| { type: 'ADD_TO_CART', payload: product }
	| { type: 'REMOVE_FROM_CART', payload: product }
	| { type: 'CLEAR_CART', payload: product }


export const cartReducer = (state: product[], action: Action): product[] => {

	const { type, payload } = action;
	const { id } = payload


	const CART_ACTION_TYPES = {
		ADD_TO_CART: 'ADD_TO_CART',
		REMOVE_FROM_CART: 'REMOVE_FROM_CART',
		CLEAR_CART: 'CLEAR_CART'
	}

	const updateLocalStorage = (state: product[]) => window.localStorage.setItem('cartItems', JSON.stringify(state))


	if (type === CART_ACTION_TYPES.ADD_TO_CART) {
		let newState = [...state];
		let productToUpdate = newState.find(item => item.id === id);

		if (productToUpdate) {
			productToUpdate.quantity += 1;
			updateLocalStorage(newState)
			return newState
		}

		newState = [
			...state,
			{
				...payload,
				quantity: 1
			}
		]
		updateLocalStorage(newState)
		return newState

	}


	if (type === CART_ACTION_TYPES.REMOVE_FROM_CART) {
		const newState = state.filter((item: product) => item.id !== id)
		updateLocalStorage(newState)
		return newState
	}

	if (type === CART_ACTION_TYPES.CLEAR_CART) {
		updateLocalStorage([])
		return []
	}

	return state

}