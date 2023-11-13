
import { useContext } from 'react'
import { FilterContext } from '../providers/FiltersProvider'

import { product } from '@/types/product'
import { useProducts } from './useProducts'


export const useFilters = () => {

	const { products: productsData } = useProducts();
	const { filters, setFilters } = useContext(FilterContext)


	const filterProducts = (products: product[]) => (
		products.filter(product =>
			product.price >= filters.minPrice &&
			(
				filters.category === '' ||
				product.category === filters.category
			)
		)
	)

	const filteredProducts = filterProducts(productsData)

	return ({
		filters,
		filteredProducts,
		setFilters
	})

}