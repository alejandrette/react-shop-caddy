import { Products } from './components/Products'
import { useProducts } from './hooks/useProducts'
import ReactLoading from 'react-loading';
import { IoCartOutline } from "react-icons/io5";
import { useMemo, useState } from 'react';
import { Cart } from './components/Cart';

function App() {
  const { products, loading, error } = useProducts()
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

  const handleCategoryChange = (e) => {
    const value = e.target.value
    setFilters(prevFilters => ({
      ...prevFilters,
      category: value
    }))
  }

  const handlePriceChange = (e) => {
    const value = e.target.value
    setFilters(prevFilters => ({
      ...prevFilters,
      maxPrice: value
    }))
  }

  return (
    <>
      <Cart/>
      <h1>Shopping Card <IoCartOutline/></h1>
      {error && <span style={{ color: 'gray' }}>{error}</span>}

      <div className='filters'>
        <select className="form-select" onChange={(e) => handleCategoryChange(e)}>
          <option selected value={'all'}>All Categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <div>
          <input 
            type="range" 
            min='1' 
            max='130' 
            step='5'
            value={filters.maxPrice}
            onChange={(e) => handlePriceChange(e)}/>
          <span>${filters.maxPrice}</span>
        </div>
      </div>

      <div>
        {loading
          ? <div className='loading-spin'><ReactLoading type="spin" color="#fff" height={50} width={50}/></div>
          : <Products products={filteredProducts}/>
        }
      </div>
    </>
  )
}

export default App
