import Filters from './Filters'
import { IoCartOutline } from "react-icons/io5";

export default function Header({ filters, uniqueCategories, onCategoryChange, onPriceChange }) {
  return (
    <header>
      <h1>Shopping Card <IoCartOutline/></h1>

      <Filters
        filters={filters}
        uniqueCategories={uniqueCategories}
        onCategoryChange={onCategoryChange}
        onPriceChange={onPriceChange}
      />
    </header>
  )
}
