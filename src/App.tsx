import Products from './components/Products/Products'
import { useState } from 'react'
import { product } from './types/product'
import Cart from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { Filters } from './components/Filters/Filters'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './providers/CartProvider'


function App() {
	const { filteredProducts } = useFilters()

	return (
		<>
			<CartProvider>
				<Cart />
				<Header />
				<Products products={filteredProducts} />
			</CartProvider>
		</>
	)
}

export default App
