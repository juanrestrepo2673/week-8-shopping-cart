import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import { Header } from './components/Header/Header'
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
