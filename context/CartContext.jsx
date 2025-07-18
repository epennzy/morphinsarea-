import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i !== item));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => {
    const num = parseInt(item.price.replace(/[^\d]/g, ""), 10);
    return acc + (isNaN(num) ? 0 : num);
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
