import { Products } from './components/Products'
import { useProducts } from './hooks/useProducts'
import ReactLoading from 'react-loading';

function App() {
  const { products, loading, error } = useProducts()

  return (
    <>
      <h1>Shopping Card</h1>

      {error && <span style={{ color: 'gray' }}>{error}</span>}

      <div>
        {loading
          ? <div className='loading-spin'><ReactLoading type="spin" color="#fff" height={50} width={50}/></div>
          : <Products products={products}/>
        }
      </div>
    </>
  )
}

export default App
