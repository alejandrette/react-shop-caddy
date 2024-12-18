import Loader from "./Loader"
import { Products } from "./Products"

export default function ProductList({ loading, products }) {
  return (
    <div>
      {loading
        ? <Loader/>
        : <Products products={products}/>
      }
    </div>
  )
}
