import { product } from '@/types/product'
import './Products.css'
import { AddToCart } from './Icons/Icons';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';

interface ProductsProps {
  products: product[];

}

export default function Products({ products }: ProductsProps) {
  const { setProducts } = useContext(CartContext)

  return (
    <main className='products'>
      <h1>Products</h1>

      <ul>
        {
          products.map((product) => (
            <li className='product' key={product.id}>
              <img src={product.image} alt={product.title}></img>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <button onClick={() => setProducts((prev: product[]) => [...prev, product])}>Add to card<AddToCart /></button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}