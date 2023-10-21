import { useContext, useEffect } from "react";
import { product } from "@/types/product";
import { CartContext } from "../providers/CartProvider";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [setCartItems]);

  const AddToCart = (product: product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return {
    cartItems,
    AddToCart,
  };
};
