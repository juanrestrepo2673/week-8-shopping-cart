import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/products.service'
import { product } from '@/types/product'


export const useProducts = () => {

	const [products, setProducts] = useState<product[]>([])

	/* Using useEffect is a simple way to consume a service,
	using a state manager as React Query could be more complete  */

	useEffect(() => {
		fetchProducts()
			.then(products =>
				setProducts(products)
			)
			.catch(err => { console.error(err) })
	}, [])

	return { products };
}