import { IFilters } from '@/types/filters'
import { product } from '@/types/product'
import React, { createContext, useState } from 'react'


const init: product[] = []

export const CartContext = createContext({
	products: init,
	setProducts: React.Dispatch<React.SetStateAction<product[]>>
}
)

interface FiltersProviderProps {
	children: React.ReactNode
}

export function CartProvider({ children }: FiltersProviderProps) {

	const [products, setProducts] = useState(init)

	return (
		<CartContext.Provider value={
			{
				products,
                setProducts
			}
		}>
			{children}
		</CartContext.Provider >
	)
}
