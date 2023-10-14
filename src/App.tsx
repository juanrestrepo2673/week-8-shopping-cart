import Products from './components/Products/Products'
import ProductsData from './__mocks__/products.json'
import { useState } from 'react'
import { product } from './types/product'
import Cart from './components/Cart/Cart'


function App() {
	const [cartItems, setCartItems] = useState<product[]>([])

	const handleAddToCart = (product: product) => {
		setCartItems([...cartItems, product])
	}


	return (
		<>
			<Cart cartItems={cartItems} />
			<Products products={ProductsData} addToCart={handleAddToCart} />
		</>
	)
}

export default App
