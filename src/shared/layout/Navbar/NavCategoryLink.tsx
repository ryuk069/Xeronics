import { Link } from '@tanstack/react-router'
import { categories } from './nav-data'

export function NavCategoryLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {categories.map((c) => (
        <Link key={c.subcat} to="/products" search={{ cat: 'phone' ,subcat: c.subcat }}>
          {c.label}
        </Link>
      ))}
      <Link to="/products/deals">
        <span className="text-(--discount)">Deals</span>
      </Link>
    </div>
  )
}
