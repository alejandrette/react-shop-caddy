import { useId } from "react"
import './Cart.css'
import { FaShoppingBasket } from "react-icons/fa";

export function Cart() {
  const cartCheckboxId = useId()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <FaShoppingBasket/>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden/>

      <aside className="cart">
        <ul>
          <li>
            <img src="" alt="" />
            <div>
              <strong></strong>

              <footer>
                <small>

                </small>
                <button>+</button>
              </footer>
            </div>
            <button>Clear</button>
          </li>
        </ul>
      </aside>
    </>
  )
}