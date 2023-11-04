export const cartReducer = (state, action) => {

	const { type, payload } = action;
	const { id } = payload


	const CART_ACTION_TYPES = {
		ADD_TO_CART: 'ADD_TO_CART',
		REMOVE_FROM_CART: 'REMOVE_FROM_CART',
		CLEAR_CART: 'CLEAR_CART'
	}


	if (type === CART_ACTION_TYPES.ADD_TO_CART) {
		const newState = [...state];
		let productToUpdate = newState.find(item => item.id === id);

		if (productToUpdate) {
			productToUpdate.quantity += 1;
			return newState
		}

		return [
			...state,
			{
				...payload,
				quantity: 1
			}
		]

	}


	if (type === CART_ACTION_TYPES.REMOVE_FROM_CART) {

		return state.filter(item => item.id !== id)
	}

	if (type === CART_ACTION_TYPES.CLEAR_CART) {
		return []
	}

}