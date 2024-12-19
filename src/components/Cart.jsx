import { useId } from "react"
import './Cart.css'
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../context/cart";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, removeFromCart } = useCart()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <FaShoppingBasket/>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside className="cart">
        {cart.length === 0
          ? <span>No products in the cart</span>
          : (
            <ul className="cart-list">
              {cart.map((product) => (
                <li key={product.id} className="cart-item">
                  <img
                    src={product.images}
                    alt={product.title}
                    className="cart-image"
                  />
                  <div className="cart-details">
                    <h3 className="cart-title">{product.title}</h3>
                    <span className="cart-price">$ {product.price}</span>
                    <button className="remove-from-cart-btn" onClick={() => removeFromCart(product.id)}><MdOutlineRemoveShoppingCart/></button>
                  </div>
                </li>
              ))}
            </ul>
          )}
      </aside>
    </>
  )
}