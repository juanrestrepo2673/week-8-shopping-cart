import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { useFilters } from './hooks/useFilters'
import { useCart } from './hooks/useCart'

function App() {
	const { filteredProducts } = useFilters()
	const { cartItems, AddToCart } = useCart();

	return (
		<>
			<Cart cartItems={cartItems} />
			<Header />
			<Products products={filteredProducts} addToCart={AddToCart} />
		</>
	)
}

export default App
