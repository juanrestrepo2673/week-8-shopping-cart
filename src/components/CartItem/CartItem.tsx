import { product } from '@/types/product'
import './CartItem.css'

export default function CartItem({ id, image, title, price }: product) {
	return (
		<li className='cart-item' key={id}>
			<img src={image} alt={title}></img>
			<div>
				<strong>{title}</strong> - ${price}
			</div>
		</li>
	)
}
