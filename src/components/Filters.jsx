export default function Filters({ filters, uniqueCategories, onCategoryChange, onPriceChange  }) {
  return (
    <div className='filters'>
        <select className="form-select" onChange={(e) => onCategoryChange(e.target.value)}>
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
            onChange={(e) => onPriceChange (e.target.value)}/>
          <span>${filters.maxPrice}</span>
        </div>
      </div>
  )
}
