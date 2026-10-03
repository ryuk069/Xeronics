import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="searchBar flex flex-1 rounded-lg items-center py-1 px-2 gap-2 bg-(--surface-3)">
      <Search className="text-(--text-secondary)" size={20} />
      <input
        type="text"
        aria-label="Search products"
        className="w-full border-none text-(--text-primary) outline-none"
        placeholder="Search for Products, Brands and More"
      />
    </div>
  )
}
