import { useState, useEffect } from "react"
import { searchProducts } from "../services/products"

export function useProducts() {
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await searchProducts()
        setProducts(result)
      } catch (error) {
        setError(error)
      } finally  {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
