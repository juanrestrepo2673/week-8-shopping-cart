import { product } from '@/types/product'
import { CartIcon } from '../Products/Icons/Icons';
import './Cart.css'
import { useCart } from '../../hooks/useCart';


export default function Cart() {

	const { cartItems, addToCart } = useCart()

	return (
		<>
			<label className='cart-button' htmlFor='cartCheckboxId'>
				<CartIcon />
			</label>
			<input id='cartCheckboxId' type='checkbox' />

			<aside className='cart'>
				<ul>
					{
						cartItems.map((product) => (
							<li className='product' key={product.id}>
								<img src={product.image} alt={product.title}></img>
								<div>
									<strong>{product.title}</strong> - ${product.price}
								</div>

								<footer>
									<small className='quantity'>
										Quantity: {product.quantity}
									</small>
									<button id='add-button' onClick={() => addToCart(product)}>+</button>
								</footer>

							</li>
						))
					}
				</ul>
			</aside>

		</>
	)
}
