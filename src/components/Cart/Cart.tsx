import { product } from '@/types/product'
import { CartIcon } from '../Products/Icons/Icons';
import './Cart.css'
import { useState, useContext } from 'react';
import CartContext from '../CartItem/CartContext';

interface cartItemsProps {
	cartItems: product[];
}


export default function Cart({ cartItems }: cartItemsProps) {

	const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
	const contextCartItems = useContext(CartContext);

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
							contextCartItems.map((product) => (
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
