import { product } from "@/types/product"

/* good practice to use environment variables
because this information  can change */
const apiUrl = import.meta.env.VITE_API_URL

export const fetchProducts = async (): Promise<product[]> => {
	
	const res = await fetch(`${apiUrl}/products`, {})
	if (!res.ok) {
		console.error('Error fetching products')
		return []
	}

	const products = await res.json()
	return products
}