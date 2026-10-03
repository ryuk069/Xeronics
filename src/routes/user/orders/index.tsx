import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/orders/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/orders/"!</div>
}
