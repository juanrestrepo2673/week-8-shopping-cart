
import { useContext } from 'react'
import { FilterContext } from '../providers/FiltersProvider'
import ProductsData from '../__mocks__/products.json'

import { product } from '@/types/product'


export const useFilters = () => {

	
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

	const filteredProducts = filterProducts(ProductsData)

	return ({
		filters,
		filteredProducts,
		setFilters
	})

}