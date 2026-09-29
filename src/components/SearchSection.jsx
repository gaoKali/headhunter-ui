import SearchBar from './SearchBar'
import FilterPanel from './FilterPanel'
export default function SearchSection({ filters, onSelect, onClear, onSearch }) { return <div className="search-section"><SearchBar onSearch={onSearch} /><FilterPanel selected={filters} onSelect={onSelect} onClear={onClear} /></div> }
