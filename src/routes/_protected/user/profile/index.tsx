import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/user/profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/user/profile/"!</div>
}
