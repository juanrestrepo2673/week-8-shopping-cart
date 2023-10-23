
import { useContext } from 'react'
import ProductsData from '../__mocks__/products.json'

import { product } from '@/types/product'


export const CartProvider = () => {

    const [cartItems, setCartItems] = useState<product[]>([])

	const handleAddToCart = (product: product) => {
		const updatedCartItems = [...cartItems, product];
    	setCartItems(updatedCartItems);
    	localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
	}

	useEffect(() => {
		const storedCartItems = localStorage.getItem('cartItems');
		if (storedCartItems) {
		setCartItems(JSON.parse(storedCartItems));
		}
	}, []);

	const { filters, setFilters } = useContext(FilterContext)
	const filterProducts = (products: product[]) => (
		products.filter(product =>
			product.price >= filters.minPrice &&
			(
				filters.category === '' ||
				product.category === filters.category
			)&&
			(
				filters.title === '' ||
				product.title.toLowerCase().includes(filters.title.toLowerCase())
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