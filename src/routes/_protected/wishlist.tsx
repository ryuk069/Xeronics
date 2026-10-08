import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/wishlist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/wishlist"!</div>
}
