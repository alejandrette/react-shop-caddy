import { useState, useMemo } from "react";

export const  useFilters = (products) => {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 130
  });

  const filteredProducts = useMemo(() => (
    products?.filter(product => (
      product.price <= filters.maxPrice &&
      (filters.category === 'all' || product.category === filters.category)
    ))
  ), [products, filters]);

  const uniqueCategories = [...new Set(products?.map(product => product.category))]

  const handleCategoryChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      category: value
    }))
  }

  const handlePriceChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      maxPrice: value
    }))
  }

  return { filters, setFilters, filteredProducts, uniqueCategories, handleCategoryChange, handlePriceChange }
}