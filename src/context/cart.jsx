import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCard) => {
      if(!prevCard.some(item => item.id === product.id)) {
        return [...prevCard, product]
      }
      return prevCard
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCard) => prevCard.filter(item => item.id !== productId))
  }

  const clearCart = () => setCart([])

  const isCart = (productId) => cart.some(item => item.id === productId)

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      isCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}