import { ICart } from "@/types/cart";
import { product } from "@/types/product";
import React, { createContext, useState } from "react";

const initialCart: product[] = [];

export const CartContext = createContext({
  cartItems: initialCart,
  setCartItems: React.Dispatch<React.SetStateAction<ICart>>,
});

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState(initialCart);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
