import { createContext } from "react";
import { product } from "@/types/product";

const CartContext = createContext<product[]>([]);

export const CartItem = ({ id, image, title, price }: product) => {
  return (
    <li className="cart-item" key={id}>
      <img src={image} alt={title}></img>
      <div>
        <strong>{title}</strong> - ${price}
      </div>
    </li>
  );
};


export default CartContext; 
