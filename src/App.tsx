import Products from './components/Products/Products'
import { useState } from 'react'
import { product } from './types/product'
import Cart from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { useFilters } from './hooks/useFilters'


function App() {
	const [cartItems, setCartItems] = useState<product[]>([])

	const handleAddToCart = (product: product) => {
		setCartItems([...cartItems, product])
	}

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
