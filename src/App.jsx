import { useProducts } from './hooks/useProducts'
import { Cart } from './components/Cart';
import { useFilters } from './hooks/useFilters';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { CartProvider } from './context/cart';

function App() {
  const { products, loading, error } = useProducts()

  const { filters, filteredProducts, uniqueCategories, handleCategoryChange, handlePriceChange } = useFilters(products)

  return (
    <CartProvider>
      <Cart/>
      <Header
        filters={filters}
        uniqueCategories={uniqueCategories}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />
      {error && <span style={{ color: 'gray' }}>{error}</span>}

      <ProductList
        loading={loading}
        products={filteredProducts}
      />
    </CartProvider>
  )
}

export default App
