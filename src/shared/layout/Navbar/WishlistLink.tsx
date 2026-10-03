// WishlistLink.tsx
import { Link } from '@tanstack/react-router'
import { Heart } from 'lucide-react'

export function WishlistLink() {
  return (
    <Link to="/wishlist" aria-label="Wishlist">
      <Heart color="crimson" />
    </Link>
  )
}
