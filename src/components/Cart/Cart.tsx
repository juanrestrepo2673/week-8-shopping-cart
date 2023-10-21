import { product } from '@/types/product'
import { CartIcon } from '../Products/Icons/Icons';
import './Cart.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../providers/CartProvider';

export default function Cart() {
	const {products} = useContext(CartContext)
	const [isOpenCart, setIsOpenCart] = useState<boolean>(false)

	return (
		<>
			<label className='cart-button' htmlFor='cartCheckboxId'>
				<CartIcon />
			</label>
			<button id='cartCheckboxId' onClick={() => setIsOpenCart(!isOpenCart)} hidden></button>

			{
				isOpenCart &&
				<aside className='cart'>
					<ul>
						{
							products.map((product) => (
								<li className='product' key={product.id}>
									<img src={product.image} alt={product.title}></img>
									<div>
										<strong>{product.title}</strong> - ${product.price}
									</div>
								</li>
							))
						}
					</ul>
				</aside>
			}

		</>
	)
}
