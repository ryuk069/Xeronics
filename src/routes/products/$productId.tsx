import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(shop)/_shop/products/$productId"!</div>
}
