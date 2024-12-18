import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCard] = useState([])

  const addToCart = product => {
    setCard([...cart, product])
  }
  const clearCart = () => setCard([])

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}