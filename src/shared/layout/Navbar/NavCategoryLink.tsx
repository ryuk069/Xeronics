// NavCategoryLinks.tsx
import { Link } from '@tanstack/react-router'
import { categories } from './nav-data'

export function NavCategoryLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {categories.map((c) => (
        <Link key={c.label} to={c.to}>
          {c.label}
        </Link>
      ))}
      <Link to="/products/39874239874">
        <span className="text-(--discount)">Deals</span>
      </Link>
    </div>
  )
}
