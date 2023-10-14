import { product } from '@/types/product'
import { CartIcon } from '../Products/Icons/Icons';
import './Cart.css'
import { useState } from 'react';

interface cartItemsProps {
	cartItems: product[];
}


export default function Cart({ cartItems }: cartItemsProps) {

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
							cartItems.map((product) => (
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
