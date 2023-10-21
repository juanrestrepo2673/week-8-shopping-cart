

import { product } from '@/types/product'
import './Products.css'
import { AddToCart } from './Icons/Icons';

interface ProductsProps {
  products: product[];
  addToCart: (product: product) => void
}


export default function Products({ products, addToCart }: ProductsProps) {
  return (
    <main className='products'>
      <h1>Products</h1>

      <ul>
        {
          products.map((product) => (
            <li className='product' key={product.id}>
              <img src={product.image} alt={product.title}></img>
              <div>
                <strong>{product.title}</strong>
							<p>${product.price}</p>
              </div>
              <button onClick={() => addToCart(product)}><AddToCart /></button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
