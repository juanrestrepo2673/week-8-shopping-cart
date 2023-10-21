
import { useContext } from 'react'
import { product } from '@/types/product'
import { CartContext } from '../providers/CartProvider'


export const useCart = () => {

	const { cartItems, setCartItems } = useContext(CartContext)

	const AddToCart = (product: product) => {
		setCartItems([...cartItems, product])
	}

	return ({
		cartItems,
		AddToCart
	})

}