import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(shop)/_shop/cart"!</div>
}
