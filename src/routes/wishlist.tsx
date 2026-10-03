import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wishlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(shop)/_shop/wishlist"!</div>
}
