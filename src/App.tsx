import Products from './components/Products/Products'


import Cart from './components/Cart/Cart'
import { Header } from './components/Header/Header'

import { useFilters } from './hooks/useFilters'


function App() {
	const { filteredProducts } = useFilters()

	return (
		<>
			<Cart />
			<Header />
			<Products products={filteredProducts} />
		</>
	)
}

export default App
