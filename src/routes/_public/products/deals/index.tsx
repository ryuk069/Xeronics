import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/products/deals/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_public/products/deals/"!</div>
}
