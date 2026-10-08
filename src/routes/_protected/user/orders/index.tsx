import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user/orders/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/orders/"!</div>
}
