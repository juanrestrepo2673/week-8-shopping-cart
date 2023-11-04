

import { product } from '@/types/product'
import './Products.css'
import { AddToCart, RemoveFromCart } from './Icons/Icons';
import { useCart } from '../../hooks/useCart';

interface ProductsProps {
	products: product[];
}


export default function Products({ products }: ProductsProps) {

	const { addToCart, removeFromCart, cartItems } = useCart()

	const checkProductInCart = product => cartItems.some(item => item.id === product.id)

	const handleProductButtonClick = (product, isProductInCart) => {
		if (isProductInCart) {
			return removeFromCart(product)
		}
		addToCart(product)
	}

	return (
		<main className='products'>
			<h1>Products</h1>

			<ul>
				{
					products.map((product) => {
						const isProductInCart = checkProductInCart(product)
						return (
							<li className='product' key={product.id}>
								<img src={product.image} alt={product.title}></img>
								<div>
									<strong>{product.title}</strong>
									<p>${product.price}</p>
								</div>
								<button
									className={isProductInCart ? 'removeProduct' : 'addProduct'}

									onClick={() => handleProductButtonClick(product, isProductInCart)}>
									{
										isProductInCart
											? <RemoveFromCart />
											: <AddToCart />
									}
								</button>
							</li>
						)
					}
					)
				}
			</ul>
		</main>
	)
}
