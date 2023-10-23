import Products from './components/Products/Products'
import { useEffect, useState } from 'react'
import { product } from './types/product'
import Cart from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { Filters } from './components/Filters/Filters'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './hooks/CartContext';


function App() {
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

	const { filteredProducts } = useFilters()

	return (
		<>
			<Cart cartItems={cartItems} />
			<Header />
			<Products products={filteredProducts} addToCart={handleAddToCart} />
		</>
	)
}

export default App
