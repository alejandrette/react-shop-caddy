import { useState, useEffect } from "react"
import { searchProducts } from "../services/products"

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    searchProducts()
      .then(data => setProducts(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [])

  return { products, loading, error }
}
