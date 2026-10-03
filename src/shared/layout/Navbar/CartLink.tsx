// CartLink.tsx
import { Link } from '@tanstack/react-router'
import { ShoppingCart } from 'lucide-react'

export function CartLink() {
  // later: const count = useCartCount()
  return (
    <Link to="/cart" aria-label="Cart">
      <ShoppingCart />
    </Link>
  )
}
