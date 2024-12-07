import './Products.css'
import { MdAddShoppingCart } from "react-icons/md";

export function ListProducts({ products = [] }) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-card">
          <img
            src={product.images}
            alt={product.title}
            className="product-image"
          />
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <span className="product-price">$ {product.price}</span>
            <button className="add-to-cart-btn"><MdAddShoppingCart/></button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function NotProducts(){
  return <p style={{ color: 'gray'}}>Not products found</p>
}

export function Products({ products }) {
  const hasProducts = products?.length > 0

  return (
    hasProducts 
      ? <ListProducts products={products}/>
      : <NotProducts/>
  )
}
